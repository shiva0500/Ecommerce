import React, { useContext } from "react";
import { faStar, faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ShopContext } from "../../context/shop-context";
import "../../App.css";
import "./Product.css";

const Product = (props) => {
  const { id, name, price, use, pimg } = props.data;
  const { addToCart } = useContext(ShopContext);

  // const cartItemCount = cartItems[id]; , cartItems

  return (
    <div className="product">
      <div className="item">
        <div className="product_item">
          <div className="img_item">
            <img src={pimg} alt="/" />
          </div>
          <div className="cart_icon">
            <FontAwesomeIcon
              className="addToCartBttn link"
              onClick={() => addToCart(id)}
              icon={faBagShopping}
             />
          </div>
        </div>

        <div className="rating">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </div>
        <p className="pname">{name}</p>
        <p className="puse">{use}</p>
        <p className="price"> ${price} </p>

      </div>
    </div>
  );
};

export default Product;

//  <button className="addToCartBttn" onClick={() => addToCart(id)}> add to cart{cartItemCount > 0 && <> ({cartItemCount})</>}</button>
         
         
