import logo from './logo.svg';
import './App.css';
import './room.css';
//import Dresser from './images/dresser.jpg'
import React from 'react';
import products from './products.json';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RoomPage from './roompage.js'
import ProductPage from './productpage.js'


function App() {
    const PRODUCTS = require('./products.json')
    const images = [require('./images/dresser.jpg'), require('./images/tv.jpg')];

    const dresserName = PRODUCTS[0].name;
    const dresserLink = PRODUCTS[0].link;
    const dImg = images[0];

    const dresserImg = require("./images/dresser.jpg");

    //const room = <Room productDetails={PRODUCTS} images={images} />;

    return (
      <>
            <div className="App">
                <Router>
                    <Routes>
                        <Route path='/' element={<RoomPage />} />
                        <Route path='/product/:id' element={<ProductPage />} />
                    </Routes>
                </Router>
                
            </div></>
    );
}

export default App;
