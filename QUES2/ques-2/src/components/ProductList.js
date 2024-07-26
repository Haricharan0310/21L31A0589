import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../services/api';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(data => setProducts(data));
  }, []);

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Product List</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {products.map(product => (
          <li key={product.id} style={{ marginBottom: '20px' }}>
            <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'blue' }}>
              <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
                <h2>{product.productName}</h2>
                <p><strong>Company:</strong> {product.company}</p>
                <p><strong>Category:</strong> {product.category}</p>
                <p><strong>Price:</strong> ${product.price}</p>
                <p><strong>Rating:</strong> {product.rating}</p>
                <p><strong>Discount:</strong> {product.discount}%</p>
                <p><strong>Availability:</strong> {product.availability}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;