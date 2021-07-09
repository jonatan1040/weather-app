import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector, useDispatch } from "react-redux";
import { toggleShowError } from "../slices/locationSlice";

function Error(props) {
  const dispatch = useDispatch();
  const toggleError = useSelector((state) => state.locations.showError);

  // const [show, setShow] = useState(false);

  const handleClose = () => dispatch(toggleShowError(false));
  // const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={toggleError} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Error;
