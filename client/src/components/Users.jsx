import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import Link from './Link';
import './Table.css';
                
function Users() {
    const { id } = useParams();
    const [ users, setUsers ] = useState([]);

    // Make get request to express server to find user
    useEffect(() => {
        const endPoint = 'http://localhost:5000/api/users/' + id;
        fetch(endPoint)
            .then(res => res.json())
            .then((data) => {
                setUsers(data);
            })
            .catch(err => console.log(err));
    }, [])

    const renderUser = (user, idx) => {
        //Generates the jsx for a single user
        return (
            <tr key={idx}>
                <td>{user.login}</td>                  
                <td><Link title="Link to user profile" href={'/user/' + user.login} /></td>
                <td><Link title="Link to home page" href={user.html_url} target="_blank" rel="noreferrer"/></td>           
            </tr>
        );
    }
    
    const usersTableData = users.map((user, idx) => {
        return renderUser(user, idx);
    });

    const showTable = (users, title) => {
        //Generates the jsx for multiple users
        return (
            <div className="table-container">
            <h1>{title}</h1>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>User name</th>
                        <th>User profile</th>
                        <th>Home page</th>
                    </tr>
                </thead>
                <tbody>
                    {usersTableData}
                </tbody>
             </Table>
            </div>
        );
    }

    return (
        showTable(users, "Results from GitHub:")
    );
}

export default Users;

//References:
//https://medium.com/@timtan93/states-and-componentdidmount-in-functional-components-with-hooks-cac5484d22ad
//Dynamic routing: https://medium.com/fantageek/how-to-use-dynamic-route-in-react-router-5-92d0b66488ff
//Dynamic routing: https://www.freecodecamp.org/news/hitchhikers-guide-to-react-router-v4-a957c6a5aa18/
//Using the State Hook: https://reactjs.org/docs/hooks-state.html#tip-what-do-square-brackets-mean
//Create table with bootstrap: https://www.youtube.com/watch?v=nV7Mf77GiOc
//CSS grid tutorial https://www.youtube.com/watch?v=jV8B24rSN5o
//Newer react router wiht hooks: https://www.youtube.com/watch?v=CZeulkp1ClA