  // src/pages/ProductsPage.jsx
import React, { useState } from 'react';
import { Search, Heart } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const ProductsPage = ({
  products,
  setSelectedProduct,
  addToCart,
  addToWishlist,
  wishlist,
  searchTerm,
  setSearchTerm,
  categories,
  selectedCategory,
  setSelectedCategory,
  itemsPerPage = 6
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Pagination calculations
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Products</h2>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentProducts.length > 0 ? (
          currentProducts.map(product => (
            <div key={product.id} className="relative">
              <ProductCard
                product={product}
                setSelectedProduct={setSelectedProduct}
                addToCart={addToCart}
              />
              <button
                onClick={() => addToWishlist(product)}
                className={`absolute top-2 right-2 p-2 rounded-full ${
                  wishlist.find(item => item.id === product.id)
                    ? 'bg-red-500 text-white'
                    : 'bg-white text-gray-500 border border-gray-300'
                } hover:bg-red-500 hover:text-white transition-colors`}
              >
                <Heart className="w-5 h-5" />
              </button>
            </div>
          ))
        ) : (
          <div className="text-center py-12 col-span-full">
            <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8 gap-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded border border-gray-300 hover:bg-gray-100 disabled:opacity-50"
          >
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-3 py-1 rounded border ${
                currentPage === page
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'border-gray-300 hover:bg-gray-100'
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 rounded border border-gray-300 hover:bg-gray-100 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
