import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ActionButton.css'

class ActionButton extends Component {
    constructor(props) {
        super(props)
        console.log('ActionButton :: constructor()');
        this.state = {
            count: 1
        };
    }
    handleBtnClick() {
        let { count } = this.state;
        let { value } = this.props;
        this.setState({ count: count + 1 }, () => {
            setTimeout(() => {
                let { onAction } = this.props;
                if (onAction) {
                    onAction(value * count);
                }
            }, 0)
        });

    }
    render() {
        console.log('ActionButton :: render()');
        let { value } = this.props;
        let { count } = this.state;
        let className = `btn ${value > 0 ? 'btn-success' : 'btn-warning'}`;
        return (
            <div className="action-button">
                <div className="card">
                    <div className="card-body">
                        <button className={className} onClick={() => { this.handleBtnClick() }}>
                            {value} : <span className="badge badge-danger">{count}</span>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

ActionButton.propTypes = {
    value: PropTypes.number,
    onAction: PropTypes.func
}
ActionButton.defaultProps = {
    value: 'click me'
}

export default ActionButton;