import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [productList, setProductList] = useState([]);
  const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < productList.length + 1; i++) {
      cart[i] = 0;
    }
    return cart;
  };
  const [cartItems, setCartItems] = useState(() => {
    try {
      // Load cart items from localStorage when the component mounts
      const storedCartItems = localStorage.getItem("cartItems");
      return storedCartItems ? JSON.parse(storedCartItems) : getDefaultCart();
    } catch (error) {
      console.error("Error parsing cart items:", error.message);
      return getDefaultCart();
    }
  });



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



  const updateCart = (newCart) => {
    setCartItems(newCart);
  };



  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = productList.find(
          (product) => product.id === Number(item)
        );
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
    checkout
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
