import './App.css';
import React from 'react';
import Topbar from './components/Topbar'
//import Register from './components/Register'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
// import SearchBar from './components/SearchBar';
import Products from "./components/Products/ProductList";
import ProductPage from "./components/Products/Product/ProductPage"
// import Submit from './components/Submiit';

function App() {

  return (
    <div className='app'>
      <Router>
        <Topbar />
        <Routes>
          <Route exact path = "/" element = {<Products />} />
          <Route path = "/productpage" element = {<ProductPage />} />
        </Routes>
      </Router>
    </div> 
  );
  
};

export default App;
