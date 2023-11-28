import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import Product from "./Product.jsx";
import "../../App.css";
import "./Store.css";

const Store = (props) => {
  const [productList, setProductList] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const productsPerPage = 6;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/products");
        const data = response.data;

        setProductList(data.products.slice(0, parseInt(props.limit)));
      } catch (error) {
        console.error("Error fetching product data:", error.message);
      }
    };

    fetchData();
  }, [props.limit]);

  const pageCount = Math.ceil(productList.length / productsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const displayProducts = productList
    .slice(pageNumber * productsPerPage, (pageNumber + 1) * productsPerPage)
    .map((product) => <Product key={product.id} data={product} />);

  return (
    <>
      <div className="shop">
        <div className="store_header">
          <h2>New Plants</h2>
          <button>Shop Now</button>
        </div>

        <div className="products">{displayProducts}</div>

        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
        />
      </div>
    </>
  );
};

export default Store;
