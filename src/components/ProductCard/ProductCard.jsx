import React from "react";
import "./ProductCard.css";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cartSlice";

function ProductCard({ id, title, price, image }) {
  const dispatch = useDispatch();

  function handleAddToCart() {
    const item = { id, title, price, image };
    dispatch(addToCart(item, 1));
  }
  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <img className="product-image" src={image} alt={title} />
      </div>

      <div className="product-body">
        <h3 className="product-title">{title}</h3>
        <p className="product-price">${price.toFixed(2)}</p>

        <div className="product-actions">
          <button
            className="btn btn-primary btn-icon"
            onClick={handleAddToCart}
          >
            <ShoppingCart size={20} />
            <span>Add to Cart</span>
          </button>

          <Link to={`/products/${id}`} className="btn btn-outline">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export function ProductCardSkeleton() {
  return (
    <div className="product-card skeleton">
      <div className="skeleton-image"></div>
      <div className="skeleton-text"></div>
      <div className="skeleton-text short"></div>
      <div className="skeleton-button-row"></div>
    </div>
  );
}

export default ProductCard;
