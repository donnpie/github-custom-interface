import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import './Users.css';
import Link from './Link';
                
function Users() {
    const { id } = useParams();
    const [ users, setUsers ] = useState([
        {
            login: "",
            avatar_url: "",
            html_url: "",
            bio: ""
        }
    ]);

    // Make get request to express server to find user
    useEffect(() => {
        const endPoint = 'http://localhost:5000/api/users/' + id;
        fetch(endPoint)
            .then(res => res.json())
            .then((data) => {
                // console.log("data:", data[0]);
                setUsers(data);
                console.log('users', users);
            })
            .catch(err => console.log(err));
    }, []);

    const showUser = (users, title) => {
        return (
            <>
            <h1>{title}</h1>
            <div className="grid-container">
                <div className="grid-item">Name</div>
                <div className="grid-item">{users[0].login}</div>
                <div className="grid-item">Avatar</div>
                <div className="grid-item"><img src={users[0].avatar_url} className="avatar" alt="avatar"/></div>
                <div className="grid-item">Home page</div>
                <div className="grid-item"><a href={users[0].html_url} target="_blank" rel="noreferrer">Link to home page</a></div>
                <div className="grid-item">Bio</div>
                <div className="grid-item">{users[0].bio}</div>
                <div className="grid-item"><Link title="Link to repos" href={'/repos/' + users[0].login}/></div>
            </div>
            </>
        );
    }

    return (
        showUser(users, "User details from GitHub:")   
    );
}

export default Users;

//References:
