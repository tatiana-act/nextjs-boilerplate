import React from 'react';
import Popup from 'reactjs-popup';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
    return isOpen ? (
        <div>
            <Popup open={isOpen} closeOnDocumentClick onClose={onClose}>
                <div className="modal" role="dialog" aria-modal="true">
                    <h3 className="tour-header">{title}</h3>
                    <button className="close" onClick={onClose} aria-label="Close modal">
                        &times;
                    </button>
                    {children}
                </div>
            </Popup>
        </div>
    ) : null;
};

export default Modal;