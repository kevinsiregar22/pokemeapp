import {firebase} from '@react-native-firebase/database';

export const configDb = firebase
  .app()
  .database('https://pokemoeapp-default-rtdb.firebaseio.com');
