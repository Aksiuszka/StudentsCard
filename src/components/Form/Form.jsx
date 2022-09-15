import { StyledForm, Button } from './styled';
import Input from '../Input';
import { useFormik } from 'formik';

function Form({ setModalContent }) {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      pesel: '',
      faculty: '',
      album: '',
      startDate: '',
    },
    onSubmit: values => {
      setModalContent(values);
      formik.resetForm();
    },
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <Input
        id="firstName"
        label="Imie:"
        type="text"
        value={formik.values.firstName}
        onChange={formik.handleChange}
        handleFormikBlur={formik.handleBlur}
      />

      <Input
        id="lastName"
        label="Nazwisko:"
        type="text"
        value={formik.values.lastName}
        onChange={formik.handleChange}
        handleFormikBlur={formik.handleBlur}
      />

      <Input
        id="pesel"
        label="Pesel:"
        type="text"
        value={formik.values.pesel}
        onChange={formik.handleChange}
        handleFormikBlur={formik.handleBlur}
      />

      <Input
        style={{ color: 'transparent' }}
        id="startDate"
        label="Data rozpoczęcia:"
        type="date"
        value={formik.values.startDate}
        onChange={formik.handleChange}
        handleFormikBlur={formik.handleBlur}
      />

      <Input
        id="faculty"
        label="Kierunek:"
        type="text"
        value={formik.values.faculty}
        onChange={formik.handleChange}
        handleFormikBlur={formik.handleBlur}
      />

      <Input
        id="album"
        label="Numer albumu:"
        type="text"
        value={formik.values.album}
        onChange={formik.handleChange}
        handleFormikBlur={formik.handleBlur}
      />

      <Button type="submit">Wygeneruj</Button>
    </StyledForm>
  );
}

export default Form;
