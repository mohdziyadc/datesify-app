import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

type ButtonProps = {
  title: string;
  onPress: () => void;
  customStyle: any;
  textSize: number;
};

const Button = ({ title, onPress, customStyle, textSize }: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, customStyle]}>
        <Text style={[styles.text, { fontSize: textSize ? textSize : 3.5 }]}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#C37AFF",
    paddingHorizontal: 25,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 60,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
  },
});
