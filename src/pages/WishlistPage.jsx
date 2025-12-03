// src/pages/WishlistPage.jsx
import React from 'react';
import WishlistItem from '../components/WishlistItem';

const WishlistPage = ({ wishlist, setSelectedProduct, removeFromWishlist }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-3xl font-bold mb-6">My Wishlist</h2>

      {wishlist.length === 0 ? (
        <p className="text-gray-500">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((product) => (
            <WishlistItem
              key={product.id}
              product={product}
              setSelectedProduct={setSelectedProduct}
              removeFromWishlist={removeFromWishlist}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
