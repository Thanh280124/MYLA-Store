// src/CardProduct.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

function CardProduct({ product, onClick }) {
  const { t } = useTranslation();

  return (
    <div
      className="bg-white p-5 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 cursor-pointer"
      onClick={() => onClick(product)}
    >
      <img
        src={product.image}
        alt={t(product.name)}
        className="w-full h-90 sm:h-90 object-fill rounded-lg mb-4"
      />
      <h2 className="text-lg sm:text-xl xl:text-2xl font-semibold text-gray-800 mb-5">{t(product.name)}</h2>
      <p className="text-green-600 font-medium text-lg sm:text-xl xl:text-2xl">{product.price}</p>
    </div>
  );
}

export default CardProduct;