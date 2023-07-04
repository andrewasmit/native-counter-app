import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  
  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <View style={styles.container}>
      <Text>This is Andrew's simple Counter-App</Text>
      <Text>Count: {count}</Text>
      <Button
        title="Increase the count" 
        onPress={increment} 
        icon="plus-thick"
        />
      <Button
        title="Decrease the count"
        disabled={count > 0 ? false : true}
        onPress={decrement}
      />
      <StatusBar style="auto" />
    </View>
  );
}

export default Counter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});