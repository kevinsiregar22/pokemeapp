const mainColors = {
  green1: '#0BCAD4',
  green2: '#EDFCFD',
  green3: '#D5E4E8',
  green4: '#BBD7D6',
  green5: '#F4FBFB',
  dark1: '#112340',
  dark2: '#495A75',
  dark3: '#8092AF',
  grey1: '#7D8797',
  grey2: '#E9E9E9',
  grey3: '#EDEEF0',
  grey4: '#B1B7C2',
  blue1: '#0066CB',
  black1: '#000000',
  black2: 'rgba(0, 0, 0, 0.5)',
  red1: '#E06379',
};

export const colors = {
  primary: mainColors.green1,
  secondary: mainColors.dark1,
  white: 'white',
  black: 'black',
  disable: mainColors.grey3,
  background: {
    primary: mainColors.green3,
  },
  card: {
    primary: mainColors.green3,
    secondary: mainColors.green4,
    tertinany: mainColors.green5,
  },
  text: {
    primary: mainColors.dark1,
    secondary: mainColors.grey1,
    menuInactive: mainColors.dark2,
    menuActive: mainColors.green1,
    subTitle: mainColors.dark3,
  },
  button: {
    primary: {
      background: mainColors.green1,
      text: 'white',
    },
    secondary: {
      background: 'white',
      text: mainColors.dark1,
    },
    disable: {
      background: mainColors.grey3,
      text: mainColors.grey4,
    },
  },
  border: mainColors.green1,
  cardLight: mainColors.grey4,
  cardGray: mainColors.grey2,
  loadingBackground: mainColors.green4,
  error: mainColors.red1,
};
