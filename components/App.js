import * as React from 'react';
import { AppRegistry } from 'react-native';
import { 
  MD3LightTheme,
  PaperProvider ,
  configureFonts
} from 'react-native-paper';
import { name as appName } from '../app.json';
import Counter from './Counter';

const fontConfig = {
  customVariant: {
    fontFamily: Platform.select({
      web: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
      ios: 'System',
      default: 'sans-serif',
    }),
    fontWeight: '400',
    letterSpacing: 0.5,
    lineHeight: 22,
    fontSize: 20,
  }
};

const theme = {
  ...MD3LightTheme,
  fonts: configureFonts({config: fontConfig}),
};

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <Counter />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);