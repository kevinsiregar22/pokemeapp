import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import axios from 'axios';

const PokemoeList = () => {
  const getPokemonList = async nextPage => {
    try {
      const results = await axios.get(
        'https://pokeapi.co/api/v2/ability/?limit=20&offset=20',
      );
      console.log(results);
      //   setPokemon(results.data.results);
    } catch (error) {
      return <Text>Data Tidak Ada</Text>;
    }
  };
  useEffect(() => {
    getPokemonList();
  }, []);
  return (
    <View>
      <Text>PokemoeList</Text>
    </View>
  );
};

export default PokemoeList;
