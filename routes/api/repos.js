const express = require('express');
const router = express.Router();
require('isomorphic-fetch'); //Required when using fetch from Node

//Routes for searching a repo
router.get('/github/:userId/:repoId', (req, res) => {
    const userId = req.params.userId;
    const repoId = req.params.repoId;
    console.log('userId: ', userId);
    console.log('repoId: ', repoId);
    let results = [];
    
    //Query the github api
    const gitHubUri = 'https://api.github.com/repos/' + userId + '/' + repoId;
    console.log('gitHubUri', gitHubUri);
    fetch(gitHubUri)
        .then(res => res.json())
        .then(data => {
            results.push(data);
            //console.log(results);
            console.log("Get request for repo received correctly by server");
            res.json(results); 
        })
        .catch(err => console.log(err));

    //Test code
    //res.json({name: "My name"})

    //Query the GitLab api
    // const gitLabUri = 'https://gitlab.com/api/v4/users?username=';
    // const testName = "jack_smith";
    // fetch(gitLabUri+testName)
    //     .then(res => res.json())
    //     .then(data => {
    //         results.push(data);
    //         //console.log(results);
    //         res.json(results); 
    //     })
    //     .catch(err => console.log(err));

    //Query the BitBucket api
    //const bitBucketUri = 'https://api.github.com/users/';
    // fetch(bitBucketUri+id)
    //     .then(res => res.json())
    //     .then(data => {
    //         results.push(data);
    //         //console.log(results);
    //         res.json(results); 
    //     })
    //     .catch(err => console.log(err));

    //res.send("Hello with id"); 
});

router.get('/github/:userId/:repoId/commits', (req, res) => {
    const userId = req.params.userId;
    const repoId = req.params.repoId;
    console.log('userId: ', userId);
    console.log('repoId: ', repoId);
    let results = [];
    
    //Query the github api
    const gitHubUri = 'https://api.github.com/repos/' + userId + '/' + repoId + '/commits';
    console.log('gitHubUri', gitHubUri);
    fetch(gitHubUri)
        .then(res => res.json())
        .then(data => {
            results.push(data);
            //console.log(results);
            console.log("Get request for repo received correctly by server");
            res.json(results); 
        })
        .catch(err => console.log(err));
    });
//Routes for getting repos for a given user
// router.get('/:id/repos', (req, res) => {
//     const id = req.params.id;
//     //console.log('id: ', gitHubId);
//     let results = [];
    
//     //Query the github api
//     const gitHubUri = 'https://api.github.com/users/';
//     fetch(gitHubUri + id + '/repos')
//         .then(res => res.json())
//         .then(data => {
//             results.push(data);
//             //console.log(results);
//             console.log("Get request for repos received correctly by server");
//             res.json(results); 
//         })
//         .catch(err => console.log(err));

    //Query the GitLab api
    // const gitLabUri = 'https://gitlab.com/api/v4/users?username=';
    // const testName = "jack_smith";
    // fetch(gitLabUri+testName)
    //     .then(res => res.json())
    //     .then(data => {
    //         results.push(data);
    //         //console.log(results);
    //         res.json(results); 
    //     })
    //     .catch(err => console.log(err));

    //Query the BitBucket api
    //const bitBucketUri = 'https://api.github.com/users/';
    // fetch(bitBucketUri+id)
    //     .then(res => res.json())
    //     .then(data => {
    //         results.push(data);
    //         //console.log(results);
    //         res.json(results); 
    //     })
    //     .catch(err => console.log(err));

    //res.send("Hello with id"); 
//})

//Routes for getting commits for a given user and repo
// router.get('/:id/:repo/commits', (req, res) => {
//     const id = req.params.id;
//     const repo = req.params.repo;
//     //console.log('id: ', gitHubId);
//     let results = [];
    
//     //Query the github api
//     //Example uri: https://api.github.com/repos/donnpie/hangman/commits
//     const gitHubUri = 'https://api.github.com/repos/';
//     fetch(gitHubUri + id + '/' + repo + '/commits')
//         .then(res => res.json())
//         .then(data => {
//             results.push(data);
//             //console.log(results);
//             res.json(results); 
//         })
//         .catch(err => console.log(err));

    //Query the GitLab api
    // const gitLabUri = 'https://gitlab.com/api/v4/users?username=';
    // const testName = "jack_smith";
    // fetch(gitLabUri+testName)
    //     .then(res => res.json())
    //     .then(data => {
    //         results.push(data);
    //         //console.log(results);
    //         res.json(results); 
    //     })
    //     .catch(err => console.log(err));

    //Query the BitBucket api
    //const bitBucketUri = 'https://api.github.com/users/';
    // fetch(bitBucketUri+id)
    //     .then(res => res.json())
    //     .then(data => {
    //         results.push(data);
    //         //console.log(results);
    //         res.json(results); 
    //     })
    //     .catch(err => console.log(err));

    //res.send("Hello with id"); 
//})


module.exports = router;