import React from "react";
import Store from "../product/Store";
import Commonnav from "../../components/Navbar/Commonnav";

const Mainstore = () => {
  return (
    <div className="Mainstore">
       <Commonnav/>
      <Store />
    </div>
  );
};

export default Mainstore;
