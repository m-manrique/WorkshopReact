import "./ShopContainer.css";
import { useContext, useEffect } from "react";
import { ItemsContext } from "../../context/ItemsContext";

import Shop from "../Shop/Shop";
import Checkout from "../Checkout/Checkout";

const ShopContainer = () => {
  const { carrito } = useContext(ItemsContext);

  return (
    <div className="shopContainer">
      <div className="text-center">
        <h2>Carrito de Compras</h2>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8">
          <Shop />
        </div>
        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
          <Checkout />
        </div>
      </div>
    </div>
  );
};

export default ShopContainer;
