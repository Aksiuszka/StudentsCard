import { createPortal } from 'react-dom';
import { ModalContainer, StyledBackdrop } from './styled';

function Modal({ children, closeModal }) {
  return createPortal(
    <>
      <StyledBackdrop onClick={closeModal} />
      <ModalContainer>{children}</ModalContainer>
    </>,
    document.body
  );
}

export default Modal;
