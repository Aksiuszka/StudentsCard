import { Container, DataContainer, Section, Button, GridContainer, Headline } from './styled';
import CardLogo from '../../CardLogo';
function CardFront({ handleRotation, inputsAndLabels }) {
  return (
    <Container>
    <Section>
      <CardLogo />
      <DataContainer>
        <Headline>
          Dane <span>Studenta:</span>
        </Headline>
        <GridContainer>
          {inputsAndLabels.map(item => (
            <article>
              {item.label} {item.value}
            </article>
          ))}
        </GridContainer>
      </DataContainer>
    </Section>
    <Button onClick={handleRotation} type="button">
      Odwroc
    </Button>
  </Container>
  );
}

export default CardFront;
