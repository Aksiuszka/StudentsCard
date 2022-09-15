export const validatorSchema = values => {
  const error = {};
  for (const value in values) {
    switch (value) {
      case 'firstName':
        if (!value.firstName) {
          error.firstName = 'Wymagane';
        } else if (value.firstName.length > 15) {
          error.firstName = 'Przekroczyles liczbe znakow';
        }
        break;
      case 'lastName':
        if (!value.lastName) {
          error.lastName = 'Wymagane';
        } else if (value.lastName.length > 15) {
          error.lastName = 'Przekroczyles liczbe znakow';
        }
        break;
      case 'pesel':
        if (!value.pesel) {
          error.pesel = 'Wymagane';
        } else if (value.pesel.length !== 11) {
          error.pesel = 'Nieprawidlowy pesel';
        }
        break;
      case 'faculty':
        if (!value.faculty) {
          error.faculty = 'Wymagane';
        } else if (value.faculty.length > 15 || value.faculty.length < 3) {
          error.faculty = 'Nieprawidlowa liczba znakow';
        }
        break;
      case 'album':
        if (!value.album) {
          error.album = 'Wymagane';
        } else if (value.album.length > 10 || value.album.length < 2) {
          error.album = 'Nieprawidlowa liczba znakow';
        }
        break;
      case 'startDate':
        if (!value.startDate) {
          error.startDate = 'Wymagane';
        }
        break;

      default:
        break;
    }
  }
  return error;
};
