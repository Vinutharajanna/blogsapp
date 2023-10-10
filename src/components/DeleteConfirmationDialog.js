import React from 'react';

const DeleteConfirmationDialog = ({ isOpen, onClose, onDelete, title }) => {
  return (
    isOpen && (
      <div className="modal-backdrop">
        <div className="confirmation-dialog">
          <p>Are you sure you want to delete <strong>{title}</strong>?</p>
          <button className="confirmation-dialog__btn_yes" onClick={onDelete}>Yes</button>
          <button className="confirmation-dialog__btn_no" onClick={onClose}>No</button>
        </div>
      </div>
    )
  );
};

export default DeleteConfirmationDialog;
