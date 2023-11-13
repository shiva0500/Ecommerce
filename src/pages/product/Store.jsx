import React from "react";
import { PRODUCTS } from "../../products.js";
import Product from "./Product.jsx";
import "../../App.css";
import "./Store.css";

const Store = () => {
  return (
    <>
      <div className="shop">
        <div className="store_header">
          <h2>New Plants</h2>
          <button>Shop Now</button>
        </div>

        <div className="products">
          {PRODUCTS.map((product) => (
            <Product key={product.id} data={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Store;
