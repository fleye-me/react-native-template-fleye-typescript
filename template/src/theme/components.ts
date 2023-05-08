import {extendTheme} from 'native-base';

export const {components} = extendTheme({
  components: {
    Text: {
      baseStyle: {
        fontFamily: 'Roboto-Regular',
      },
      sizes: {
        '2xs': {fontSize: 10},
        xs: {fontSize: 12},
        sm: {fontSize: 14},
        md: {fontSize: 16},
        lg: {fontSize: 18},
        xl: {fontSize: 20},
        '2xl': {fontSize: 24},
        '3xl': {fontSize: 30},
        '4xl': {fontSize: 36},
        '5xl': {fontSize: 48},
        '6xl': {fontSize: 60},
        '7xl': {fontSize: 72},
        '8xl': {fontSize: 96},
        '9xl': {fontSize: 128},
      },
    },
    Button: {
      variants: {
        primary: () => ({
          bg: 'primary.400',
          borderRadius: '12px',
          _text: {
            color: 'singletons.white',
          },
        }),
        outline: () => ({
          bg: 'transparent',
          borderRadius: '12px',
          borderColor: 'primary.100',
          _text: {
            color: 'primary.400',
          },
          _pressed: {bg: 'transparent', opacity: 0.6},
        }),
        ghost: () => ({
          _text: {
            color: 'singletons.black',
          },
          _pressed: {bg: 'transparent', opacity: 0.6},
        }),
        underline: () => ({
          bg: 'transparent',
          _text: {
            color: 'singletons.black',
            textDecorationLine: 'underline',
          },
          _pressed: {bg: 'transparent', opacity: 0.6},
        }),
        link: () => ({
          _text: {
            textDecorationLine: 'underline',
          },
        }),
      },
      defaultProps: {
        minH: '44px',
        w: '100%',
        _text: {
          fontFamily: 'Roboto-Medium',
        },
        variant: 'primary',
        _icon: {
          color: 'singletons.black',
        },
        _disabled: {
          bg: 'singletons.black',
        },
      },
    },
    KeyboardAvoidingView: {
      defaultProps: {
        behavior: 'padding',
        _android: {
          behavior: 'height',
        },
      },
    },
  },
});
