//Pokemons.js
import React, {useState, useEffect, useCallback} from 'react';
import {
  Text,
  SafeAreaView,
  FlatList,
  Image,
  StyleSheet,
  View,
} from 'react-native';

import axios from 'axios';
import {BASE_API, IMAGE_URL} from '../../helpers';
import {colors, fonts} from '../../utils';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {Button, Loading} from '../../components';
const Pokemoes = () => {
  const [pokemoe, setPokemoe] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    getPokemoeList();
  }, []);

  const getPokemoeList = useCallback(async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${BASE_API}?limit=20`);
      setPokemoe(res.data.results);
      console.log(res.data, '<====data====>');
      setLoading(false);
    } catch (error) {
      console.log('er');
    } finally {
      setLoading(false);
    }
  }, [getPokemoeList]);

  if (loading) {
    return <Loading />;
  }

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
    <SafeAreaView style={styles.container2}>
      <Text style={styles.title}>Pokemoes</Text>

      <View style={styles.containerButton}>
        <Button
          text={'goto pokeBag'}
          onPress={() => navigation.navigate('PokemoeBag')}
        />
      </View>
      <View style={styles.containerList}>
        <FlatList
          data={pokemoe}
          renderItem={renderItem}
          numColumns={2}
          keyExtractor={item => item.name}
        />
      </View>
    </SafeAreaView>
  );
};

export default Pokemoes;

const styles = StyleSheet.create({
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
  container2: {
    backgroundColor: colors.card.secondary,
    alignItems: 'center',
  },
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 15,
  },
  title: {
    fontFamily: fonts.Poppins['800'],
    fontSize: 35,
  },

  name: {
    fontFamily: fonts.Poppins['600'],
    fontSize: 20,
    textAlign: 'center',
  },
  image: {
    width: 190,
    height: 220,
    borderRadius: 15,
  },
});
