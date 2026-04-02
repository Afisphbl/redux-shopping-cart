import React, { useState } from "react";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import "./ProductDetails.css";
import { Link, useParams } from "react-router-dom";
import { products } from "../../data/products";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cartSlice";

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  function handleAddToCart() {
    const item = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
    };
    dispatch(addToCart(item, quantity));
  }

  if (!product) {
    return (
      <div className="page-product-details">
        <Link to="/" className="btn btn-ghost">
          <ArrowLeft size={20} />
          Back
        </Link>
        <div className="product-not-found">Product Not Found</div>
      </div>
    );
  }
  return (
    <div className="page-product-details">
      <Link to="/" className="btn btn-ghost">
        <ArrowLeft size={20} />
        Back
      </Link>
      <div className="product-details-layout">
        <div className="product-details-image-wrapper">
          <img
            src={product?.image}
            alt={product?.title}
            className="product-details-image"
          />
        </div>

        <div className="product-details-info">
          <h1 className="product-details-title">{product?.title}</h1>
          <p className="product-details-price">${product?.price.toFixed(2)}</p>
          <p className="product-details-description">{product?.description}</p>

          <div className="product-details-actions">
            <div className="quantity-selector">
              <button
                className="quantity-button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <span className="quantity-value">{quantity}</span>
              <button
                className="quantity-button"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>

            <button
              className="btn btn-primary btn-icon"
              onClick={handleAddToCart}
            >
              <ShoppingCart size={24} />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
