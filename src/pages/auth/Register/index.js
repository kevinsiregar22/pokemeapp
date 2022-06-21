import {View, Text, ScrollView, StyleSheet, Alert} from 'react-native';
import React from 'react';
import {Input, Gap, Link, Button} from '../../../components/atoms';
import {colors, fonts} from '../../../utils';
import {Formik} from 'formik';
import {validationSchema} from '../../../components/molecules/validationSchema';
import authProvider from '@react-native-firebase/auth';
import {configDb} from '../../../helpers';
const auth = authProvider();
const Register = props => {
  const submitRegister = async values => {
    try {
      const res = await auth.createUserWithEmailAndPassword(
        values.email,
        values.password,
      );
      let data = {
        displayName: values.name,
        email: res.user.email,
        PokemoeBag: [],
        _id: res.user.uid,
      };

      if ('email' in res.user && res.user.email) {
        await configDb.ref(`users/${res.user.uid}`).set(data);
        Alert.alert('User account created & signed in!');
        props.navigation.navigate('Pokemoes');
      }
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        Alert.alert('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        Alert.alert('That email address is invalid');
      }
    }
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{name: '', email: '', password: ''}}
      onSubmit={submitRegister}>
      {({values, handleChange, errors, touched, handleBlur, handleSubmit}) => (
        <View style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Gap height={40} />
            <Text style={styles.title}>Pokemoe App</Text>
            <Text style={styles.register}>Register</Text>
            <Gap height={15} />
            <Input
              label="Name"
              value={values.name}
              placeholder={'Name'}
              onBlur={handleBlur('name')}
              onChangeText={handleChange('name')}
            />

            {touched.name && errors.name && (
              <Text style={styles.textError}>{errors.name}</Text>
            )}
            <Gap height={15} />
            <Input
              label="Email"
              value={values.email}
              placeholder={'Example@gmail.com'}
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
              onPress={() => props.navigation.navigate('Login')}
            />
          </ScrollView>
        </View>
      )}
    </Formik>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.background.primary,
  },
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
