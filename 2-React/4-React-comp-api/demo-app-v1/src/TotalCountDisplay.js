import React, { Component } from 'react';
import PropTypes from 'prop-types';
class TotalCountDisplay extends Component {
    constructor(props) {
        super(props)
        console.log('TotalCountDisplay :: construction()');
    }
    render() {
        console.log('TotalCountDisplay :: render()');
        return (
            <div className="alert alert-danger">
                Total count : {this.props.value}
            </div>
        );
    }
}
TotalCountDisplay.defaultProps = {
    value: 0
}
TotalCountDisplay.propTypes = {
    value: PropTypes.number
}

export default TotalCountDisplay;