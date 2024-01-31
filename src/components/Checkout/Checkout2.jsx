import "./Checkout.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const Checkout = () => {
  return (
    <div className="formPago">
      <Form>
      <Row className="mb-3">
          <Col sm={6} md={6} lg={6} className="text-center">
            <Form.Label>Cantidad</Form.Label>
            <p>XXXX</p>
          </Col>
          <Col sm={6} md={6} lg={6} className="text-center">
            <Form.Label>Total a pagar</Form.Label>
            <p>$</p>
          </Col>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridNombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Ingrese Nombre" required />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridApellido">
            <Form.Label>Apellido</Form.Label>
            <Form.Control type="text" placeholder="Ingrese Apellido" required />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridTelefono">
            <Form.Label>Telefono</Form.Label>
            <Form.Control type="number" placeholder="Enter Telefono" required />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
          </Form.Group>
        </Row>
        <div className="text-center">
          <Button className="btn" variant="primary" type="submit">
            Pagar
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Checkout;
