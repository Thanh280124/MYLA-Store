import React from 'react';
import { useTranslation } from 'react-i18next';

function Hero() {
  const { t } = useTranslation();

  const onScroll = (e, sectionId) => {
    e.preventDefault();
    const heroSection = document.getElementById(sectionId);
    if (heroSection) {
      const headerHeight = document.querySelector('header').offsetHeight;
      const sectionTop = heroSection.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: sectionTop - headerHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section>
      <div className="bg-custom-gradient h-[50%] sm:h-screen 2xl:h-[70%]">
        <div className="container mx-auto px-5 py-20 flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{t('welcome')}</h1>
          <p className="text-lg md:text-2xl w-auto text-white mb-8 mt-8">{t('welcomeSubtitle')}</p>
          <button
            onClick={(e) => onScroll(e, 'products')}
            className="bg-green-600 text-white text-xl px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300"
          >
            {t('explore')}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;