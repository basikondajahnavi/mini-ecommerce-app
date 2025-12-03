// src/components/WishlistItem.jsx
import React from 'react';
import { X } from 'lucide-react';

const WishlistItem = ({ product, setSelectedProduct, removeFromWishlist }) => {
  return (
    <div
      className="border rounded-lg p-4 cursor-pointer hover:shadow-md transition-shadow relative"
      onClick={() => setSelectedProduct(product)} // open product details
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded mb-2"
      />
      <h3 className="font-medium text-lg">{product.name}</h3>
      <p className="text-blue-600 font-semibold">${product.price}</p>

      {/* Remove from wishlist */}
      <button
        onClick={(e) => {
          e.stopPropagation(); // prevent triggering product details
          removeFromWishlist(product.id);
        }}
        className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export default WishlistItem;
