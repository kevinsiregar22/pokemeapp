import {View, Text, ScrollView, StyleSheet, Alert} from 'react-native';
import React from 'react';
import {Input, Gap, Link, Button} from '../../../components/atoms';
import {colors, fonts} from '../../../utils';
import {Formik} from 'formik';
import {validationSchema} from '../../../components/molecules/validationSchema';

const Login = props => {
  const handleSubmitButton = values => {
    if (values.email && values.password) {
      Alert.alert('Register Success');
      props.navigation.navigate('PokemoeList');
    }
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{email: '', password: ''}}
      onSubmit={handleSubmitButton}>
      {({values, handleChange, errors, touched, handleBlur, handleSubmit}) => (
        <View style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Gap height={40} />
            <Text style={styles.title}>Pokemoe App</Text>
            <Text style={styles.login}>Login</Text>
            <Gap height={15} />

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
            <Button text="Login" onPress={handleSubmit} />
            <Gap height={30} />
            <Link
              title="hava a account? Login Now"
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
  login: {
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
