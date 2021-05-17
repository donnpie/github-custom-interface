import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Link from './Link';
                
function Repo() {
    const { userId, repoId } = useParams();
    const [ repo, setRepo ] = useState([
        {
            name: "",
            owner: {
                login: "default"
            },
            description: "",
            html_url: ""
        }
    ]);

    // Make get request to express server to find repos
    useEffect(() => {
        const endPoint = 'http://localhost:5000/api/repos/github/' + userId + '/' + repoId;
        fetch(endPoint)
            .then(res => res.json())
            .then((data) => {
                setRepo(data[0]);
            })
            .catch(err => console.log(err));
    }, [])

    const showRepo = (repo, title) => {
        //Generates the jsx for multiple repos
        return (
            <>
            <h1>{title}</h1>
            <div className="grid-container">
                <div className="grid-item">Name</div>
                <div className="grid-item">{repo.name}</div>
                <div className="grid-item">Description</div>
                <div className="grid-item">{repo.description}</div>
                <div className="grid-item">Github page</div>
                <div className="grid-item"><a href={repo.html_url} target="_blank" rel="noreferrer">Link to home page</a></div>
                <div className="grid-item">Link to commits</div>
                {repo.owner && <div className="grid-item"><Link title="Link to commits" href={'/repos/' + repo.owner.login + '/' + repo.name + '/commits'}/></div>}
            </div>
            </>
        );
    }

    return (
        showRepo(repo, "Repos details from GitHub:") 
    );
}

export default Repo;

//References:
