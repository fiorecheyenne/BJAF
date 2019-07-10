import React from "react";

export default function Modal({ children, isVisible, onClose }) {
    return (
        <div className={`modal ${isVisible && "is-active"}`}>
            <div className="modal-background" onClick={onClose} />
            <div className="modal-content">{children}</div>
            <button className="modal-close is-large" aria-label="close" onClick={onClose} />
        </div>
    );
}
