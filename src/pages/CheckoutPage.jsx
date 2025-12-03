// src/pages/CheckoutPage.jsx
import React from 'react';

const CheckoutPage = ({ cart, getTotalPrice, setOrderComplete }) => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.target;
          const formData = {
            name: form.name.value,
            email: form.email.value,
            address: form.address.value,
            city: form.city.value,
            zipCode: form.zipCode.value,
            paymentMethod: form.paymentMethod.value,
          };

          if (formData.name && formData.email && formData.address && formData.city && formData.zipCode) {
            setOrderComplete(true);
          } else {
            alert("Please fill in all required fields");
          }
        }}
        className="bg-white rounded-lg shadow-md p-6 space-y-6"
      >
        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Shipping Address */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Shipping Address</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Street Address *</label>
              <input
                type="text"
                name="address"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">City *</label>
                <input
                  type="text"
                  name="city"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">ZIP Code *</label>
                <input
                  type="text"
                  name="zipCode"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Payment Method</h3>

          <div className="space-y-3">

            {/* UPI */}
            <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
              <input type="radio" name="paymentMethod" value="upi" className="mr-3" />
              <span className="font-medium">🟣 UPI (Google Pay / PhonePe / Paytm)</span>
            </label>

            {/* Card */}
            <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
              <input type="radio" name="paymentMethod" value="card" className="mr-3" />
              <span className="font-medium">💳 Credit / Debit Card</span>
            </label>

            {/* COD */}
            <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
              <input type="radio" name="paymentMethod" value="cod" defaultChecked className="mr-3" />
              <span className="font-medium">📦 Cash on Delivery</span>
            </label>

          </div>
        </div>

        {/* Order Summary */}
        <div className="border-t pt-6">
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h4 className="font-semibold mb-2">Order Summary</h4>
            <div className="space-y-1 text-sm">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <span>
                    {item.name} × {item.quantity}
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="border-t pt-2 mt-2 font-bold flex justify-between">
                <span>Total</span>
                <span className="text-blue-600">${getTotalPrice().toFixed(2)}</span>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
          >
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutPage;
