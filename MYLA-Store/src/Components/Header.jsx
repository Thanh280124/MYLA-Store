import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { FcShop } from 'react-icons/fc';
import { useTranslation } from 'react-i18next';

function Header() {
  const { t, i18n } = useTranslation();
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

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  return (
    <header className="bg-green-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-5 py-5 flex justify-between md:justify-around items-center">
        <div onClick={(e) => handleNavClick(e, 'hero')} className="flex items-center space-x-4 cursor-pointer">
          <FcShop size={30} />
          <h1 className="text-xl md:text-2xl font-bold">{t('storeName')}</h1>
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
              {t('home')}
            </a>
            <a
              href="#products"
              className="text-xl md:text-xl hover:text-green-200 transition"
              onClick={(e) => handleNavClick(e, 'products')}
            >
              {t('product')}
            </a>
            <a
              href="#contact"
              className="text-xl md:text-xl hover:text-green-200 transition"
              onClick={(e) => handleNavClick(e, 'contact')}
            >
              {t('contact')}
            </a>
            <div className="flex flex-col md:flex-row gap-2">
              <button
                onClick={() => changeLanguage('vi')}
                className="text-xl hover:text-green-200 transition"
              >
                VI
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className="text-xl hover:text-green-200 transition"
              >
                EN
              </button>
              <button
                onClick={() => changeLanguage('sv')}
                className="text-xl hover:text-green-200 transition"
              >
                SV
              </button>
               <button
                onClick={() => changeLanguage('fi')}
                className="text-xl hover:text-green-200 transition"
              >
                FI
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;