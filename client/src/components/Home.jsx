import React from 'react';
import { Redirect } from 'react-router-dom';
import Button from './Button.jsx';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            path: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //handler for when form is submitted
    handleSubmit(e) {
        e.preventDefault();
        const id = e.target.elements.user.value;
        const path = `/users/${id}`;
        this.setState({
            id,
            path
        });
    }

    showForm() {
        return (
            <>
                <h1>Enter a username:</h1>
                <form  className="form-container"  onSubmit={this.handleSubmit}>
                    <label htmlFor="user">User: 
                        <input type="text" 
                            name="user"
                            className="ml-4 p-1"
                            placeholder="user name"
                        />
                    </label>
                    <Button label="Search"/>
                </form>

                {/* If the path is set, nagivate there: */}
                {this.state.path && <Redirect to={this.state.path}/>}
                   
            </>
        );
    }

    render() {
        return (
            this.showForm()
        );
    }
}

export default Home;