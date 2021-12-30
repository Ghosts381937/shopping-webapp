import './App.css';
import React, { useState, useEffect } from 'react';
import axios from "./components/Axios";
import Topbar from './components/Topbar/Topbar'
//import Register from './components/Register'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
// import SearchBar from './components/SearchBar';
import Products from "./components/Products/ProductList";
import ProductPage from "./components/Products/Product/ProductPage"
// import Submit from './components/Submiit';
import Carts from "./components/Topbar/Cart";
function App() {
  const [searchResult, setSearchResult] = useState([]);
  const handleSearchResult = (result) => {
    setSearchResult(result);
  }
  return (
    <div className='app'>
      <Router>
        <Topbar searchResult = {searchResult} handleSearchResult = {(result) => handleSearchResult(result)}/>
        <Routes>
          <Route exact path = "/" element = {<Products searchResult = {searchResult}/>} />
          <Route path = "/productpage" element = {<ProductPage />} />
		      <Route path="/Cart" element={<Carts />} />
        </Routes>
      </Router>
    </div> 
  );
  
};

export default App;
