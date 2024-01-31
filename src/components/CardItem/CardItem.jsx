import "./CardItem.css";
import { useContext } from "react";
import { ItemsContext } from "../../context/ItemsContext";
import Cantidad from "../Cantidad/Cantidad";

const CardItem = ({ itemData , detalle }) => {
  const { id, image, category, price, title, description } = itemData;
  const { agregarAlCarrito, cantidad, onCantidadChange } = useContext(ItemsContext);  

  const handleAgregarAlCarrito = () => {
    agregarAlCarrito(itemData, cantidad);
    onCantidadChange(1);
  };

  return (
    <div className="itemProduct">      

      {detalle ? (
        <>
        <div className="row">
        <div className="col-md-7 col-lg-7 ">
          <div className="imagenContenedor">
            <img src={image} alt={`${category} - ${id}`} />
          </div>
        </div>        
        <div className="col-md-4 col-lg-4 cantidad">
            <h4>Cantidad</h4>
            <Cantidad cantidad={cantidad} />                          
            <button className="btn" onClick={handleAgregarAlCarrito}>Agregar al Carrito</button>          
          </div>
      </div>
        <div className="cardCuerpo">
          <h4>{title}</h4>
          <p className="descripcion">{description}</p>
          <p>{`Ref: ${id}`}</p>
          <p>{`Precio: $ ${price}`}</p>
          <p>{`Categoria: ${category}`}</p>          
        </div>
        </>
      ) : (
        <>
        <div className="imagenContenedor">
          <img src={image} alt={`${category} - ${id}`} />
        </div>
        <div className="cardCuerpo">
          <p>{`Ref: ${id}`}</p>
          <p>{`Precio: $ ${price}`}</p>
          <p>{`Categoria: ${category}`}</p>
        </div>
        </>
      )}
    </div>
  );
};

export default CardItem;
