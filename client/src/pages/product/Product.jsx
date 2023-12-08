import React, { useContext } from "react";
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
                <i  onClick={() => {
                  addToCart(id);
                }} class="fas fa-shopping-bag" style={{ fontSize: "1.2rem" }}></i>
            </button>
          </div>
        </div>

        <div className="rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>


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
