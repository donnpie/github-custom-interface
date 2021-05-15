//Git-api client/src/app.js
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Users from './components/Users';
import User from './components/User';
import Repos from './components/Repos';
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
          <Route path="/user/:id" component={User} />
          <Route exact path="/repos/:id" component={Repos} />
          <Route exact path="/repos/:userId/:repoId" component={Repo} />
          <Route exact path="/repos/:userId/:repoId/commits" component={Commits} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
