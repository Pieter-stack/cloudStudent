import SearchBar from "./components/SearchBar";
import Logout from "./components/Logout";
import LoginPage from "./components/LoginPage";
import StudentPage from "./components/StudentPage";
import TeacherPage from "./components/TeacherPage";
import React, {useState,useEffect} from 'react';
import logo from './public/logo.svg';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {

  return (
    <div className="App">
      <div className = "container">
        <div className = 'logo'>
          <img className='logo_img' src={logo}></img>
        </div>
        <Logout/>
        <Router>
        <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/student"  component={StudentPage} />
        <Route path="/teacher"  component={TeacherPage} />
        </Switch>
       </Router>
      </div>
    </div>
  );
}

export default App;

