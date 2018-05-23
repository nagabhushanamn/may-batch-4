import React, { Component } from 'react';

class ReviewForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }
    toggleForm() {
        let { isOpen } = this.state;
        this.setState({ isOpen: !isOpen });
    }
    handleFormSubmit(e) {
        e.preventDefault();
        let newReview = {
            stars: this.refs.stars.value,
            author: this.refs.author.value,
            body: this.refs.body.value,
        };
        let { onNewReview } = this.props;
        onNewReview(newReview);
        this.toggleForm();
    }
    renderForm() {
        let { isOpen } = this.state;
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
                                <select className="form-control" ref="stars">
                                    {[1, 2, 3, 4, 5].map(n => <option key={n}>{n}</option>)}
                                </select>
                            </div>
                            <div className="form-group">
                                <label>author</label>
                                <input className="form-control" ref="author" />
                            </div>
                            <div className="form-group">
                                <label>body</label>
                                <textarea className="form-control" ref="body"></textarea>
                            </div>
                            <button className="btn btn-primary">submit</button>
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