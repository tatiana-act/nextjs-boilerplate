import React from 'react';
import Popup from 'reactjs-popup';
import ContactForm from "@/components/ContactForm";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    // children: React.ReactNode;
    tourName: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, tourName }) =>
    isOpen ? (
            <div>{/*
                <button type="button" className="button" onClick={() => onClose()}>
                    Controlled Popup
                </button>*/}
                <Popup open={isOpen} closeOnDocumentClick onClose={onClose}>
                    <div className="modal">
                        <button className="close" onClick={onClose}>
                            &times;
                        </button>
                        <ContactForm tourName={tourName} onClose={onClose} />
                    </div>
                </Popup>
            </div>
    ) : null;

export default Modal;