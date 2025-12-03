// src/components/ProductCard.jsx
import React from 'react';

const ProductCard = ({ product, setSelectedProduct, addToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover cursor-pointer"
        onClick={() => setSelectedProduct(product)}
      />
      <div className="p-5">
        <h3
          className="text-xl font-semibold text-gray-900 mb-2 cursor-pointer hover:text-blue-600"
          onClick={() => setSelectedProduct(product)}
        >
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4">{product.shortDesc}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-blue-600">${product.price}</span>
          <button
            onClick={() => {
              addToCart(product);
              // avoid alert in production — keeping to match your original
              alert('Added to cart!');
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
