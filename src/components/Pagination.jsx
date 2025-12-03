// src/components/Pagination.jsx
import React from 'react';

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  if (totalPages <= 1) return null;

  const pages = [];
  for (let i = 1; i <= totalPages; i++) pages.push(i);

  return (
    <div className="flex justify-center gap-2 mt-6">
      <button
        onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
        disabled={currentPage === 1}
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        Prev
      </button>

      {pages.map(p => (
        <button
          key={p}
          onClick={() => setCurrentPage(p)}
          className={`px-3 py-1 border rounded ${p === currentPage ? 'bg-blue-600 text-white' : ''}`}
        >
          {p}
        </button>
      ))}

      <button
        onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
        disabled={currentPage === totalPages}
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
