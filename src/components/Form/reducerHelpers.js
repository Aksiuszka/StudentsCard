export const initialValues = {
  firstName: '',
  lastName: '',
  pesel: '',
  faculty: '',
  album: '',
  startDate: '',
};

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'FIRST_NAME':
      return { ...state, firstName: payload };
    case 'LAST_NAME':
      return { ...state, lastName: payload };
    case 'PESEL':
      return { ...state, pesel: payload };
    case 'START':
      return { ...state, startDate: payload };
    case 'FACULTY':
      return { ...state, faculty: payload };
    case 'ALBUM':
      return { ...state, album: payload };
    case 'RESET':
      return initialValues;
    default:
      return state;
  }
};
