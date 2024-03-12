import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../App";

type ProductInfoRouteProp = RouteProp<RootStackParamList, "ProductInfo">;

type ProductInfoProps = {
  route: ProductInfoRouteProp;
};
const ProductInfo = ({ route }: ProductInfoProps) => {
  const { id } = route.params;
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>ProductInfo with id: {id}</Text>
    </View>
  );
};

export default ProductInfo;

const styles = StyleSheet.create({});
