// src/CardProduct.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

function CardProduct({ product, onClick }) {
  const { t } = useTranslation();

  return (
    <div
      className="flex sm:flex-col justify-between gap-3 items-center bg-white p-5 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 cursor-pointer"
      onClick={() => onClick(product)}
    >
      <img
        src={product.image}
        alt={t(product.name)}
        className="w-45 h-35 sm:h-80 sm:w-full xl:h-90 xl:w-full object-fill rounded-lg mb-4"
      />
      <div className='flex flex-col justify-center items-center gap-3 sm:gap-2'>
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-5 text-center">{t(product.name)}</h2>
      <p className="text-xl sm:text-2xl inline-block bg-green-600 text-white font-semibold px-5 py-3 rounded-xl shadow-sm">{product.price}</p>
    </div>
    </div>


  );
}

export default CardProduct;