import React, { useContext, useEffect } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./cart.css";

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
    // Load cart items from localStorage when the component mounts
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      addToCart(JSON.parse(storedCartItems));
    }
  }, [addToCart]);

  useEffect(() => {
    // Save cart items to localStorage whenever the cartItems state changes
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <>
      <Navbar />
      <div className="cart_body">
        <div className="cart">
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

        {totalAmount > 0 ? (
          <div className="checkout">
            <p> Subtotal: ${totalAmount} </p>
            <button onClick={() => navigate("/")}> Continue Shopping </button>
            <button
              onClick={() => {
                checkout();
                navigate("/checkout");
              }}>
              {" "}
              Checkout{" "}
            </button>
          </div>
        ) : (
          <h1> Your Shopping Cart is Empty</h1>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
