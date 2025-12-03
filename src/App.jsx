// src/App.jsx
import React, { useState, useEffect } from 'react';
import { ShoppingCart, Moon, Sun, Menu, X } from 'lucide-react';
import { PRODUCTS } from './PRODUCTS';
import Navbar from './components/Navbar';
import ProductsPage from './pages/ProductsPage';
import ProductDetails from './pages/ProductDetails';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderSuccessPage from './pages/OrderSuccessPage';
import WishlistPage from './pages/WishlistPage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('products');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Load cart and wishlist from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    const savedWishlist = localStorage.getItem('wishlist');
    if (savedCart) setCart(JSON.parse(savedCart));
    if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
  }, []);

  // Save cart and wishlist to localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  // Dark mode effect
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Cart functions
  const addToCart = (product, quantity = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) return removeFromCart(productId);
    setCart(prev =>
      prev.map(item => (item.id === productId ? { ...item, quantity: newQuantity } : item))
    );
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const getTotalPrice = () => cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const getTotalItems = () => cart.reduce((total, item) => total + item.quantity, 0);

  // Wishlist functions
  const addToWishlist = (product) => {
    setWishlist(prev => {
      if (prev.find(item => item.id === product.id)) return prev;
      return [...prev, product];
    });
  };

  const removeFromWishlist = (productId) => {
    setWishlist(prev => prev.filter(item => item.id !== productId));
  };

  // Filter products
  const categories = ['All', ...new Set(PRODUCTS.map(p => p.category))];
  const filteredProducts = PRODUCTS.filter(product => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.shortDesc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Navbar */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        getTotalItems={getTotalItems}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Pages */}
      {selectedProduct && (
        <ProductDetails
          product={selectedProduct}
          setSelectedProduct={setSelectedProduct}
          addToCart={addToCart}
          addToWishlist={addToWishlist}
          wishlist={wishlist}
        />
      )}

      {!selectedProduct && currentPage === 'products' && (
        <ProductsPage
          products={filteredProducts}
          setSelectedProduct={setSelectedProduct}
          addToCart={addToCart}
          addToWishlist={addToWishlist}
          wishlist={wishlist}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      )}

      {currentPage === 'wishlist' && (
        <WishlistPage
          wishlist={wishlist}
          setSelectedProduct={setSelectedProduct}
          removeFromWishlist={removeFromWishlist}
        />
      )}

      {currentPage === 'cart' && !orderComplete && (
        <CartPage
          cart={cart}
          updateQuantity={updateQuantity}
          removeFromCart={removeFromCart}
          getTotalPrice={getTotalPrice}
          setCurrentPage={setCurrentPage}
        />
      )}

      {currentPage === 'checkout' && !orderComplete && (
        <CheckoutPage
          cart={cart}
          getTotalPrice={getTotalPrice}
          setOrderComplete={setOrderComplete}
        />
      )}

      {orderComplete && (
        <OrderSuccessPage
          getTotalPrice={getTotalPrice}
          setOrderComplete={setOrderComplete}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
};

export default App;  
