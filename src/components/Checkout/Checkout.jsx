import "./Checkout.css";
import { useContext, useEffect, useState } from "react";
import { ItemsContext } from "../../context/ItemsContext";

import Swal from 'sweetalert2';

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const initialState = {
  nombre: "",
  apellido: "",
  telefono: "",
  email: "",
};


const Checkout = () => {
  const { carrito, eliminarCarrito } = useContext(ItemsContext);
  const [cantidadTotal, setCantidadTotal] = useState(0);
  const [totalAPagar, setTotalAPagar] = useState(0);
  const [values, setValues] = useState(initialState);
  const [errorValidacion, setErrorValidacion] = useState("");

  useEffect(() => {
    const total = carrito.reduce((total, carritoItem) => total + carritoItem.cantidad, 0);
    setCantidadTotal(total);

    const totalPagar = carrito.reduce((total, carritoItem) => total + carritoItem.precioTotal, 0);
    setTotalAPagar(totalPagar);
  }, [carrito]);

  const onChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // Validar campos del formulario
    if (!values.nombre || !values.apellido || !values.telefono || !values.email) {
      setErrorValidacion("Todos los campos del formulario son obligatorios.");
      return;
    }

    // Validar que el carrito tenga al menos 1 ítem
    if (carrito.length === 0) {
      setErrorValidacion("El carrito debe tener al menos 1 ítem.");
      return;
    }

    // Limpiar mensajes de error si pasa las validaciones
    setErrorValidacion("");
  
    const compraData = {
      nombre: values.nombre,
      apellido: values.apellido,
      telefono: values.telefono,
      email: values.email,
      cantidad: cantidadTotal, 
      totalPagar: totalAPagar.toFixed(2), 
      items: carrito.map((item) => ({
        id: item.item.id,
        title: item.item.title,
        cantidad: item.cantidad,
        precioTotal: item.precioTotal.toFixed(2),
      })),
    };
  
    try {   
      const docRef = await addDoc(collection(db, "compras"), compraData);  
  
      //console.log("Compra realizada con éxito. ID de compra:", docRef.id);
      
      Swal.fire({
        title: `ID: ${docRef.id}`,
        text: "Compra realizada con éxito!",
        icon: "success"
      });

      // Borrar carrito
      eliminarCarrito();
      //Borrar Formulario
      setValues(initialState);

    } catch (error) {
      //console.error("Error al realizar la compra:", error);
      Swal.fire({
        title: error,
        text: "Error al realizar la compra!",
        icon: "error"
      });
    }
  };

  const eliminarTodoDelCarrito = () => {
    carrito.forEach((item) => eliminarDelCarrito(item.item.id));
  };

  return (
    <div className="formPago">
      <Form onSubmit={onSubmit}>
      <Row className="mb-3">
          <Col sm={12} md={6} lg={6} className="text-center">
            <Form.Group controlId="formGridCantidad">
              <Form.Label>Cantidad</Form.Label>
              <p><strong>{cantidadTotal}</strong></p>
            </Form.Group>
          </Col>
          <Col sm={12} md={6} lg={6} className="text-center">
            <Form.Group controlId="formGridTotalPagar">
              <Form.Label>Total a pagar</Form.Label>
              <p><strong>$ {totalAPagar.toFixed(2)}</strong></p>
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridNombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" name="nombre" value={values.nombre} onChange={onChange} placeholder="Ingrese Nombre" required />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridApellido">
            <Form.Label>Apellido</Form.Label>
            <Form.Control type="text" name="apellido" value={values.apellido} onChange={onChange} placeholder="Ingrese Apellido" required />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridTelefono">
            <Form.Label>Telefono</Form.Label>
            <Form.Control type="number" name="telefono" value={values.telefono} onChange={onChange} placeholder="Ingrese Telefono" required />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" value={values.email} onChange={onChange} placeholder="Ingrese email" required />
          </Form.Group>
        </Row>

        {errorValidacion && (
          <div className="text-center text-danger">
            <p><strong>{errorValidacion}</strong></p>        
          </div>          
        )}

        <div className="text-center">
          <Button className="btn" type="submit" disabled={carrito.length === 0}>
            Pagar
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Checkout;
