import React from 'react';
import './data.scss'; // Aapka SCSS

const products = [
  '💄 Cosmetics & Beauty',
  '🛒 Groceries & Snacks',
  '🏠 Home Essentials',
  '📱 Electronics'
];

const Data = () => (
  <div className="app">
    <nav className="navbar1">
      <h2>🛒 Shopy</h2>
    </nav>
    <header className="hero1">
      <h1>Shopy - Har Cheez Milegi Ek Jagah!</h1>
      <p>Cosmetics se groceries tak sab kuch.</p>
    </header>
    <section className="products">
      <h2>Products</h2>
      <ul>
        {products.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </section>
    <footer className="contact1">
      <p>WhatsApp: +91-XXXXXXXXXX | Patna, Bihar</p>
    </footer>
  </div>
);

export  {Data};
