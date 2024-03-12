import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../App";
import { useProduct } from "medusa-react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type ProductInfoRouteProp = RouteProp<RootStackParamList, "ProductInfo">;

type ProductInfoProps = {
  route: ProductInfoRouteProp;
};
type ParamList = NativeStackNavigationProp<RootStackParamList, "ProductInfo">;
const ProductInfo = ({ route }: ProductInfoProps) => {
  const { id } = route.params;

  const { product, isLoading } = useProduct(id);
  const { goBack } = useNavigation<ParamList>();
  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size={"large"} color={"violet"} />
        </View>
      ) : (
        <View>
          <TouchableOpacity
            onPress={() => {
              goBack();
            }}
          >
            <Feather name="chevron-left" size={40} color="black" />
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

export default ProductInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
