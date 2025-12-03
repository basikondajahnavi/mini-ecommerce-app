// src/components/CartItem.jsx
import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';

const CartItem = ({ item, updateQuantity, removeFromCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex gap-4">
      <img
        src={item.image}
        alt={item.name}
        className="w-24 h-24 object-cover rounded"
      />
      <div className="flex-1">
        <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
        <p className="text-gray-600 text-sm mb-2">${item.price} each</p>
        <div className="flex items-center gap-2">
          <button
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            className="p-1 border border-gray-300 rounded hover:bg-gray-100"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="w-12 text-center font-medium">{item.quantity}</span>
          <button
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="p-1 border border-gray-300 rounded hover:bg-gray-100"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="flex flex-col items-end justify-between">
        <button
          onClick={() => removeFromCart(item.id)}
          className="text-red-500 hover:text-red-700"
        >
          <Trash2 className="w-5 h-5" />
        </button>
        <span className="font-bold text-lg">${(item.price * item.quantity).toFixed(2)}</span>
      </div>
    </div>
  );
};

export default CartItem;
