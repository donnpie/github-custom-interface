//Git-api client/src/app.js
import { BrowserRouter, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Users from './components/Users';
import User from './components/User';
import Repo from './components/Repo';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route component={Nav}/>
        <Route exact={true} path="/" component={Home}/>
        <Route path="/users" component={Users}/>
        <Route path="/user" component={User}/>
        <Route path="/repo" component={Repo}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
