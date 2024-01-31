import "./Cantidad.css";
import { useContext } from "react";
import { ItemsContext } from "../../context/ItemsContext";

const Cantidad = () => {
    const { cantidad, handleDecremento, handleIncremento } = useContext(ItemsContext);

  return (
    <div>
      <button className="btn" onClick={handleDecremento}>-</button>
      <span className="cantidadCarrito">{cantidad}</span>
      <button className="btn" onClick={handleIncremento}>+</button>
    </div>
  )
}

export default Cantidad