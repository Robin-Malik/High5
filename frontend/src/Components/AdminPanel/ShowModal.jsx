import ReactDOM from "react-dom";

const ShowModal = ({ closeModal, children}) => {
 

  return ReactDOM.createPortal(
    <div>
      <div className="modal-wrapper" onClick={closeModal}></div>
      <div className="modal-container">
        {children}
      </div>
    </div>,
    document.querySelector(".myPortalModalDiv")
  );
};

export default ShowModal;