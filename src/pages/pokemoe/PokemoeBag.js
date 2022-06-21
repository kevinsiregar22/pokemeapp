import {
  Text,
  FlatList,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors, fonts} from '../../utils';
import {configDb, IMAGE_URL} from '../../helpers';
import {useNavigation} from '@react-navigation/native';

const PokemoeBag = () => {
  const [pokemoeBag, setPokemoeBag] = useState([]);
  const navigation = useNavigation();

  const getAllPokemonData = useCallback(async () => {
    try {
      await configDb
        .ref('users/pokemoe/')
        .once('value')
        .then(snapshot => {
          const data = Object.values(snapshot.val());
          setPokemoeBag(data);
        });
    } catch (error) {
      Alert.alert('error');
    }
  }, [getAllPokemonData]);

  useEffect(() => {
    getAllPokemonData();
  }, [getAllPokemonData]);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() =>
          navigation.navigate('PokemoeDetail', {
            pokemon: item.name,
          })
        }>
        <Image
          style={styles.image}
          source={{
            uri: `${IMAGE_URL}/${item.name}.png`,
          }}
          resizeMode="stretch"
        />
        <Text style={styles.name}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.containerAll}>
      <Text style={styles.name}>PokeBag Catch</Text>
      <FlatList
        data={pokemoeBag}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={item => item.name}
      />
    </SafeAreaView>
  );
};

export default PokemoeBag;

const styles = StyleSheet.create({
  containerAll: {
    backgroundColor: colors.card.secondary,
    flex: 1,
  },
  container: {
    backgroundColor: colors.card.primary,
    margin: 10,
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOffset: {
      width: 3,
      height: 9,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  name: {
    fontFamily: fonts.Poppins['800'],
    fontSize: 20,
    paddingTop: 10,
    textAlign: 'center',
  },
  image: {
    width: 190,
    height: 220,
    borderRadius: 15,
  },
});
