import { ModalContainer, StyledBackdrop } from './styled';

function Modal({ children, closeModal }) {
  return (
    <>
      <StyledBackdrop onClick={closeModal} />
      <ModalContainer>{children}</ModalContainer>
    </>
  );
}

export default Modal;
