// src/pages/CartPage.jsx
import React from 'react';
import { ShoppingCart } from 'lucide-react';
import CartItem from '../components/CartItem';

const CartPage = ({ cart, updateQuantity, removeFromCart, getTotalPrice, setCurrentPage }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h2>

      {cart.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow-md">
          <ShoppingCart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500 text-lg mb-4">Your cart is empty</p>
          <button
            onClick={() => setCurrentPage('products')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cart.map(item => (
              <CartItem
                key={item.id}
                item={item}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
              />
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
              <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">Free</span>
                </div>
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-blue-600">${getTotalPrice().toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setCurrentPage('checkout')}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
