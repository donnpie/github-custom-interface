import React from 'react';
import './Button.css';

//Handler takes in one parameter from parent
class Button1Arg extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    //Executes the referened function passed down from parent
    //Arg1 must be an argument that suits the passed down function
    handleClick() {
        console.log(this.props.arg1);
        this.props.handler(this.props.arg1);
    }

    render() {
        return (
            <button 
                className="btn" 
                onClick={this.handleClick}
                disabled={this.props.disabled}
            >
                {this.props.label}
            </button>
            )
    }
}

export default Button1Arg;
