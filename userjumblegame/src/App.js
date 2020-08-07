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

function App() {
  return (
    <Router>
      <Route path='/' component={} exact/>
    </Router>
  );
}

export default App;
