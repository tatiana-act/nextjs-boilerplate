import React from 'react';
import Popup from 'reactjs-popup';
import ContactForm from "@/components/ContactForm";
import { useTranslations } from "next-intl";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    tourName: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, tourName }) => {
    const tContact = useTranslations('ContactForm');
    return isOpen ? (
        <div>
            <Popup open={isOpen} closeOnDocumentClick onClose={onClose}>
                <div className="modal" role="dialog" aria-modal="true">
                    <h3 className="tour-header">{tContact('title')}</h3>
                    <button className="close" onClick={onClose} aria-label="Close modal">
                        &times;
                    </button>
                    <ContactForm tourName={tourName} onClose={onClose} />
                </div>
            </Popup>
        </div>
    ) : null;
};

export default Modal;