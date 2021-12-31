import './App.css';
import React, { useState, useEffect } from 'react';
import axios from "./components/Axios";
import Topbar from './components/Topbar/Topbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Products from "./components/Products/ProductList";
import ProductPage from "./components/Products/Product/ProductPage"
import Carts from "./components/Topbar/Cart";
import InfoPage from './components/Topbar/InfoPage';
import AdminCart from './components/Topbar/AdminCartPage';

function App() {
  const [searchResult, setSearchResult] = useState([]);
  const handleSearchResult = (result) => {
    setSearchResult(result);
  }

  const [permission, setPermission] = useState("");
  const [username, setUsername] = useState(null);
  const handleAuthorize = () => {
    axios.post("/authorize", null, { withCredentials: true })
      .then((response) => {
        setPermission(response.data);
      })
  }
  const handleGetUsername = () => {
    axios.post("/member/requestMemberInfo", null, { withCredentials: true })
      .then((response) => {
        setUsername(response.data.username);
      })
  }

  useEffect(() => {
    handleAuthorize();
    handleGetUsername();
  }, []);
  if(permission === "") return null;  
  return (
    <div className='app'>
      <Router>
        <Topbar searchResult = {searchResult} handleSearchResult = {(result) => handleSearchResult(result)} permission = {permission} username = {username}/>
        <Routes>
          <Route exact path = "/" element = {<Products searchResult = {searchResult}/>} />
          <Route path = "/productpage" element = {<ProductPage />} />
		      <Route path="/Cart" element={<Carts />} />
          <Route path="/InfoPage" element={<InfoPage />} />
		      <Route path="/AdminCartPage" element={<AdminCart />} />
        </Routes>
      </Router>
    </div> 
  );
  
};

export default App;
