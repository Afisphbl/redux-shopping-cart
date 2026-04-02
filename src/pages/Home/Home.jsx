import React from "react";
import "./Home.css";
import ProductList from "../../components/ProductList/ProductList";

function Home() {
  return (
    <div className="page page-home">
      <section className="hero">
        <div className="hero-content">
          <h1>Discover Modern Essentials</h1>
          <p>Curated tech and lifestyle products with clean, minimal design.</p>
        </div>
      </section>

      <section className="home-products">
        <h2>Featured Products</h2>
        <ProductList />
      </section>
    </div>
  );
}

export default Home;
