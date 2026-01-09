import React from "react";
import "./ConfirmationModal.css";

export const ConfirmationModal = ({
  isOpen,
  message,
  onConfirm,
  onCancel,
  confirmText = "Sim",
  cancelText = "Não",
}) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="overlay" onClick={onCancel}></div>
      <div className="message-box">
        <p>{message}</p>
        <div className="message-box-buttons">
          <button onClick={onCancel}>{cancelText}</button>
          <button onClick={onConfirm}>{confirmText}</button>
        </div>
      </div>
    </>
  );
};

