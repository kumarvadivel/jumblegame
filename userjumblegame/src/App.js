import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { AnimatedSwitch,spring } from 'react-router-transition';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import Rulesarea from './components/rulesarea/rulesarea';
import Gamearea from './components/gamearea/gamearea';

function App() {
  return (
    <Router>
      
      <Route path='/' component={Home} exact/>
      <Route path='/startgame/:id' component={Rulesarea} exact />
      <Route path='/game/:id/:qno' component={Gamearea} exact />
      
    </Router>
  );
}

export default App;
