// productpage.js
import React from 'react';
import { useParams } from 'react-router-dom';

function ProductPage() {
    const products = [
        { id: 1, name: 'Product 1', description: 'This is product 1' },
        { id: 2, name: 'Product 2', description: 'This is product 2' },
    ];
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <>
            <div>
                <h1>{product.name}</h1>
                <p>{product.description}</p>
            </div>
        </>
        );
}

function header() {
    return (
        <>

        </>
        );
}

function productImages() {
    return (
        <>

        </>
        );
}

function productInfo() {
    return (
        <>

        </>
        );
}

export default ProductPage;