import React, { useContext, useEffect } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import Footer from "../../components/Footer/Footer";
import "./cart.css";
import Commonnav from "../../components/Navbar/Commonnav";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
    checkout,
  } = useContext(ShopContext);

  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  useEffect(() => {

    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      addToCart((prevCartItems) => [
        ...prevCartItems,
        ...JSON.parse(storedCartItems),
      ]);
    }
  }, [addToCart]); // Ensure that addToCart is stable and doesn't change on every render

  useEffect(() => {
    // Save cart items to localStorage whenever the cartItems state changes
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <>
      <Commonnav />
      <div className="cart_border"></div>
      <div className="cart_body">
        <h2>Cart</h2>
        <div className="cart">
        <div className="cart_headings">
        <p>Product</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Subtotal</p>
      </div>
          {PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
              return (
                <CartItem
                  key={product.id}
                  data={product}
                  removeFromCart={removeFromCart}
                  updateCartItemCount={updateCartItemCount}
                />
              );
            }
            return null;
          })}
        </div>
        <div className="cart-summary">
          {totalAmount > 0 ? (
            <div className="checkout">
              <div className="cart-summary-heading">Cart-Summary</div>
              <div className="cart-summary-price">
                <span className="TotalPrice" >Total Price</span>
                <span className="totalAmount" >${totalAmount}</span>
              </div>
              {/* <button className="continueShop_btn" onClick={() => navigate("/")}>
                Continue Shopping
              </button> */}
              <button className="checkout_btn"
                onClick={() => {
                  checkout();
                  navigate("/checkout");
                }}
              >
                Checkout
              </button>
            </div>
          ) : (
            <h1>Your Shopping Cart is Empty</h1>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
