// productpage.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './productpage.css';
import { Link } from 'react-router-dom';

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
                <ProductImages
                    imgs={IMAGES[product.id]}
                />
                <ProductInfo
                    product={product}
                />
            </div>
        </>
        );
}

function Header() {
    return (
        <>
            <div className="header">
                <div className="containerLR">
                    <div className="path">
                        <Link to={`/`}>
                            <h2>/Room</h2>
                        </Link>
                    </div>
                    <div className="logo">
                        <h1>Logo</h1>
                    </div>
                </div>
            </div>
        </>
        );
}

function ProductImages({ imgs }) {
    //used activeImage is the image that is enlarged
    const [activeImage, setActiveImage] = useState(imgs[0]);

    return (
        <>
            <div className="productImages">
                <div className='containerLR'>
                    <ImageBar
                        imgs={imgs}
                        setActiveImage={setActiveImage}
                    />
                    <BigImage activeImage={activeImage} />
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
                id={i}
            />
        );
    }

    return (
        <>
            <div className='ImageBar'>
                <table>
                    <tbody>
                        {imageRows}
                    </tbody>
                </table>
            </div>
        </>
    );
}

function ImageRow({ img, onActiveImageChange, id }) {
    return (
        <>
            <tr>
                <td>
                    <img
                        src={img}
                        onClick={(e) => onActiveImageChange(img)}
                        className='ImageRowImg'
                        key={id}
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
                <div className="containerLR" >
                    <h3>{product.details}</h3>
                    <h3>{product.price}</h3>
                </div>
                <h3>Add to wishlist</h3>
                <a href={product.link}>
                    <div className="RetailerButton" >
                        <h3>Visit the Retailer's Website</h3>
                    </div>
                </a>
            </div>
        </>
        );
}

export default ProductPage;