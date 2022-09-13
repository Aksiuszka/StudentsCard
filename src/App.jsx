import { useState} from 'react';
import Navbar from './components/Navbar';
import { Wrapper, Container, SectionContainer, Headline } from './styles/styled';
import Form from './components/Form';
import Modal from './components/Modal';
import Card from './components/Card';

function App() {
  const [modalState, setModalState] = useState({ modalContent: null, show: false });


  const closeModal = () => {
    setModalState({ ...modalState, show: false });
  };
  // const setModalContent =(state)=>{
  //   setModalState({ show: true, modalContent: state })
  // }
  const getHandleSubmit =(state)=>{
    return e => {
      e.preventDefault();
    //  setModalContent(state);
    setModalState({ show: true, modalContent: state });
    };
  }
  return (
    <>
      <Wrapper>
        <Container>
          <Navbar />
          <SectionContainer>
            <Headline>
                Twoja <span>karta studenta</span> 
            </Headline>
            <Form getHandleSubmit={getHandleSubmit}/>
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
