import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import Products from "./screens/Products";
import { MedusaProvider } from "medusa-react";
import { QueryClient } from "@tanstack/react-query";
import { backendURL } from "./constants/url";
import ProductInfo from "./screens/ProductInfo";

export type RootStackParamList = {
  Products: undefined;
  ProductInfo: { id: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const queryClient = new QueryClient();

export default function App() {
  return (
    <MedusaProvider
      queryClientProviderProps={{ client: queryClient }}
      baseUrl={backendURL}
    >
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Products" component={Products} />
          <Stack.Screen name="ProductInfo" component={ProductInfo} />
        </Stack.Navigator>
      </NavigationContainer>
    </MedusaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
