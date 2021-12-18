import './App.css';
import React from 'react';
import Topbar from './components/Topbar'
//import Register from './components/Register'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
// import SearchBar from './components/SearchBar';
import Products from "./components/Products/ProductList";
// import Submit from './components/Submiit';
import Carts from "./components/Cart";
function App() {

  return (
    <div className='app'>
      <Router>
        <Topbar /> 
        <Routes>
		  <Route path="/" element={<Products />} />
		  <Route path="/Cart" element={<Carts />} />
        </Routes>
      </Router>
    </div> 
  );
  
};

export default App;
