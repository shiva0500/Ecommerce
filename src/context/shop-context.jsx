import { createContext, useState, useEffect } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(() => {
    // Load cart items from localStorage when the component mounts
    const storedCartItems = localStorage.getItem("cartItems");
    return storedCartItems ? JSON.parse(storedCartItems) : getDefaultCart();
  });

  const updateCart = (newCart) => {
    setCartItems(newCart);
  };

  useEffect(() => {
    // Save cart items to localStorage whenever the cartItems state changes
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

const getTotalCartAmount = () => {
  let totalAmount = 0;
  for (const item in cartItems) {
    if (cartItems[item] > 0) {
      let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
      if (itemInfo) {
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
  }
  return totalAmount;
};


  const addToCart = (itemId) => {
    const newCart = { ...cartItems, [itemId]: cartItems[itemId] + 1 };
    updateCart(newCart);
  };

  const removeFromCart = (itemId) => {
    if (cartItems[itemId] > 0) {
      const newCart = { ...cartItems, [itemId]: cartItems[itemId] - 1 };
      updateCart(newCart);
    }
  };

  const updateCartItemCount = (newAmount, itemId) => {
    if (newAmount >= 0) {
      const newCart = { ...cartItems, [itemId]: newAmount };
      updateCart(newCart);
    }
  };

  const checkout = () => {
    updateCart(getDefaultCart());
  };

  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
