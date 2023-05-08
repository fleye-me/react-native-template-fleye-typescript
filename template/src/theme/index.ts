import {extendTheme} from 'native-base';

import {colors} from './colors';
import {components} from './components';
import {fontConfig, fonts} from './fonts';

export const theme = extendTheme({
  colors,
  components,
  fontConfig,
  fonts,
});

type CustomThemeType = typeof theme;

declare module 'native-base' {
  interface ICustomTheme extends CustomThemeType {}
}
