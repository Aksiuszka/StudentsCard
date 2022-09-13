import ReactDOM from 'react-dom'
import { ModalContainer, StyledBackdrop } from './styled';

function Modal({ children, closeModal }) {
  return ReactDOM.createPortal(
    <>
      <StyledBackdrop onClick={closeModal} />
      <ModalContainer>{children}</ModalContainer>
    </>,
    document.getElementById('portal')
  );
}

export default Modal;
