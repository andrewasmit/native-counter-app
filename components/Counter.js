import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Button, Alert } from "react-native";
import React, { useCallback } from "react";
import { AntDesign } from '@expo/vector-icons'; 


function Counter({ count, setCount }) {

  const increment = useCallback(()=>{
    setCount(count + 1);
  },[count])

  const decrement = useCallback(()=>{
    if(count >= 1){
      setCount(count - 1)
    } 
    else {
      Alert.alert("Count can't go below 0")
    }
  },[count])
  

  return (
    <View style={styles.container}>
      <AntDesign name="minuscircle" size={50} color="black" onPress={decrement} disabled={count > 0 ? false : true}/>
      <AntDesign name="pluscircle" size={50} color="black" onPress={increment} />
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

export default Counter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // display: flex,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});