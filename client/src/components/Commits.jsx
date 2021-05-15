import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import './Table.css';
                
function Commits() {
    const { userId, repoId } = useParams();
    const [ commits, setCommits ] = useState([]);
    const [ repo, setRepo ] = useState("");

    // Make get request to express server to find repos
    useEffect(() => {
        const endPoint = 'http://localhost:5000/api/repos/' + userId + '/' + repoId + '/commits';
        fetch(endPoint)
            .then(res => res.json())
            .then((data) => {
                setCommits(data[0]);
                setRepo(repoId);
            })
            .catch(err => console.log(err));
    }, [])

    const renderCommit = (commit, idx) => {
        //Generates the jsx for a single commit
        console.log('renderCommit', commit);
        return (
            <tr key={idx}>
                <td>{commit.commit.author.name}</td>                  
                <td>{commit.commit.message}</td>                  
                <td>{commit.commit.author.date}</td>                  
            </tr>
        );
    }
    
    const commitsTableData = commits.map((commit, idx) => {
        return renderCommit(commit, idx);
    });

    const showCommits = (commits, title) => {
        //Generates the jsx for multiple commits
        return (
            <div className="table-container">
            <h1>{title}</h1>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Message</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {commitsTableData}
                </tbody>
             </Table>
            </div>
        );
    }

    return (
        showCommits(commits, `Commit details for ${repo} repo from GitHub:`)  
    );
}

export default Commits;

//References:
