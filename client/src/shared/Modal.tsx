import React, { ReactNode } from "react";

export type ModalProps = {
    children: ReactNode;
    isVisible: boolean;
    onClose?: () => void;
};

export default function Modal({ children, isVisible, onClose }: ModalProps) {
    return (
        <div className={`modal ${isVisible && "is-active"}`}>
            <div className="modal-background" onClick={onClose} />
            <div className="modal-content" style={{ justifyContent: "center", display: "flex" }}>
                {children}
            </div>
            <button className="modal-close is-large" aria-label="close" onClick={onClose} />
        </div>
    );
}
