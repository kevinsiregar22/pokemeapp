import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet, Alert} from 'react-native';
import {Gap, Loading} from '../../components';
import {BASE_API, IMAGE_URL} from '../../helpers';
import {colors, fonts} from '../../utils';

const PokemoeDetail = ({route}) => {
  const id = route.params.pokemon;
  const [detailsPokemoe, setDetailsPokemoe] = useState([]);

  useEffect(() => {
    getPokemoeDetail();
  }, []);

  const getPokemoeDetail = async () => {
    try {
      const res = await axios.get(`${BASE_API}/${id}`);
      setDetailsPokemoe(res.data);
      console.log('<====results data====>', res.data);
    } catch (error) {
      Alert.alert('errorr...');
      console.log(error);
    }
  };

  return detailsPokemoe.name ? (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: `${IMAGE_URL}/${detailsPokemoe.name}.png`,
        }}
      />
      <Text style={styles.name}>{detailsPokemoe.name}</Text>
      <View style={styles.container2}>
        <Text style={styles.text}>Height: {detailsPokemoe.height}</Text>
        <Gap width={10} />
        <Text style={styles.text}>Weight: {detailsPokemoe.weight}</Text>
      </View>
      <Gap height={4} />
      <Text style={styles.title}>Ability</Text>
      <View style={styles.container2}>
        <Text style={styles.text}>
          {detailsPokemoe.abilities[0].ability.name}
        </Text>
      </View>
      <Gap height={4} />
      <Text style={styles.title}>Type</Text>
      <View style={styles.container2}>
        <Text style={styles.text}>{detailsPokemoe.types[0].type.name}</Text>
      </View>
      <Gap height={4} />
      <Text style={styles.title}>Moves</Text>
      <View style={styles.container2}>
        <Text style={styles.text}>{detailsPokemoe.moves[0].move.name}</Text>
      </View>
    </View>
  ) : (
    <Loading />
  );
};

export default PokemoeDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.secondary,
  },
  image: {
    width: 400,
    height: 250,
    borderRadius: 10,
    marginVertical: 20,
  },
  name: {
    top: -30,
    fontFamily: fonts.Poppins['600'],
    fontSize: 30,
    color: colors.text.primary,
  },
  container2: {
    top: -17,
    width: 400,
    height: 60,
    alignContent: 'center',
    backgroundColor: colors.cardLight,
    borderRadius: 10,
    flexDirection: 'row',
  },
  title: {
    fontFamily: fonts.Poppins['800'],
    fontSize: 22,
    color: colors.text.primary,
    right: 160,
    top: -14,
  },
  text: {
    fontFamily: fonts.Poppins['600'],
    fontSize: 18,
    color: colors.text.primary,
    alignItems: 'flex-start',
    left: 10,
  },
});
