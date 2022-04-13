import React from "react";
import { Modal, Card } from "react-bootstrap";
import "../assets/sass/components/ModalView.scss";

const ModalCard = ({ show, setShow, data }) => {
  /* cierra modal */
  const handleClose = () => {
    setShow(false);
  };

  return (
    <div className="modalData">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Card style={{ width: "18rem" }} bg="dark">
            <Card.Img variant="top" src={data.avatarURL} />
            <Card.Body>
              <Card.Title>{data.nombre}</Card.Title>
              <Card.Text>
                {data.puedeVolar === true
                  ? "Puede volar: si"
                  : "Puede volar: no"}
                <br></br>
                Nombre real : {data.nombreReal}
              </Card.Text>
            </Card.Body>
          </Card>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalCard;
