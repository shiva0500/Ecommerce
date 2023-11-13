import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "../product/Product.css";
import "./cart.css";


export const CartItem = (props) => {
  const { id, name, price, pimg } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <>

      <div className="cart-card">

        <img className="cart-img" src={pimg} alt="/" />
        <div className="p_details">
        <h3 className="cart-name">{name}</h3>
        <p className="cart-price">${price}</p>
        <div className="countHandler">
          <button className="dec" onClick={() => removeFromCart(id)}>
            {" "}
            -{" "}
          </button>
          <input
            type="number"
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button className="inc" onClick={() => addToCart(id)}>
            {" "}
            +{" "}
          </button>
        </div>
        <p className="cart-price" >${price * cartItems[id]}</p>
        <FontAwesomeIcon
          className=" dltItemBtn plink"
          icon={faTimes}
          size="1x"
        />
        </div>

      </div>
    </>
  );
};
