import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Button from "../components/Button";
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { useProducts } from "medusa-react";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const { products, isLoading } = useProducts();
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Datesify" />
      <View style={{ flex: 1 }}>
        <FlatList
          data={products}
          renderItem={(item) => (
            <ProductCard key={item.item.id} product={item.item} />
          )}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{
            padding: 5,
          }}
        />
      </View>
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
});
