
import React from 'react';
import { IoCloseOutline } from 'react-icons/io5';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
      <div className="bg-white p-6 rounded shadow-lg w-11/12 md:w-1/2">
        <button className="float-right text-red-500" onClick={onClose}>
         <IoCloseOutline className='w-8 h-8' />
        </button>
        <div>{content}</div>
      </div>
    </div>
  );
};

export default Modal;
