import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { id, name, price, pimg } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="item_body">
      <div className="item_main">
        <div className="p-display">
          <div className="p-items">
            <img src={pimg} alt="/" />
            <h3 className="cart-food-title">{name}</h3>
            <div className="countHandler">
              <button onClick={() => removeFromCart(id)}> - </button>
              <input
                value={cartItems[id]}
                onChange={(e) =>
                  updateCartItemCount(Number(e.target.value), id)
                }
              />
              <button onClick={() => addToCart(id)}> + </button>
            </div>
            <p id="p-price">${price}</p>
          </div>
          <hr />
        </div>
      </div>

      <div className="cartItem"></div>
    </div>
  );
};
