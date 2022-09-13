import Republika from '../../../assets/rpzabia.png';
import { Container, Logo, Button } from './styled';
function CardBack({ handleRotation }) {
  return (
    <Container>
      <Logo>
        <img src={Republika} alt="republika zabia" />
      </Logo>
      <Button onClick={handleRotation} type="button">
        Odwroc
      </Button>
    </Container>
  );
}

export default CardBack;
