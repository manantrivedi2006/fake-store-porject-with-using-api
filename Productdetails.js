// src/components/ProductPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductPage.css';

const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    

    useEffect(() => {
        setLoading(true);
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(response => response.json())
            .then(data => {
                setProduct(data);
                setLoading(false);
            });
            
    }, [id]);

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    if (!product) {    
        return <div className="not-found">Product not found.</div>;
    }
    
    return (
        <div className="product-container">
            <div className="image-gallery">
                <img id="mainImage" src={product.image} alt={product.title} />
            </div>
            <div className="product-details">
                <h1 id="productName">{product.title}</h1>
                <div className="rating-info">
                    <span id="averageRating">⭐ {product.rating.rate}</span>
                    <span id="reviewCount">({product.rating.count} reviews)</span>
                </div>
                <div className="price-info">
                    <span id="currentPrice" className="current-price">${product.price}</span>
                </div>
                <p id="description">{product.description}</p>
                <div className="action-buttons">
                    <button id="addToCartBtn">Add to Cart</button>
                    <button id="buyNowBtn">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;