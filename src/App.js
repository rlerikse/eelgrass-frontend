import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {Button} from 'primereact/button';
import logo from './masbays.png';
import Home from './Home.js';
import TripInfo from './TripInfo.js';
import './App.css';

function Login() {
  return <h2>Login</h2>;
}
function Landing() {
  return <h2>Landing</h2>;
}

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/tripinfo">TripInfo</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/tripinfo">
            <TripInfo />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/landing">
            <Landing />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
