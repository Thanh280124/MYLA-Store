import React from 'react';
import { Phone, MapPin, User } from 'lucide-react';
import contactImage from '../../public/assets/pic-contact-section.png'

function Contact() {
  return (
    <section className="bg-white py-12 mb-40">
      <div className="container mx-auto px-5">
        <h2 className="text-4xl md:text-4xl font-bold text-center text-green-600 mb-20">
          Liên Hệ Với MYLA Store
        </h2>
        <div className="flex flex-col md:flex md:flex-row md:justify-center gap-20">
          {/* Hình ảnh */}
          <img src={contactImage} alt="Liên hệ" className="md:w-[50%] rounded-lg shadow" />
          
          {/* Khối thông tin */}
          <div className="md:col-span-2 grid grid-cols-1 gap-10">
            {/* Số điện thoại */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:bg-green-50 transition">
              <div className="flex items-center space-x-4 mb-4">
                <Phone className="text-green-600" size={28} />
                <h3 className="text-xl font-semibold text-gray-800">Số Điện Thoại</h3>
              </div>
              <p className="text-lg text-gray-600">+84 123 456 789</p>
            </div>

            {/* Địa chỉ */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:bg-green-50 transition">
              <div className="flex items-center space-x-4 mb-4">
                <MapPin className="text-green-600" size={28} />
                <h3 className="text-xl font-semibold text-gray-800">Địa Chỉ</h3>
              </div>
              <p className="text-lg text-gray-600">123 Đường Lê Lợi, Quận 1, TP. Hồ Chí Minh</p>
            </div>

            {/* Người bán */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:bg-green-50 transition">
              <div className="flex items-center space-x-4 mb-4">
                <User className="text-green-600" size={28} />
                <h3 className="text-xl font-semibold text-gray-800">Người Bán</h3>
              </div>
              <p className="text-lg text-gray-600">MYLA Store Team</p>
              <p className="text-lg text-gray-600">Email: contact@mylastore.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
