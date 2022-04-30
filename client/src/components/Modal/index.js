import React from 'react';

function Modal({ children, show, close, fullName, setFullName, relationship, setRelationship, username, setUsername, password, setPassword }) {
  if (!show) {
    return null;
  }

  return (
    <div
      className="modal is-active"
      style={{ minHeight: "100px", height: "fit-content" }}
    >
      <div className="modal-background"></div>

      <div className="modal-content ml-6 mr-6">
        <div className="media-content mt-4">
          <div className="content">
            {children}
          </div>
        </div>
        <button
          className="modal-close is-large"
          aria-label="close"
          onClick={close}
        ></button>
      </div>
    </div>
  );
}
export default Modal;
