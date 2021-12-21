import './App.css';
import React from 'react';
import Topbar from './components/Topbar/Topbar'
//import Register from './components/Register'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
// import SearchBar from './components/SearchBar';
import Products from "./components/Products/ProductList";
import ProductPage from "./components/Products/Product/ProductPage"
// import Submit from './components/Submiit';
import Carts from "./components/Topbar/Cart";
import InfoPage from './components/Topbar/InfoPage';
function App() {

  return (
    <div className='app'>
      <Router>
        <Topbar />
        <Routes>
          <Route exact path = "/" element = {<Products />} />
          <Route path = "/productpage" element = {<ProductPage />} />
		      <Route path="/Cart" element={<Carts />} />
          <Route path="/InfoPage" element={<InfoPage />} />
        </Routes>
      </Router>
    </div> 
  );
  
};

export default App;
