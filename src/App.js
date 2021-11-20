import './App.css';
import React from 'react';
import Topbar from './components/Topbar'
//import Register from './components/Register'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
function App() {

  return (
    <div className='app'>
      <Router>
        <Topbar /> 
        <Routes>
        </Routes>
      </Router>
    </div> 
  );
  
};

export default App;
