import { useState } from 'react';
import { InputBox } from './styled';

function Input({ label, id, handleFormikBlur, ...rest }) {
  const [inputProps, setInputProps] = useState({
    translate: 'translate(0, 0.8rem)',
    scale: 'scale(1)',
  });
  const handleBlur =(e)=>{
    setInputProps({ translate: 'translate(0, 0.12rem)', scale: 'scale(0.8)'})
    handleFormikBlur(e);
  }
  return (
    <InputBox {...inputProps}>
      <input
        id={id}
        {...rest}
        onFocus={() =>
          setInputProps({ translate: 'translate(0, 0.8rem)', scale: 'scale(1)' })
        }
        onBlur={handleBlur}
      />
      <label htmlFor={id}>{label}</label>
    </InputBox>
  );
}

export default Input;
