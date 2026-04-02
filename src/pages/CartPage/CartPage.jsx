import React from "react";
import "./CartPage.css";
import { ArrowLeft, Trash } from "lucide-react";
import CartItem from "../../components/CartItem/CartItem";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import cartSelector from "../../features/cartSelector";
import { clearCart } from "../../features/cartSlice";

function CartPage() {
  const navigate = useNavigate();
  const { carts } = useSelector(cartSelector);
  const dispatch = useDispatch();
  const isCartEmpty = carts.length === 0;
  const cartItemsCount = carts.reduce(
    (total, item) => total + item.quantity,
    0,
  );
  const cartTotal = carts.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <div className="cart-page">
      <button className="btn" onClick={() => navigate(-1)}>
        <ArrowLeft size={20} />
        Back
      </button>

      {!isCartEmpty && (
        <div className="cart-header-row">
          <h1>Your Cart</h1>

          <button
            className="btn btn-ghost-danger btn-icon"
            onClick={() => dispatch(clearCart())}
          >
            <Trash size={20} />
            <span>Clear Cart</span>
          </button>
        </div>
      )}

      <div className="cart-layout">
        {isCartEmpty ? (
          <div className="cart-items-section">
            <div className="empty-cart">
              <h2>Your cart is empty</h2>
              <p>Browse products and add them to your cart to see them here.</p>
              <button className="btn btn-primary" onClick={() => navigate("/")}>
                Browse Products
              </button>
            </div>
          </div>
        ) : (
          carts.map((item) => <CartItem key={item.id} {...item} />)
        )}

        <div className="cart-summary">
          <div className="cart-summary-inner">
            <h2>Order Summary</h2>
            <div className="cart-summary-row">
              <span>Total Item</span>
              <span>{cartItemsCount}</span>
            </div>
            <div className="cart-summary-row">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>

            <div className="cart-summary-row cart-summary-total">
              <span>Total</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>

            <button className="btn btn-primary btn-block">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
