import "./Shop.css";
import { useContext, useEffect } from "react";
import { ItemsContext } from "../../context/ItemsContext";

const Shop = () => {
  const { carrito, eliminarDelCarrito } = useContext(ItemsContext);

 //console.log(carrito);

  return (
    <div>
      {carrito.length === 0 ? (
        <div className="text-center">
          <p>El carrito está vacío.</p>
        </div>
      ) : (
        <div className="container-fluid ">
          {carrito.map((item) => (  
            <div className="row producto" key={item.item.id}>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-2 col-xl-2 text-center cardItems" >
                <img src={item.item.image} alt={`${item.item.category} - ${item.id}`} />
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 text-center cardItems" >
                <h5>{item.item.title}</h5>
              </div> 
              <div className="col-xs-12 col-sm-6 col-md-3 col-lg-2 col-xl-2 text-center cardItems" >
                <p>Precio</p>
                <span>$ {item.item.price}</span>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3 col-lg-1 col-xl-1 text-center cardItems" >
                <p>Cantidad</p>
                <span>{item.cantidad}</span>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3 col-lg-2 col-xl-2 text-center cardItems" >
                <p>Total</p>
                <span>$ {item.precioTotal}</span>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3 col-lg-2 col-xl-2 text-center cardItems" >
                <button className="btn" onClick={() => eliminarDelCarrito(item.item.id)}>
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Shop;
