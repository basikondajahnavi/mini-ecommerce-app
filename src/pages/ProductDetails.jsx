// src/pages/ProductDetails.jsx
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { PRODUCTS } from '../PRODUCTS';

const ProductDetails = ({ product, setSelectedProduct, addToCart }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button
        onClick={() => setSelectedProduct(null)}
        className="flex items-center text-blue-600 hover:text-blue-700 mb-6"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Products
      </button>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8 p-6 md:p-8">
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>

          <div>
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm mb-4">
              {product.category}
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">{product.fullDesc}</p>
            <div className="text-4xl font-bold text-blue-600 mb-6">${product.price}</div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
              <div className="flex items-center space-x-4">
                <input
                  type="number"
                  min="1"
                  defaultValue="1"
                  id={`quantity-${product.id}`}
                  className="w-20 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <button
              onClick={() => {
                const quantity = parseInt(document.getElementById(`quantity-${product.id}`).value);
                addToCart(product, quantity);
                alert(`Added ${quantity} item(s) to cart!`);
              }}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
            >
              Add to Cart
            </button>
          </div>
        </div>

        <div className="border-t border-gray-200 p-6 md:p-8">
          <h3 className="text-xl font-semibold mb-4">Recommended Products</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {PRODUCTS.filter(p => p.id !== product.id && p.category === product.category)
              .slice(0, 3)
              .map(p => (
                <div
                  key={p.id}
                  className="border border-gray-200 rounded-lg p-3 cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => setSelectedProduct(p)}
                >
                  <img src={p.image} alt={p.name} className="w-full h-32 object-cover rounded mb-2" />
                  <h4 className="font-medium text-sm mb-1">{p.name}</h4>
                  <p className="text-blue-600 font-semibold">${p.price}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
