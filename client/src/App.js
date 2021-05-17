//Git-api client/src/app.js
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Users from './components/Users';
import GitHubUser from './components/GitHubUser';
import GitLabUser from './components/GitLabUser';
import GitHubRepos from './components/GitHubRepos';
// import GitLabRepos from './components/GitLabRepos';
import Repo from './components/Repo';
import Commits from './components/Commits';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route component={Nav}/>
        <Switch>
          <Route exact={true} path="/" component={Home}/>
          <Route path="/users/:id" component={Users} />
          <Route path="/user/github/:id" component={GitHubUser} />
          <Route path="/user/gitlab/:id" component={GitLabUser} />
          <Route exact path="/repos/github/:id" component={GitHubRepos} />
          {/* <Route exact path="/repos/gitlab/:id" component={GitLabRepos} /> */}
          <Route exact path="/repos/:userId/:repoId" component={Repo} />
          <Route exact path="/repos/:userId/:repoId/commits" component={Commits} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
