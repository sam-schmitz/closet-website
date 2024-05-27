import logo from './logo.svg';
import './App.css';
import './room.css';
//import Dresser from './images/dresser.jpg'
import React from 'react';
import products from './products.json';

function App() {
    const PRODUCTS = require('./products.json')
    const images = [require('./images/dresser.jpg'), require('./images/tv.jpg')];

    const dresserName = PRODUCTS[0].name;
    const dresserLink = PRODUCTS[0].link;
    const dImg = images[0];

    const dresserImg = require("./images/dresser.jpg");

    return (
      <>
            <div className="App">
                <Room
                    productDetails={PRODUCTS}
                    images={images}
                />
            </div></>
    );
}

function Room({ productDetails, images }) {
    //make the products array
    products = [];
    for (let i = 0; i < productDetails.length; i++) {
        products.push(
            <Product
                type={productDetails[i].name}
                link={productDetails[i].link}
                img={images[i]}
            />
        );
    }

    return (
        <>
            <div className='Room'>
                {products}
            </div>
        </>
        );
}

function Product({ type, link, img }) {
    return (
        <>
            <a href={link} className={type}>
                <img src={img} className={type} alt={type} />
            </a>
        </>
    );
}

export default App;
