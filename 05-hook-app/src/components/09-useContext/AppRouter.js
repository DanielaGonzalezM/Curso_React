//https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom
// In react-router-dom v6, "Switch" is replaced by routes "Routes". You need to update the import from
// import { Switch, Route } from "react-router-dom";
// to
// import { Routes ,Route } from 'react-router-dom';
// You also need to update the Route declaration from
// <Route path="/" component={Home} />
// to
// <Route path='/welcome' element={<Home/>} />

import React from 'react'
import {
    BrowserRouter as Router,
    Routes ,
    Route,
    Navigate
  } from "react-router-dom";
import AboutScreen from './AboutScreen';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import NavBar from './NavBar';

const AppRouter = () => {
  return (
    <Router>
    <NavBar />

        <div>
            <Routes >
                <Route path='/about'  element={<AboutScreen/>} />
                <Route path='/login'  element={<LoginScreen/>} />
                <Route path='/'  element={<HomeScreen/>} />
                <Route path='/*' element={<Navigate replace to="/" />} />
            </Routes >
        </div>
    </Router>
    
  )
}

export default AppRouter