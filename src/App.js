import logo from './logo.svg';
import './App.css';
import './room.css';
//import Dresser from './images/dresser.jpg'
import React from 'react';
import products from './products.json';

function App() {
    const PRODUCTS = products;
    const images = [require('./images/dresser.jpg')];

    const dresserName = PRODUCTS[0].name;
    console.log(PRODUCTS[0].link);
    const dresserLink = PRODUCTS[0].link;
    console.log(PRODUCTS[0].image);
    const dImg = images[0];

    const dresserImg = require("./images/dresser.jpg");

    return (
      <>
            <div className="App">
                <div className='Room'>
                <Product
                    type={dresserName}
                    link={dresserLink}
                    img={dImg}
                    />
                    </div>
            </div></>
    );
}

function Room({ productDetails, images }) {
    //make the products array
    return (
        <>
            <div className='room'>
                {products}
            </div>
        </>
        );
}

function Product({ type, link, img }) {
    return (
        <>
            <div className="Product">
                <a href={link} className={type}>
                    <img src={img} className={type} alt={type} />
                </a>
            </div>
        </>
    );
}

export default App;
