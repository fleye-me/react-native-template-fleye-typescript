import {extendTheme} from 'native-base';

export const {fontConfig, fonts, lineHeights} = extendTheme({
  fonts: {
    heading: 'Roboto-Regular',
    body: 'Roboto-Regular',
    mono: 'Roboto-Regular',
  },
  fontConfig: {
    Roboto: {
      100: {
        normal: 'Roboto-Thin',
      },
      300: {
        normal: 'Roboto-Light',
      },
      400: {
        normal: 'Roboto-Regular',
      },
      500: {
        normal: 'Roboto-Medium',
      },
      700: {
        normal: 'Roboto-Bold',
      },
      900: {
        normal: 'Roboto-Black',
      },
    },
  },
});
