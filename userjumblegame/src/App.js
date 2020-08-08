import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';

function App() {
  return (
    <Router>
      <Route path='/' component={Home} exact/>
    </Router>
  );
}

export default App;
