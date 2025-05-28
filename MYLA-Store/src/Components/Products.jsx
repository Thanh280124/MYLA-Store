import React, { useState } from 'react';
import products from '../data/data.js';
import CardProduct from './CardProduct';
import { IoCloseCircle } from "react-icons/io5";
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
    <section>
      <div className='container mx-auto'>
      <h2 className="text-4xl md:text-5xl font-bold text-center text-green-600 my-10">Sản Phẩm</h2>
      <div className="flex flex-col items-center gap-10 mb-20">
        <input
          type="text"
          id="searchInput"
          placeholder="Tìm kiếm sản phẩm..."
          className="w-50%  md:w-full md:max-w-md p-3 text-lg border border-gray-300 text-black rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="grid-container">
        {filteredProducts.map((product) => (
          <CardProduct key={product.id} product={product} onClick={openModal} />
        ))}
      </div>

      {/* Modal for product details */}
      {selectedProduct && (
        <div onClick={closeModal} className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full mx-4 h-150 sm:h-120 overflow-y-auto shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">{selectedProduct.name}</h2>
              <button
                onClick={closeModal}
                className="text-2xl text-gray-600 hover:text-gray-800"
                aria-label="Close modal"
              >
              <IoCloseCircle size={27} color='red'/>
              </button>
            </div>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-110 rounded-lg mb-4"
            />
            <p className="text-green-600 font-medium mb-2 text-2xl">{selectedProduct.price}</p>
            <p className="text-gray-600 text-xl">{selectedProduct.description}</p>
          </div>
        </div>
      )}
      </div>
    </section>
  );
}

export default Products;