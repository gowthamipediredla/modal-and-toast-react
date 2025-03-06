import React from "react";
import "./Modal.css";
export const Modal = ({ showModal, renderContent = "", onClick }) => {
  if (!showModal) return null;
  return (
    <div className="modal-overlay" onClick={onClick}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="action-close" onClick={onClick}>
          X
        </span>
        {renderContent()}
      </div>
    </div>
  );
};
