import { useState, useEffect } from 'react';
import { FaArrowCircleUp } from "react-icons/fa";
import Header from './Components/Header';
import Hero from './Components/Hero';
import Contact from './Components/Contact';
import Products from './Components/Products';
import Footer from './Components/Footer';
function App() {
  const [showScrollUp, setShowScrollUp] = useState(false);

 
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollUp(true);
      } else {
        setShowScrollUp(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top of the page
  const scrollToTop = () => {
    const headerHeight = document.querySelector('header').offsetHeight;
    window.scrollTo({
      top: 0 - headerHeight, // Offset header height
      behavior: 'smooth',
    });
  };

  return (
    <div style={{ scrollBehavior: 'smooth' }}>
      <Header />
      <div id="hero">
        <Hero />
      </div>
      <div id="products">
        <Products />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />

      {/* Scroll Up Button */}
      {showScrollUp && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition duration-300 z-50"
          aria-label="Scroll to top"
        >
          <FaArrowCircleUp size={24}/>
        </button>
      )}

    </div>
  );
}

export default App;