import React from 'react';
import './App.css';
const Header = () => (
  <header className="header">
    <h1>I MAX SUPER MARKET</h1>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
);
const HeroSection = () => (
  <section className="hero">
    <h1>Welcome to the BAKTHI Mobile World</h1>
    <p>Discover the latest products and deals of mobiles</p>
    <button>Shop Now</button>
  </section>
);
const ProductShowcase = () => {
  const products = [
    { id: 1, name: 'Product 1', price: 'Rs 50,000', image: '/images/1.webp' },
    { id: 2, name: 'Product 2', price: 'Rs 100,000', image: '/images/2.webp' },
    { id: 3, name: 'Product 3', price: 'Rs 65,000', image: '/images/3.webp' },
  ];
  return (
    <section className="product-showcase">
      <h2>Featured Products</h2>
      <div className="products">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button>Buy Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};
const Footer = () => (
  <footer className="footer">
    <p>&copy; 2024 BAKTHI Mobiles World.</p>
  </footer>
);
const App = () => (
  <div className="App">
    <Header />
    <HeroSection />
    <ProductShowcase />
    <Footer />
  </div>
);

export default App;
