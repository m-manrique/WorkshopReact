import "./ItemDetailContainer.css";
import ItemDetail from "../ItemDetail/ItemDetail";
import Cantidad from "../Cantidad/Cantidad";

const ItemDetailContainer = () => {
  return (
    <div className="container-fluid contenedor">
      <div className="row">
        <div className="col-md-8 col-lg-8 text-center">
          <ItemDetail />
        </div>  
        <div className="col-md-4 col-lg-4 text-center contenedor">
        <div className="containerCantidad">
          <div className="cantidad">
            <h4>Cantidad</h4>
            <Cantidad />
            <button className="btn">Añadir al Carrito</button>
          </div>
          </div>
        </div>    
      </div>
    </div>
  );
};

export default ItemDetailContainer;
