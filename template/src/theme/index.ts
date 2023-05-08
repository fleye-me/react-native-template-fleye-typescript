import {extendTheme} from 'native-base';

import {colors} from './colors';
import {components} from './components';
import {fontConfig, fonts} from './fonts';

export const customTheme = extendTheme({
  colors,
  components,
  fontConfig,
  fonts,
});

type CustomThemeType = typeof customTheme;

declare module 'native-base' {
  interface ICustomTheme extends CustomThemeType {}
}
