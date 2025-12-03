// src/pages/OrderSuccessPage.jsx
import React from 'react';
import { Check } from 'lucide-react';

const OrderSuccessPage = ({ getTotalPrice, setOrderComplete, setCurrentPage }) => {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-10 h-10 text-green-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Order Successful!</h2>
        <p className="text-gray-600 mb-8">
          Thank you for your order. We'll send you a confirmation email shortly with your order details.
        </p>
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <p className="text-sm text-gray-600 mb-2">Order Total</p>
          <p className="text-3xl font-bold text-blue-600">${getTotalPrice().toFixed(2)}</p>
        </div>
        <button
          onClick={() => {
            setOrderComplete(false);
            setCurrentPage('products');
          }}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default OrderSuccessPage;
