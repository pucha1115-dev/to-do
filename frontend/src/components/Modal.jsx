/* eslint-disable react/prop-types */
// DeleteModal.jsimport Modal from "react-modal";

const Modal = ({ isOpen, closeModal }) => {
  return (
    <Modal isOpen={isOpen}>
      <div>
        <h2>Task Deleted</h2>
        <button onClick={closeModal}>Close</button>
      </div>
    </Modal>
  );
};

export default Modal;
