import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {LeftArrow} from '../../../assets/icons';
import {useNavigation} from '@react-navigation/native';

const GoBack = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Pokemoes')}>
        <Image source={LeftArrow} style={styles.icons} resizeMode="cover" />
      </TouchableOpacity>
    </View>
  );
};

export default GoBack;

const styles = StyleSheet.create({
  icons: {
    height: 30,
    width: 30,
    left: 10,
  },
});
