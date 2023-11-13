import React, { useContext } from "react";
import { faStar, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ShopContext } from "../../context/shop-context";
import "../../App.css";
import "./Product.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = React.memo((props) => {
  // ... (Previous component logic)
  const { id, name, price, use, pimg } = props.data;
  const { addToCart } = useContext(ShopContext);

  const notify = () => toast.success('Added Successfully!', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });

    return (
      <div className="product">
        <div className="item">
          <div className="product_item">
            <div className="img_item">
              <img src={pimg} alt="/" />
            </div>
            <div className="cart_icon">
              <button className="addToCartBttn" onClick={notify}>
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
          <p className="pname">{name}</p>
          <p className="puse">{use}</p>
          <p className="price"> ${price} </p>
        </div>
        {/* Move ToastContainer outside of the product div */}
        <ToastContainer />
      </div>
    );
 
});



 

export default Product;
