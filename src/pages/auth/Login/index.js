import {View, Text, ScrollView, StyleSheet, Alert} from 'react-native';
import React from 'react';
import {Input, Gap, Link, Button} from '../../../components/atoms';
import {colors, fonts} from '../../../utils';
import {Formik} from 'formik';
import {validationSchema} from '../../../components/molecules/validationSchema';
import authProvider from '@react-native-firebase/auth';
const auth = authProvider();

const Login = props => {
  const submitLogin = async values => {
    try {
      const res = await auth.signInWithEmailAndPassword(
        values.email,
        values.password,
      );
      if (res) {
        props.navigation.navigate('PokemoeList');
      }
    } catch (error) {
      if (error.code === 'auth/wrong-password') {
        Alert.alert('The password is invalid');
      }

      if (error.code === 'auth/invalid-email') {
        Alert.alert('The email address is badly formatted');
      }
    }
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{email: '', password: ''}}
      onSubmit={submitLogin}>
      {({values, handleChange, errors, touched, handleBlur, handleSubmit}) => (
        <View style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Gap height={40} />
            <Text style={styles.title}>Pokemoe App</Text>
            <Text style={styles.register}>Login</Text>

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
            <Button text="Login" onPress={handleSubmit} />
            <Gap height={30} />
            <Link
              title="Don't hava a account? Register Now"
              size={16}
              align="center"
              onPress={() => props.navigation.navigate('Register')}
            />
          </ScrollView>
        </View>
      )}
    </Formik>
  );
};

export default Login;

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
