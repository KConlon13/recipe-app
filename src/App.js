import React from 'react';
import './App.css';
import Navbar from "./Navbar";
import About from "./About";
import Home from "./Home";
import Featured from "./Featured";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/featured" component={Featured}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;