// roompage.js
import React from 'react';
import products from './products.json';
import { Link } from 'react-router-dom';

const ps = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' }
];

function RoomPage({ productDetails, images}) {
    return (
        <>
            <div className='Background'>
                <Room
                    productDetails={productDetails}
                    images={images}
                />
            </div>
        </>
        )
}

function Room({ productDetails, images }) {
    //make the products array
    products = [];
    for (let i = 0; i < productDetails.length; i++) {
        products.push(
            <Product
                product={productDetails[i]}
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

function Product({ product, img }) {
    console.log(product.id);
    return (
        <>
            <Link to={`/product/${product.id}`} className={product.name}>
                <img src={img} className={product.name} alt={product.name} />
            </Link>
        </>
    );
}
export default RoomPage;
