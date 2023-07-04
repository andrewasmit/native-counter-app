import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [count, setCount] = useState(0)

  return (
    <View style={styles.container}>
      <Text>This is Andrew's simple Counter-App</Text>
      <Text>The Count: {count}</Text>
      <Button
        title="Increase the count"
        onPress={() => setCount(count+1)}
      />
      <Button
        title="Decrease the count"
        onPress={() => setCount(count-1)}
      />
      <StatusBar style="auto" />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
