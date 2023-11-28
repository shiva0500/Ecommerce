import React, { useContext } from "react";
import { faStar, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ShopContext } from "../../context/shop-context";
import "../../App.css";
import "./Product.css";
import Swal from "sweetalert2";
// import withReactContent from 'sweetalert2-react-content'

const Product = React.memo((props) => {
  // ... (Previous component logic)
  const { id, title, price, description,thumbnail } = props.data;
  const { addToCart } = useContext(ShopContext);
  const MySwal = () => {
    Swal.fire({
      icon: "success",
      title: "added to cart",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="product">
      <div className="item">
        <div className="product_item">
          <div className="img_item">
            <img  src={thumbnail} alt="/" />
          </div>
          <div className="cart_icon">
            <button className="addToCartBttn" onClick={MySwal}>
              <FontAwesomeIcon
                onClick={() => {
                  addToCart(id);
                }}
                icon={faShoppingBag}
                style={{ fontSize: "1.2rem" }}
              />
            </button>
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
        <p className="pname">{title}</p>
        <p className="puse">{description}</p>
        <p className="price"> ${price} </p>
      </div>
      {/* Move ToastContainer outside of the product div */}
    </div>
  );
});

export default Product;
