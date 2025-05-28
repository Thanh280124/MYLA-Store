import React from 'react';

function CardProduct({ product, onClick }) {
  return (
    <div
      className="bg-white p-5 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 cursor-pointer"
      onClick={() => onClick(product)}
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-90 sm:h-90 object-fill rounded-lg mb-4"
      />
      <h2 className="text-lg sm:text-3xl font-semibold text-gray-800 mb-5">{product.name}</h2>
      <p className="text-green-600 font-medium text-3xl">{product.price}</p>
    </div>
  );
}

export default CardProduct;