// roompage.js
import React from 'react';
import products from './products.json';
import './App.css';
import './room.css';
import { Link } from 'react-router-dom';

const ps = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' }
];

function RoomPage() {
    return (
        <>
            <div>
                <ul>
                    {ps.map(product => (
                        <li key={product.id}>
                            <Link to={`/product/${product.id}`}>
                                {product.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
        )
}
/*
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
*/
export default RoomPage;
