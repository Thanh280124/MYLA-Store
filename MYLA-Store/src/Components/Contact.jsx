// src/Contact.jsx
import React from 'react';
import { Phone, MapPin, User } from 'lucide-react';
import contactImage from '/assets/pic-contact-section.png';
import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();
  return (
    <section className="bg-white py-12 mb-40">
      <div className="container mx-auto px-5">
        <h2 className="text-4xl md:text-4xl font-bold text-center text-green-600 mb-20">
          {t('contactTitle')}
        </h2>
        <div className="flex flex-col md:flex md:flex-row md:justify-center gap-20">
          {/* Hình ảnh */}
          <img src={contactImage} alt={t('contact')} className="md:w-[50%] rounded-lg shadow" />
          
          {/* Khối thông tin */}
            <div className="md:col-span-2 grid grid-cols-1 gap-10">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:bg-green-50 transition">
                <div className="flex items-center space-x-4 mb-4">
                  <Phone className="text-green-600" size={28} />
                  <h3 className="text-xl font-semibold text-gray-800">{t('phone')}</h3>
                </div>
                <p className="text-lg text-gray-600">+84 123 456 789</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:bg-green-50 transition">
                <div className="flex items-center space-x-4 mb-4">
                  <MapPin className="text-green-600" size={28} />
                  <h3 className="text-xl font-semibold text-gray-800">{t('address')}</h3>
                </div>
                <p className="text-lg text-gray-600">123 Đường Lợi Lê, Quận 1, TP. Hồ Chí Minh</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:bg-green-50 transition">
                <div className="flex items-center space-x-4 mb-4">
                  <User className="text-green-600" size={28} />
                  <h3 className="text-xl font-semibold text-gray-800">{t('seller')}</h3>
                </div>
                <p className="text-lg text-gray-600">MYLA Store</p>
                <p className="text-lg text-gray-600">{t('sellerEmail')}: contact@mylastore.com</p>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;