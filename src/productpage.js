// productpage.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './productpage.css';

const PRODUCTS = require('./products.json')
const IMAGES = [[require('./images/dresser.jpg'), require('./images/dresser1.jpg'), require('./images/dresser2.jpg'), require('./images/dresser3.jpg')],
    [require('./images/tv.jpg'), require('./images/tv1.jpg'), require('./images/tv2.jpg'), require('./images/tv3.jpg')]];

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

function ProductImages({ imgs }) {
    //activeImage needs to default to imgs[0]
    const [activeImage, setActiveImage] = useState(imgs[0]);

    return (
        <>
            <div className="productImages">
                <div className='containerLR'>
                    <div className='left'>
                        <ImageBar
                            imgs={imgs}
                            setActiveImage={setActiveImage}
                        />
                    </div>
                    <div className='right'>
                        <BigImage activeImage={activeImage} />
                    </div>
                </div>
            </div>
        </>
        );
}

function ImageBar({ imgs, setActiveImage }) {
    const imageRows = [];
    for (let i = 0; i < imgs.length; i++) {
        imageRows.push(
            <ImageRow
                img={imgs[i]}
                alt="image bar"
                onActiveImageChange={setActiveImage}
            />
        );
    }

    return (
        <>
            <div className='ImageBar'>
                <table>
                    {imageRows}
                </table>
            </div>
        </>
    );
}

function ImageRow({ img, onActiveImageChange }) {
    return (
        <>
            <tr>
                <td>
                    <img
                        src={img}
                        onClick={(e) => onActiveImageChange(img)}
                        className='ImageRowImg'
                    />
                </td>
            </tr>
        </>
        );
}

function BigImage({ activeImage }) {
    return (
        <>
            <img src={activeImage} alt='words' className='BigImageImg' />
        </>
    );
}

function ProductInfo({product}) {
    return (
        <>
            <div className="ProductInfo">
                <h1><b>{product.name}</b></h1>
                <h3>{product.details}</h3>
                <h3>{product.price}</h3>
                <h3>Add to wishlist</h3>
                <a href={product.link} className="RetailerButton">
                    <h3>Visit the Retailer's Website</h3>
                </a>
            </div>
        </>
        );
}

export default ProductPage;