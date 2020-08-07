import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/navbar/navbar'
import Login from './components/login/login';
import Home from './components/home/home';
import Newgame from './components/newgame/newgame';
import Reviewgame from './components/reviewgame/reviewgame';
import Footer from './components/footer/footer';
import Editgame from './components/editgame/editgame';
import Editform from './components/editform/editform';
function App() {
  return (
    <Router>
  <Navbar></Navbar>
    <Route path="/" component={Login} exact></Route>
    <Route path="/home" component={Home} exact></Route>
    <Route path="/newgame" component={Newgame} exact></Route>
    <Route path="/game/:id" component={Reviewgame} exact></Route>
    <Route path="/editgame" component={Editgame} exact></Route>
    <Route path="/edit/:id" component={Editform} exact></Route>
    <Footer></Footer>
    </Router>
    
   
  )
}

export default App;
