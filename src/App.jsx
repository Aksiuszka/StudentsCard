import { useState } from 'react';
import Navbar from './components/Navbar';
import { Wrapper, Container, SectionContainer, Headline } from './styles/styled';
import Form from './components/Form';
import Modal from './components/Modal';
import Card from './components/Card';

function App() {
  const [modalState, setModalState] = useState({ modalContent: null, show: false });

  const setModalContent =(state)=>{
    setModalState({ show: true, modalContent: state })}

  const closeModal = () => {
    setModalState({ ...modalState, show: false });
  };
  return (
    <>
      <Wrapper>
        <Container>
          <Navbar />
          <SectionContainer>
            <Headline>
              Twoja <span>karta studenta</span>
            </Headline>
            <Form setModalContent={setModalContent}  />
            {modalState.show && (
              <Modal closeModal={closeModal}>
                <Card modalContent={modalState.modalContent} />
              </Modal>
            )}
          </SectionContainer>
        </Container>
      </Wrapper>
    </>
  );
}
export default App;
