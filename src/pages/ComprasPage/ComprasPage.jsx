import "./ComprasPage.css";
import { useEffect, useContext } from "react";
import { ItemsContext } from "../../context/ItemsContext";

const ComprasPage = () => {
  const { compras, getCompras } = useContext(ItemsContext);

  useEffect(() => {
    getCompras();
  }, [getCompras]);

  return (
    <div className="shopContainer">
      <div className="text-center">
        <h2>Compras Realizadas</h2>
      </div>
      <div className="container-fluid tablaCompras">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Ref Compra</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col"># Articulos</th>
              <th scope="col">Total Pagado</th>
            </tr>
          </thead>
          <tbody>
            {compras.map((compra) => (
              <tr key={compra.id}>
                <th scope="row">{compra.id}</th>
                <td>{compra.nombre}</td>
                <td>{compra.apellido}</td>
                <td>{compra.cantidad}</td>
                <td>$ {compra.totalPagar}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComprasPage;
