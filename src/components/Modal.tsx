import {
  ReactNode,
  CSSProperties,
} from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: '80%',
    overflow: 'hidden',
    padding: '3px',
    boxSizing: 'border-box',
  } as CSSProperties,
};

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  contentLabel?: string;
  children: ReactNode;
}

const Modal = ({
  isOpen,
  onClose,
  contentLabel,
  children,
}: ModalProps) => (
  <ReactModal
    isOpen={isOpen}
    onRequestClose={onClose}
    style={modalStyles}
    contentLabel={contentLabel}
  >
    {children}
  </ReactModal>
);

export {
  Modal
};
