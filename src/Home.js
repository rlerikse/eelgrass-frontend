import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {Button} from 'primereact/button';
import logo from './masbays.png';
import './Home.css';

function Login() {
  return <h2>Login</h2>;
}
function TripInfo() {
  return <h2>TripInfo</h2>;
}
function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <Link to="/tripinfo">
          <Button label="Start New Trip" className="p-button-raised p-button-success" />
        </Link>
      </header>
    </div>
  );
}

export default Home;
