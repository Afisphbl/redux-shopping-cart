import React, { useEffect, useState } from "react";
import "./CartItem.css";
import { ArrowLeft, Trash } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart, deleteFromCart } from "../../features/cartSlice";

function CartItem({ id, title, price, image, quantity }) {
  const [newQuantity, setNewQuantity] = useState(quantity);
  const dispatch = useDispatch();

  function handleDecrease() {
    if (newQuantity > 1) {
      setNewQuantity((prev) => prev - 1);
      dispatch(addToCart({ id, title, price, image }, -1));
    }
  }

  function handleIncrease() {
    setNewQuantity((prev) => prev + 1);
    dispatch(addToCart({ id, title, price, image }, 1));
  }

  function handleDelete() {
    dispatch(deleteFromCart(id));
  }

  return (
    <div className="cart-item">
      <div className="cart-item-left">
        <img className="cart-item-image" src={image} alt={title} />

        <div className="cart-item-info">
          <h3 className="cart-item-title">{title}</h3>
          <p className="cart-item-price">${price.toFixed(2)}</p>
        </div>
      </div>

      <div className="cart-item-right">
        <div className="cart-item-quantity">
          <button className="icon-button" onClick={handleDecrease}>
            -
          </button>
          <span className="cart-item-qty">{newQuantity}</span>
          <button className="icon-button" onClick={handleIncrease}>
            +
          </button>
        </div>

        <div className="cart-item-subtotal">
          ${(price * quantity).toFixed(2)}
        </div>

        <button
          className="icon-button icon-button-danger"
          onClick={handleDelete}
        >
          <Trash size={24} />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
