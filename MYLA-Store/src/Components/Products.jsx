import React, { useState } from 'react';
import products from '../data/data.js';
import CardProduct from './CardProduct';

function Products() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Filter products based on search term
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle modal open/close
  const openModal = (product) => setSelectedProduct(product);
  const closeModal = () => setSelectedProduct(null);

  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-green-600 my-10">Sản Phẩm</h2>
      <div className="flex flex-col items-center gap-10 mb-20">
        <input
          type="text"
          id="searchInput"
          placeholder="Tìm kiếm sản phẩm..."
          className="w-full max-w-md p-3 text-lg border border-gray-300 text-black rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 p-5">
        {filteredProducts.map((product) => (
          <CardProduct key={product.id} product={product} onClick={openModal} />
        ))}
      </div>

      {/* Modal for product details */}
      {selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">{selectedProduct.name}</h2>
              <button
                onClick={closeModal}
                className="text-2xl text-gray-600 hover:text-gray-800"
                aria-label="Close modal"
              >
                ×
              </button>
            </div>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-110 object-cover rounded-lg mb-4"
            />
            <p className="text-green-600 font-medium mb-2">{selectedProduct.price}</p>
            <p className="text-gray-600">{selectedProduct.description}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Products;