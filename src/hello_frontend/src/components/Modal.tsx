// src/components/Modal.tsx
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  description: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, imageUrl, description }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <button className="absolute top-2 right-2 text-gray-600" onClick={onClose}>
          &times;
        </button>
        <img src={imageUrl} alt={description} className="w-full h-auto mb-4" />
        <h2 className="text-lg font-semibold">{description}</h2>
      </div>
    </div>
  );
};

export default Modal;
