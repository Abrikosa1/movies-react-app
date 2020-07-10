import React, { Children } from 'react';
import PropTypes from 'prop-types';

import ModalPortal from './ModalPortal';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'

const ModalForm = props => {
    const { title, isOpen, onCancel, onSubmit, children, show } = props;
  console.log(title, show);
    return (
      <>
        { show &&
        <ModalPortal>
          <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          onHide={onCancel}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {children}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={onSubmit}>Submit</Button>
            <Button variant="danger" onClick={onCancel}>Close</Button>
          </Modal.Footer>
        </Modal>
      </ModalPortal>
        }
      </>
    );
}

ModalForm.propTypes = {
    title: PropTypes.string,
    show: PropTypes.bool,
    onCancel: PropTypes.func,
    onSubmit: PropTypes.func,
    children: PropTypes.node
};

ModalForm.defaultProps = {
    title: 'Modal Title',
    show: false,
    onCancel: () => {},
    onSubmit: () => {},
    children: null
};


export default ModalForm;