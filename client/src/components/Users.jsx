import React from 'react';
import Button from './Button.jsx';
import Button1Arg from './Button.jsx';
import Link from './Link';
import { Table } from 'react-bootstrap';
import './Users.css';


class Users extends React.Component {
    constructor() {
        super();
        this.state = {
            userName: "",
            users: [],
            repos: [],
            show: "table"
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUserClick = this.handleUserClick.bind(this);
        this.handleBackToTable = this.handleBackToTable.bind(this);
        this.handleGetRepos = this.handleGetReops.bind(this);
        this.handleGetCommitMessages = this.handleGetCommitMessages.bind(this);
    }

    //handler for when form is submitted
    handleSubmit(e) {
        e.preventDefault();
        const id = e.target.elements.user.value;
        //console.log('id: ', id);
        this.setState({userName: id});
        const endPoint = 'http://localhost:5000/api/users/' + id;
        //const endPoint = '/api/users/' + id;
        //console.log('endPoint: ', endPoint);

        //Make get request to express server to find user
        fetch(endPoint)
            .then(res => res.json())
            .then((data) => {
                //console.log(data);
                this.setState({users: data});
            })
            .catch(err => console.log(err));
    }

    //handler for when form is submitted
    handleGetReops() {
        const id = this.state.userName;
        //console.log('id: ', id);
        //this.setState({show: "repos"});
        const endPoint = '/api/users/' + id +'/repos';
        //console.log('endPoint: ', endPoint);

        //Make get request to express server to find repos
        fetch(endPoint)
            .then(res => res.json())
            .then((data) => {
                //console.log(data);
                this.setState({
                    repos: data[0],
                    show: "repos"
                });
            })
            .catch(err => console.log(err));
    }

    handleGetCommitMessages(repoName) {
        const id = this.state.userName;
        //console.log('id: ', id);
        //https://api.github.com/repos/donnpie/hangman/commits
        //console.log(repoName)
        const endPoint = '/api/repos/' + id + '/' + repoName + '/commits';
        //console.log('endPoint: ', endPoint);

        //Make get request to express server to find commit messages for repos
        fetch(endPoint)
            .then(res => res.json())
            .then((data) => {
                //console.log(data);
                this.setState({
                    repos: data[0],
                    show: "repos"
                });
            })
            .catch(err => console.log(err));
    }

    handleUserClick() {
        //console.log("handleUserClick")
        this.setState({show: "user"});
    }

    handleBackToTable() {
        this.setState({show: "table"});
    }

    renderUser(user, idx) {
        //Generates the jsx for a single user
        return (
            <tr key={idx}>
                <td>{user.login}</td>
                <td><Button label="Link to user profile" handler={this.handleUserClick}/></td>
                <td><Link title="Link to home page" href={user.html_url} target="_blank" rel="noreferrer"/></td>
                <td><Button label="Link to repos" handler={this.handleGetRepos}/></td>
            </tr>
        );
    }

    renderRepo(repo, idx) {
        //Generates the jsx for a single repo
        //console.log(repo);
        return (
            <tr key={idx}>
                <td>{repo.name}</td>
                <td><Link title="Link" href={repo.html_url} target="_blank" rel="noreferrer"/></td>
                <td><Button1Arg label="Commit messages" handler={this.handleGetCommitMessages} arg1={repo.name}/></td>
            </tr>
        );
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
            </>
        );
    }

    showTable(users, title) {
        //Generates the jsx for multiple users
        return (
            <>
            <h1>{title}</h1>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>User name</th>
                        <th>User profile</th>
                        <th>Home page</th>
                        <th>Repos</th>
                    </tr>
                </thead>
                <tbody>
                    {users}
                </tbody>
             </Table>
            </>
        );
    }

    showRepos(repos, title) {
        //Generates the jsx for multiple repos
        return (
            <>
            <h1>{title}</h1>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Repo name</th>
                        <th>Link</th>
                        <th>Commits</th>
                    </tr>
                </thead>
                <tbody>
                    {repos}
                </tbody>
             </Table>
            </>
        );
    }

    showUser(user, title)  {
        return (
            <>
            <h1>{title}</h1>
            <div className="grid-container">
                <div className="grid-item">Name</div>
                <div className="grid-item">{this.state.userName}</div>
                <div className="grid-item">Avatar</div>
                <div className="grid-item"><img src={this.state.users[0].avatar_url} className="avatar" alt="avatar"/></div>
                <div className="grid-item">Home page</div>
                <div className="grid-item"><a href={this.state.users[0].html_url} target="_blank" rel="noreferrer">Link to home page</a></div>
                <div className="grid-item">Bio</div>
                <div className="grid-item">{this.state.users[0].bio}</div>
                <div className="grid-item">Repos</div>
            </div>
            </>
        );
    }

    render() {
        const users = this.state.users.map((user, idx) => {
            return this.renderUser(user, idx);
        });
        const repos = this.state.repos.map((repo, idx) => {
            //console.log(repo);
            return this.renderRepo(repo, idx);
        });
        //console.log(repos);
        const showTable = this.state.show === "table" ? true : false;
        const showUser = this.state.show === "user" ? true : false;
        const showRepos = this.state.show === "repos" ? true : false;
        return (
            <div className="container">
                {showTable && this.showForm()}
                {showTable && this.showTable(users, "Results from GitHub:")}
                {showUser && this.showUser(this.state.user, "User details from GitHub:")}
                {showRepos && this.showRepos(repos[0], "Repos from GitHub:")}
                {(showUser || showRepos) && <Button label="Back to search results" handler={this.handleBackToTable}/>}
            </div>
        );
    }
}

export default Users;

//References:
//https://www.youtube.com/watch?v=nV7Mf77GiOc
//Grid display: https://www.youtube.com/watch?v=jV8B24rSN5o