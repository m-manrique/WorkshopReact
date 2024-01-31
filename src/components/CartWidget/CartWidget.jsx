import { useContext, useEffect, useState } from "react";
import { ItemsContext } from "../../context/ItemsContext";
import "./CartWidget.css";

const CartWidget = () => {
  const { carrito } = useContext(ItemsContext);
  const [cantidadTotal, setCantidadTotal] = useState(0);

  useEffect(() => {
    const total = carrito.reduce((total, carritoItem) => total + carritoItem.cantidad, 0);
    setCantidadTotal(total);
  }, [carrito]);

  return (
    <div className="carrito">
      <i className="bi bi-cart3"></i>
      <span>{cantidadTotal}</span>
    </div>
  );
};

export default CartWidget;
