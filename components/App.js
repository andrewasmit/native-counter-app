import React, { useState, useCallback } from 'react';
import { Text, View, StyleSheet, AppRegistry } from 'react-native';
// import { PaperProvider } from 'react-native-paper';
import { name as appName } from '../app.json';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Counter from './Counter';

SplashScreen.preventAutoHideAsync();

export default function Main() {
  const [count, setCount] = useState(0);
  const [fontsLoaded] = useFonts({
    'WinterSong' : require('../assets/fonts/WinterSong-owRGB.ttf')
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
    <View onLayout={onLayoutRootView}>
      <Text style={{fontFamily: 'WinterSong', fontSize: 45 }}>This is Andrew's simple Counter-App</Text>
      <Text style={{fontFamily: 'WinterSong', fontSize: 30 }}>Count: {count}</Text>
      <Counter count={count} setCount={setCount}/>
    </View>
  );
}

AppRegistry.registerComponent(appName, () => Main);