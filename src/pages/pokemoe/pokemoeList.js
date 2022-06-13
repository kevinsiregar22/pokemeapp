//Pokemons.js
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

import axios from 'axios';
import {BASE_API, IMAGE_URL} from '../../helpers';
import {Gap, Input, Loading} from '../../components';
import {colors, fonts} from '../../utils';

const PokemoeList = props => {
  const [pokemoe, setPokemoe] = useState([]);
  const [Loadingg, setloadingg] = useState(false);
  const [searchfeild, setSearchfeild] = useState('');

  useEffect(() => {
    getPokemoeList();
  }, []);

  const getPokemoeList = async () => {
    try {
      setloadingg(true);
      const res = await axios.get(`${BASE_API}?limit=200`);
      setPokemoe(res.data.results);
      console.log(res.data.results, '<====results====>');
    } catch (error) {
      Alert.alert('errorr...');
    } finally {
      setloadingg(false);
    }
  };

  if (Loadingg) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <View style={{paddingHorizontal: 20}}>
        <Input
          placeholder={'Search your pokemoe'}
          onChangeText={value => setSearchfeild(value)}
          value={searchfeild}
        />
      </View>
      <Gap height={-120} />
      <ScrollView>
        <View style={styles.containerList}>
          {pokemoe
            .filter(pokemon =>
              pokemon.name.toLowerCase().includes(searchfeild.toLowerCase()),
            )
            .map((pokemon, index) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.1}
                  key={index}
                  style={styles.card}
                  onPress={() =>
                    props.navigation.navigate('PokemoeDetail', {
                      pokemon: pokemon.name,
                    })
                  }>
                  <Image
                    style={styles.image}
                    source={{
                      uri: `${IMAGE_URL}/${pokemon.name}.png`,
                    }}
                  />
                  <Text style={styles.text}>{pokemon.name}</Text>
                </TouchableOpacity>
              );
            })}
        </View>
      </ScrollView>
    </View>
  );
};

export default PokemoeList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.disable,
    fontFamily: fonts.Poppins['600'],
    fontSize: 20
  },
  containerList: {
    backgroundColor: colors.secondary,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 5,
  },

  card: {
    display: 'flex',
    alignItems: 'center',
    borderBottomWidth: 4,
    borderBottomColor: colors.border,
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: colors.cardGray,
    borderRadius: 10,
    width: 195,
  },

  image: {
    width: 180,
    height: 150,
  },
  text: {
    fontFamily: fonts.Poppins['400'],
    fontSize: 20
  },
});
