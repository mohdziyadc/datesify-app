import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Button from "../components/Button";
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";

const Products = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Datesify" />
      <Text style={styles.text}>Product Screen!</Text>
      <Button title="Hello" onPress={() => {}} customStyle={{}} textSize={20} />
    </SafeAreaView>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    flex: 1,
  },
});
