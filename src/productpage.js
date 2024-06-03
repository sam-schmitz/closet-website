// productpage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './productpage.css';

const PRODUCTS = require('./products.json')
const IMAGES = [require('./images/dresser.jpg'), require('./images/tv.jpg')];

function ProductPage() {

    const { id } = useParams();
    const product = PRODUCTS.find(p => p.id === parseInt(id));

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <>
            <Header />
            <div className='containerLR'>
                <div className='left'>
                    <ProductImages
                        imgs={IMAGES[product.id]}
                    />
                </div>
                <div className='right'>
                    <ProductInfo
                        product={product}
                    />
                </div>
            </div>
        </>
        );
}

function Header() {
    return (
        <>
            <div className="header">
                <div className="path"></div>
                <div className="logo"></div>
                <h1>Header</h1>
            </div>
        </>
        );
}

function ProductImages({imgs}) {
    return (
        <>
            <div className="productImages">
                <img src={imgs} alt='words' />
            </div>
        </>
        );
}

function ProductInfo({product}) {
    return (
        <>
            <div className="productInfo">
                <h1>{product.name}</h1>
            </div>
        </>
        );
}

export default ProductPage;