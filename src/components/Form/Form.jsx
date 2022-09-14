import { useReducer } from 'react';
import { StyledForm, Button } from './styled';
import { initialValues, reducer } from './reducerHelpers';
import Input from '../Input';

function Form({getHandleSubmit}) {
  const [state, dispatch] = useReducer(reducer, initialValues);


  const onNameChange = e => {
    dispatch({ type: 'FIRST_NAME', payload: e.target.value });
  };
  const onSurnameChange = e => {
    dispatch({ type: 'LAST_NAME', payload: e.target.value });
  };
  const onPeselChange = e => {
    dispatch({ type: 'PESEL', payload: e.target.value });
  };
  const onStartChange = e => {
    dispatch({ type: 'START', payload: e.target.value });
  };
  const onFacultyChange = e => {
    dispatch({ type: 'FACULTY', payload: e.target.value });
  };
  const onAlbumChange = e => {
    dispatch({ type: 'ALBUM', payload: e.target.value });
  };
  return (
    <StyledForm onSubmit={getHandleSubmit(state)}>
   
        <Input
          id="name"
          label="Imie:"
          type="text"
          value={state.firstName}
          onChange={onNameChange}
          required
        />
        <Input
          id="surname"
          label="Nazwisko:"
          type="text"
          value={state.lastName}
          onChange={onSurnameChange}
          required
        />
        <Input
          id="pesel"
          label="Pesel:"
          type="text"
          value={state.pesel}
          onChange={onPeselChange}
          required
        />
        <Input style={{color: 'transparent'}}
          id="startDate"
          label="Data rozpoczęcia:"
          type="date"
          value={state.startDate}
          onChange={onStartChange}
          required
        />
        <Input
          id="kierunek"
          label="Kierunek:"
          type="text"
          value={state.faculty}
          onChange={onFacultyChange}
          required
        />
        <Input
          id="album"
          label="Numer albumu:"
          type="number"
          value={state.album}
          onChange={onAlbumChange}
          required
        />
     
      <Button>Wygeneruj</Button>
    </StyledForm>
  );
}

export default Form;
