import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector, useDispatch } from "react-redux";
import { toggleShowError } from "../slices/locationSlice";

function Error(props) {
  const dispatch = useDispatch();
  const toggleError = useSelector((state) => state.locations.showError);

  const handleClose = () => {
    dispatch(toggleShowError({ toggle: false, title: "", message: "" }));
  };
  return (
    <>
      <Modal show={toggleError.toggle} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>{toggleError.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{toggleError.message}</Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Error;
