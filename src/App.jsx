import Navbar from './components/Navbar';
import { Wrapper, Container, SectionContainer, Headline } from './styles/styled';
import Form from './components/Form';
function App() {
  return (
    <>
      <Wrapper>
        <Container>
          <Navbar />
          <SectionContainer>
            <Headline>
              <h1>
                Twoja <span>karta studenta</span>
              </h1>
            </Headline>
            <Form />
          </SectionContainer>
        </Container>
      </Wrapper>
    </>
  );
}
export default App;
