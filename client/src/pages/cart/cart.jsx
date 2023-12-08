import React, { useState, useContext, useEffect } from "react";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import axios from "axios";

import Footer from "../../components/Footer/Footer";
import "./cart.css";
import Commonnav from "../../components/Navbar/Commonnav";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [productList, setProductList] = useState([]);

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
  }, [addToCart]); 

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/products");
        const data = response.data;

        setProductList(data.products);
      } catch (error) {
        console.error("Error fetching product data:", error.message);
      }
    };

    fetchData();
  }, []);

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
          {productList.map((product) => {
          const cartItemQuantity = cartItems[product.id] || 0;

          // Only display products that are in the cart
          if (cartItemQuantity > 0) {
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
                <span className="TotalPrice">Total Price</span>
                <span className="totalAmount">${totalAmount}</span>
              </div>
              <button
                className="checkout_btn"
                onClick={() => {
                  checkout();
                  navigate("/checkout");
                }}>
                Checkout
              </button>
            </div>
          ) : (
            <>
              <h1>Your Shopping Cart is Empty</h1>
              <button
                className="continueShop_btn"
                onClick={() => navigate("/")}>
                Continue Shopping
              </button>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
