import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import "../product/Product.css";
import "./cart.css";

export const CartItem = (props) => {
  const { id, name, price, thumbnail } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <>
      <div className="cart-card">
        <img className="cart-img" src={thumbnail} alt="/" />
        <div className="p_details">
          <h3 className="cart-name">{name}</h3>
          <p className="cart-price">${price}</p>
          <div className="countHandler">
            <button className="dec" onClick={() => removeFromCart(id)}>
              {" "}
              -{" "}
            </button>
            <input
              type="text" className="counter"
              value={cartItems[id]}
              onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
            />
            <button className="inc" onClick={() => addToCart(id)}>
              {" "}
              +{" "}
            </button>
          </div>
          <p className="cart-price">${price * cartItems[id]}</p>

          <i             onClick={() => {
              removeFromCart(id);
            }}
            className=" dltItemBtn plink"class="fa-solid fa-xmark fa-2xl" ></i>
        </div>
      </div>
    </>
  );
};
