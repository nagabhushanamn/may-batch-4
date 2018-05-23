import React, { Component } from 'react';

class ReviewForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            stars: 5,
            author: 'who@email.com',
            body: ''
        };
    }
    toggleForm() {
        let { isOpen } = this.state;
        this.setState({ isOpen: !isOpen });
    }
    handleChange(e) {
        let field = e.target.id;
        let fieldValue = e.target.value;
        this.setState({ [field]: fieldValue });
    }
    handleFormSubmit(e) {
        e.preventDefault();
        let { stars, author, body } = this.state;
        let newReview = {
            stars,
            author,
            body
        }
        let { onNewReview } = this.props;
        onNewReview(newReview);
        this.toggleForm();
    }
    disableSubmitBtn() {
        let { stars } = this.state;
        if (stars < 5) return true
        else return false;
    }
    renderForm() {
        let { isOpen, stars, author, body } = this.state;
        if (!isOpen) {
            return (
                <button className="btn btn-info" onClick={() => { this.toggleForm() }}>
                    <i className="fa fa-plus"></i>
                </button>
            )
        } else {
            return (
                <div className="card">
                    <div className="card-header">Review Form</div>
                    <div className="card-body">
                        <form onSubmit={(e) => { this.handleFormSubmit(e) }}>
                            <div className="form-group">
                                <label>stars</label>
                                <select className="form-control" id="stars" onChange={(e) => this.handleChange(e)} value={stars}>
                                    {[1, 2, 3, 4, 5].map(n => <option key={n}>{n}</option>)}
                                </select>
                                {stars < 5 ? 'give me 5 stars' : null}
                            </div>
                            <div className="form-group">
                                <label>author</label>
                                <input className="form-control" id="author" onChange={(e) => this.handleChange(e)} value={author} />
                            </div>
                            <div className="form-group">
                                <label>body</label>
                                <textarea className="form-control" id="body" onChange={(e) => this.handleChange(e)} value={body}></textarea>
                            </div>
                            <button disabled={this.disableSubmitBtn()} className="btn btn-primary">submit</button>
                            <button onClick={() => { this.toggleForm() }} type="button" className="btn btn-danger">cancel</button>
                        </form>
                    </div>
                </div>
            );
        }
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-8 col-md-8">
                        {this.renderForm()}
                    </div>
                </div>
            </div>
        );
    }
}

export default ReviewForm;