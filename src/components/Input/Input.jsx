import { useState } from 'react';
import { InputBox } from './styled';

function Input({ label, id, ...rest }) {
  const [inputProps, setInputProps] = useState({
    translate: 'translate(0, 0.8rem)',
    scale: 'scale(1)',
  });
  return (
    <InputBox {...inputProps}>
      <input
        id={id}
        {...rest}
        onFocus={e =>
          setInputProps({ translate: 'translate(0, 0.8rem)', scale: 'scale(1)' })
        }
        onBlur={e => setInputProps({ translate: 'translate(0, 0.12rem)', scale: 'scale(0.8)'})}
      />
      <label htmlFor={id}>{label}</label>
    </InputBox>
  );
}

export default Input;
