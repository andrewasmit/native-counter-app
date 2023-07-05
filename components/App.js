import React, { useState, useCallback } from 'react';
import { Text, View, StyleSheet, AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { name as appName } from '../app.json';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Counter from './Counter';

SplashScreen.preventAutoHideAsync();

export default function Main() {
  const [count, setCount] = useState(0);
  const [fontsLoaded] = useFonts({
    'WinterSong' : require('../assets/fonts/WinterSong-owRGB.ttf'),
    'Ysabeau' : require('../assets/fonts/YsabeauSC-VariableFont_wght.ttf')
  });

  const onLayoutRootView = useCallback(async ()=>{
    if (fontsLoaded){
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded){
    return null;
  }

  return (
    <PaperProvider>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <Text style={{fontFamily: 'WinterSong', fontSize: 45 }}>This is Andrew's Counter-App</Text>
        <Text style={{fontFamily: 'Ysabeau', fontSize: 30 }}>Count: {count}</Text>
      </View>
      <Counter count={count} setCount={setCount}/>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

AppRegistry.registerComponent(appName, () => Main);