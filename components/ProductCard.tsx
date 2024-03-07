import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ProductPreviewType } from "../types/global";
import Button from "./Button";
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";

type ProductCardProps = {
  product: PricedProduct;
};
const ProductCard = ({ product }: ProductCardProps) => {
  const screenWidth = Math.round(Dimensions.get("window").width);
  const cardWidth = screenWidth / 2 - 20;

  return (
    <View key={product.id} style={[styles.container, { width: cardWidth }]}>
      <Image
        source={{
          uri: product.thumbnail ? product.thumbnail : "",
        }}
        style={styles.image}
      />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.category}>{product.handle}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>
          ${product.variants[0].prices[0].amount / 100}
        </Text>
        <Button title="BUY" textSize={16} onPress={() => {}} customStyle={{}} />
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    shadowColor: "#000",
    borderRadius: 10,
    marginBottom: 8,
    marginHorizontal: 6,
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6.84,
    elevation: 5,
    padding: 10,
    backgroundColor: "#fff",
  },
  image: {
    height: 150,
    marginBottom: 2,
    borderRadius: 7,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 3,
  },
  category: {
    fontSize: 14,
    color: "#828282",
    marginTop: 3,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
