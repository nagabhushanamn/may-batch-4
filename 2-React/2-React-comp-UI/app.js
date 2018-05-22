
// step-1 : component's class

// class Greeting extends React.Component {
//     render() {
//         let spanEle = React.createElement('span', { className: 'badge badge-primary' }, 'good noon');
//         let divEle = React.createElement(
//             'div',
//             { className: 'alert alert-info' },
//             spanEle
//         );
//         return divEle;
//     }
// }

// using JSX ( JavaScript eXtenstion)



class Greeting extends React.Component {
    constructor(props) {
        super(props)
        // console.log(props);
        console.log('Greeting :: constructor()');
    }
    render() {
        console.log('Greeting :: render()');
        // let message=this.props.message;
        // or
        let { message, from } = this.props; // destructuring ( es6 )
        return (
            <div className="alert alert-info">
                <span className="badge badge-primary">
                    {message}
                </span>
                <hr />
                &mdash; {from}
            </div>
        );
    }
}


class App extends React.Component {
    constructor(props) {
        super(props);
        console.log('App :: constructor()');
        this.state = {
            message: 'greetings'
        }
    }
    changeMessage(message) {
        this.setState({ message });
    }
    render() {
        console.log('App :: render()');
        let { message } = this.state;
        return (
            <div className="jumbotron">
                <button onClick={(e) => { this.changeMessage('good morning') }}>GM</button>
                <button onClick={(e) => { this.changeMessage('good Noon') }}>GN</button>
                <button onClick={(e) => { this.changeMessage('good evening') }}>GE</button>
                <hr />
                <Greeting message={message} from="Nag" />
            </div>
        );
    }
}

// let greeting1 = React.createElement(Greeting, {message:'im hungry',from:'IBM'}, null);

ReactDOM.render(<App />, document.getElementById('root'));