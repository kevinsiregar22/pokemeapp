import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {Input, Gap, Link, Button} from '../../../components/atoms';
import {colors, fonts} from '../../../utils';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useNavigation} from '@react-navigation/native';

const Register = () => {
  const navigation = useNavigation();

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .label('name')
      .min(5, 'Must Contain 5 Characters')
      .max(20, 'Max 20 Characters')
      .required('Please enter a registered name'),
    email: Yup.string()
      .label('Email')
      .email('Enter a valid email')
      .required('Please enter a registered email'),
    password: Yup.string()
      .label('Password')
      .required()
      .matches(
        ' ((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))',
        'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character',
      ),
  });

  const handleSubmitButton = values => {
    if (values.email.length > 8 && values.password.length > 8) {
      navigation.navigate('Login');
    }
  };
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{name: '', email: '', password: ''}}
      onSubmit={handleSubmitButton}>
      {({values, handleChange, errors, touched, handleBlur, handleSubmit}) => (
        <View style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Gap height={40} />
            <Text style={styles.title}>Pokemoe App</Text>
            <Text style={styles.register}>Register</Text>
            <Gap height={15} />
            <Input
              label="name"
              value={values.name}
              placeholder={'name'}
              onBlur={handleBlur('name')}
              onChangeText={handleChange('name')}
            />

            {touched.name && errors.name && (
              <Text style={styles.textError}>{errors.name}</Text>
            )}
            <Input
              label="Email"
              value={values.email}
              placeholder={'Email'}
              onBlur={handleBlur('email')}
              onChangeText={handleChange('email')}
            />

            {touched.email && errors.email && (
              <Text style={styles.textError}>{errors.email}</Text>
            )}

            <Gap height={15} />
            <Input
              label="Password"
              placeholder={'Password'}
              value={values.password}
              onBlur={handleBlur('password')}
              onChangeText={handleChange('password')}
              secureTextEntry
            />

            {touched.password && errors.password && (
              <Text style={styles.textError}>{errors.password}</Text>
            )}

            <Gap height={30} />
            <Button text="Register" onPress={handleSubmit} />
            <Gap height={30} />
            <Link
              title="hava a account? Login Now"
              size={16}
              align="center"
              onPress={() => navigation.navigate('Login')}
            />
          </ScrollView>
        </View>
      )}
    </Formik>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {flex: 1, paddingHorizontal: 20, backgroundColor: colors.white},
  title: {
    fontSize: 30,
    fontFamily: fonts.Poppins[800],
    color: colors.text.primary,
    textAlign: 'center',
    letterSpacing: 7,
  },
  register: {
    fontSize: 25,
    fontFamily: fonts.Poppins[600],
    color: colors.text.primary,
    textAlign: 'center',
  },
  textError: {
    color: 'red',
    fontSize: 12,
    marginTop: -15,
  },
});
