import Header from './Components/Header';
import Hero from './Components/Hero';
import Contact from './Components/Contact';
import Products from './Components/Products';
import Footer from './Components/Footer';

function App() {
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
    </div>
  );
}

export default App;