import React from 'react'
import { Modal , Button} from 'react-bootstrap'

function DeleteDialog({show , onHide , onDeleteHandler}) {
  return (
  <Modal show={show} onHide={onHide}>
    <Modal.Header closeButton>
      <Modal.Title>Delete Dialog</Modal.Title>
    </Modal.Header>
    <Modal.Body>Are you sure you want to delete this employee information ?</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={onHide}>
        Close
      </Button>
      <Button variant="primary" onClick={onDeleteHandler}>
        Delete
      </Button>
    </Modal.Footer>
  </Modal>
  )
}

export default DeleteDialog