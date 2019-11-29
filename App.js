import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SignIn from "./containers/SignIn";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js !</Text>
      <SignIn />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
