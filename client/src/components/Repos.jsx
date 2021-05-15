import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import Link from './Link';
import './Table.css';
                
function Repos() {
    const { id } = useParams();
    const [ repos, setRepos ] = useState([]);

    // Make get request to express server to find repos
    useEffect(() => {
        const endPoint = 'http://localhost:5000/api/users/' + id + '/repos';
        fetch(endPoint)
            .then(res => res.json())
            .then((data) => {
                setRepos(data[0]);;
            })
            .catch(err => console.log(err));
    }, [])

    const showRepos = (repos, title) => {
        //Generates the jsx for multiple repos
        return (
            <div className="table-container">
            <h1>{title}</h1>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Repo name</th>
                        <th>Repo owner</th>
                        <th>Link</th>
                    </tr>
                </thead>
                <tbody>
                    {reposTableData}
                </tbody>
             </Table>
            </div>
        );
    }

    const renderRepo = (repo, idx) => {
        //Generates the jsx for a single repo
        return (
            <tr key={idx}>
                <td>{repo.name}</td>
                <td>{repo.owner.login}</td>
                <td><Link title="Link" href={'/repos/' + repo.owner.login + '/' + repo.name} target="_blank" rel="noreferrer"/></td>
            </tr>
        );
    }

    const reposTableData = repos.map((repo, idx) => {
        return renderRepo(repo, idx);
    });

    return (
        showRepos(repos[0], "Repos from GitHub:")
    );
}

export default Repos;

//References:
