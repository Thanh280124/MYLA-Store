import React from 'react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { FcShop } from "react-icons/fc";
function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const headerHeight = document.querySelector('header').offsetHeight;
      const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: sectionTop - headerHeight,
        behavior: 'smooth',
      });
    }
    setIsOpen(false);
  };

  return (
    <header className="bg-green-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-5 py-5 flex justify-between md:justify-around items-center cursor-pointer">
        <div onClick={(e) => handleNavClick(e, 'hero')} className="flex items-center space-x-4 tagesschrift-regular">
          <FcShop size={30}/>
          <h1 className="text-xl md:text-2xl font-bold">MYLA Store</h1>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300 transition"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav
          className={`${isOpen ? 'block' : 'hidden'} md:flex md:items-center absolute md:static top-16 left-0 w-full md:w-auto bg-green-600 md:bg-transparent z-40`}
        >
          <div className="flex flex-col gap-5 md:flex-row md:space-x-6 space-y-4 md:space-y-0 p-4 md:p-0">
            <a
              href="#hero"
              className="text-xl md:text-xl hover:text-green-200 transition"
              onClick={(e) => handleNavClick(e, 'hero')}
            >
              Trang chủ
            </a>
            <a
              href="#products"
              className="text-xl md:text-xl hover:text-green-200 transition"
              onClick={(e) => handleNavClick(e, 'products')}
            >
              Sản Phẩm
            </a>
            <a
              href="#contact"
              className="text-xl md:text-xl hover:text-green-200 transition"
              onClick={(e) => handleNavClick(e, 'contact')}
            >
              Liên Hệ
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;