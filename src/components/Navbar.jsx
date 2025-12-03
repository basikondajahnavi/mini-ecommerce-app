import React from 'react';
import { ShoppingCart, Heart, Menu, X, Sun, Moon } from 'lucide-react';

const Navbar = ({
  currentPage,
  setCurrentPage,
  getTotalItems,
  wishlistCount,
  mobileMenuOpen,
  setMobileMenuOpen,
  darkMode,
  setDarkMode
}) => {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1
              className="text-2xl font-bold text-blue-600 dark:text-blue-400 cursor-pointer"
              onClick={() => setCurrentPage('products')}
            >
              ShopHub
            </h1>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => setCurrentPage('products')}
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
            >
              Products
            </button>

            <button
              onClick={() => setCurrentPage('wishlist')}
              className="relative text-gray-700 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400"
            >
              <Heart className="w-6 h-6" />
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setCurrentPage('cart')}
              className="relative text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <ShoppingCart className="w-6 h-6" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-gray-700 dark:text-gray-200 hover:text-yellow-500 dark:hover:text-yellow-400"
            >
              {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </button>
          </div>

          <button
            className="md:hidden text-gray-700 dark:text-gray-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 border-t dark:border-gray-700">
          <div className="px-4 py-3 space-y-3">
            <button
              onClick={() => {
                setCurrentPage('products');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
            >
              Products
            </button>

            <button
              onClick={() => {
                setCurrentPage('wishlist');
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-between w-full text-gray-700 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400"
            >
              <span>Wishlist</span>
              {wishlistCount > 0 && (
                <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1">
                  {wishlistCount}
                </span>
              )}
            </button>

            <button
              onClick={() => {
                setCurrentPage('cart');
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-between w-full text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <span>Cart</span>
              {getTotalItems() > 0 && (
                <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1">
                  {getTotalItems()}
                </span>
              )}
            </button>

            <button
              onClick={() => {
                setDarkMode(!darkMode);
                setMobileMenuOpen(false);
              }}
              className="flex items-center w-full text-gray-700 dark:text-gray-200 hover:text-yellow-500 dark:hover:text-yellow-400 font-medium"
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
