import axios from 'axios';
import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, Image, StyleSheet, Alert} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Button, Gap, Loading} from '../../components';
import GoBack from '../../components/atoms/goBack';
import {BASE_API, configDb, IMAGE_URLL} from '../../helpers';
import {colors, fonts} from '../../utils';

const PokemoeDetail = ({route}) => {
  const pokemon = route.params.pokemon;
  const [detailsPokemoe, setDetailsPokemoe] = useState([]);

  useEffect(() => {
    getPokemoeDetail();
  }, []);

  const getPokemoeDetail = useCallback(async () => {
    try {
      const res = await axios.get(`${BASE_API}/${pokemon}`);
      console.log('name pokemon', pokemon);
      setDetailsPokemoe(res.data);
      console.log('<====results data====>', res.data);
    } catch (error) {
      Alert.alert('errorr...');
      console.log(error);
    }
  }, [getPokemoeDetail]);

  const catchPokemoe = () => {
    try {
      configDb.ref('users/pokemoe').push({name: detailsPokemoe.name});
      Alert.alert('Succes catch Pokemoe');
    } catch (error) {
      Alert.alert('Failed Catch Pokemoe');
    }
  };

  return detailsPokemoe.name ? (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <GoBack />
        <Text style={styles.text}>Pokemon Detail</Text>
        <View>
          <Button text={'Catch'} onPress={() => catchPokemoe()} />
        </View>
      </View>

      <View style={styles.containerImageText}>
        <Image
          style={styles.image}
          source={{
            uri: `${IMAGE_URLL}/${detailsPokemoe.id}.png`,
          }}
          resizeMode="cover"
        />
        <Text style={styles.name}>{detailsPokemoe.name}</Text>
        <Text style={styles.name}>{detailsPokemoe.id}</Text>
      </View>
      <View>
        <Text style={styles.title}>Profile</Text>
      </View>
      <View style={styles.containerCardProfile}>
        <View style={styles.containerCard}>
          <Text style={styles.text}>
            Spesies: {detailsPokemoe.species.name}
          </Text>
          <Text style={styles.text}>Height: {detailsPokemoe.height}</Text>
          <Text style={styles.text}>Weight: {detailsPokemoe.weight}</Text>
        </View>

        <View style={styles.containerCard}>
          <Text style={styles.title}>Ability</Text>

          {detailsPokemoe.abilities.map(abilities => {
            // eslint-disable-next-line react/jsx-key
            return <Text style={styles.text}>{abilities.ability.name}</Text>;
          })}
          {/* <Text style={styles.text}></Text> */}
        </View>
        <View style={styles.containerCard}>
          <Text style={styles.title}>Type</Text>
          {detailsPokemoe.types.map(type => {
            // eslint-disable-next-line react/jsx-key
            return <Text style={styles.text}>{type.type.name}</Text>;
          })}
          {/* <Text style={styles.text}></Text> */}
        </View>
        <Gap height={4} />
        <View style={styles.containerCard}>
          <Text style={styles.title}>Moves</Text>
          {detailsPokemoe.moves.map(moves => {
            // eslint-disable-next-line react/jsx-key
            return <Text style={styles.text}>{moves.move.name}</Text>;
          })}
        </View>
      </View>
    </ScrollView>
  ) : (
    <Loading />
  );
};

export default PokemoeDetail;

const styles = StyleSheet.create({
  container: {
    margin: 5,
    backgroundColor: colors.card.primary,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: colors.card.primary,
  },
  name: {
    fontFamily: fonts.Poppins['600'],
    fontSize: 30,
    color: colors.black,
    textAlign: 'center',
  },
  containerImageText: {
    backgroundColor: colors.card.secondary,
    borderRadius: 20,
    margin: 10,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  image: {
    top: 20,
    width: 400,
    height: 400,
    backgroundColor: colors.card.secondary,
  },
  containerCardProfile: {
    flexWrap: 'wrap',
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 5,
  },
  containerCard: {
    width: 190,
    height: 120,
    margin: 5,
    backgroundColor: colors.cardLight,
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  title: {
    fontFamily: fonts.Poppins['800'],
    fontSize: 18,
    textAlign: 'center',
    color: colors.text.primary,
  },
  text: {
    fontFamily: fonts.Poppins['600'],
    fontSize: 18,
    color: colors.text.primary,
    left: 10,
  },
});
