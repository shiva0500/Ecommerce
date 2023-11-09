import React from "react";
import Store from "../product/Store";
import Navbar from "../../components/Navbar/Navbar";

const Mainstore = () => {
  return (
    <div className="Mainstore">
      <Navbar />
      <Store />
    </div>
  );
};

export default Mainstore;
