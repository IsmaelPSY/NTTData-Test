import './Modal.css';

const Modal = ({ title, message, isOpen, onClose, onConfirm }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="em-modal-ctr">
      <div className="em-modal-cont">
        <h2 className="em-modal-title">{title}</h2>
        <p className="em-modal-message">{message}</p>
        <div className="em-modal-btn-div">
          <button className="em-modal-btn" onClick={onClose}>Cancel</button>
          <button className="em-modal-btn" onClick={onConfirm}>Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
