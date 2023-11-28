import React, { useState, useEffect } from "react";
import axios from "axios";

const DummyProduct = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/");
        const data = response.data;
        setProductList(data.products);
      } catch (error) {
        console.error("Error fetching product data:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <ul>
         {productList &&
          productList.map((product) => (
            <li key={product.id}>
              <h2>name:{product.title}</h2>
              <p>price : ${product.price}</p>
              <img src={product.images[product.images.length-1]} alt="" />
            </li>
          ))} 
      </ul>
    </div>
  );
};

export default DummyProduct;
