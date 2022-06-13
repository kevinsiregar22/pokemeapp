import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .label('name')
    .min(5, 'Must Contain 5 Characters')
    .max(20, 'Max 20 Characters')
    .required('Please fill in the input name'),
  email: Yup.string()
    .label('Email')
    .email('Enter a valid email')
    .required('Please fill in the input email'),
  password: Yup.string()
    .label('Password')
    .required('Please fill in the input password')
    .matches(
      ' ((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))',
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character',
    ),
});
