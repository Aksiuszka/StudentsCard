import { useState } from 'react';
import CardBack from './CardBack';
import CardFront from './CardFront';
import { StyledCard } from './styled';

function Card({ modalContent }) {
  const [rotate, setRotate] = useState();
  const handleRotation = () => {
    setRotate(!rotate);
  };
  const mergeInputsWithLabels = values => {
    const accumulator = [];
    for (const key in values) {
      switch (key) {
        case 'firstName':
          accumulator.push({ label: 'Imię: ', value: values[key] });
          break;
        case 'lastName':
          accumulator.push({ label: 'Nazwisko: ', value: values[key] });
          break;
        case 'pesel':
          accumulator.push({ label: 'Pesel: ', value: values[key] });
          break;
        case 'faculty':
          accumulator.push({ label: 'Kierunek: ', value: values[key] });
          break;
        case 'album':
          accumulator.push({ label: 'Numer albumu: ', value: values[key] });
          break;
        case 'startDate':
          accumulator.push({ label: 'Data rozpoczęcia: ', value: values[key] });
          break;
        default:
          break;
      }
    }
    return accumulator;
  };
  const inputsAndLabels = mergeInputsWithLabels(modalContent);
  return (
    <>
      <StyledCard rotate={rotate}>
        <CardFront handleRotation={handleRotation} inputsAndLabels={inputsAndLabels} />
        <CardBack handleRotation={handleRotation} />
      </StyledCard>
    </>
  );
}

export default Card;
