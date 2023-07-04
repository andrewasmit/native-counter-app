import * as React from 'react';
import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { name as appName } from '../app.json';
import Counter from './Counter';

export default function Main() {
  return (
    <PaperProvider>
      <Counter />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);