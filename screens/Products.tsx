import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Button from "../components/Button";

const Products = () => {
  return (
    <View style={styles.container}>
      <Text>Product Screen!</Text>
      <Button title="Hello" onPress={() => {}} customStyle={{}} textSize={20} />
    </View>
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
});
