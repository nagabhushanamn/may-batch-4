import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Greeting extends Component {
    constructor(props) {
        super(props)
        console.log('Greeting :: constructor()');
        // this.state = {
        //     serverMessage: ''
        // }
        // this.state = {
        //     now: new Date().toTimeString()
        // }
    }
    render() {
        console.log('Greeting :: render()');
        let { message } = this.props; // destructuring ( es6 )
        // let { serverMessage } = this.state;
        // let { now } = this.state
        let now = new Date().toTimeString();
        return (
            <div className="alert alert-info">
                <span className="badge badge-primary">
                    {message}
                </span>
                <hr />
                {/* {serverMessage} */}
                {now}
            </div>
        );
    }
    componentDidMount() {
        console.log('Greeting :: componentDidMount()');
        // n/w call
        // setTimeout(() => {
        //     let serverMessage = "Hello! from server-side";
        //     this.setState({ serverMessage });
        // }, 2000);
        this.interval = setInterval(() => {
            //this.setState({ now: new Date().toTimeString() });
            this.forceUpdate();
        }, 100);
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('Greeting :: shouldComponentUpdate()');
        // console.log(this.props);
        // console.log(nextProps);
        //return this.props.message !== nextProps.message
        return true
    }
    componentDidUpdate() {
        console.log('Greeting :: componentDidUpdate()');
    }
    componentWillUnmount() {
        console.log('Greeting :: componentWillUnmount()');
        clearInterval(this.interval);
    }

}
Greeting.defaultProps = {
    message: 'dono, how to greet you'
}
Greeting.propTypes = {
    message: PropTypes.string
}

export default Greeting;