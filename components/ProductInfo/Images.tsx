import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

type ImagesProp = {
  images: any[];
};
const Images = ({ images }: ImagesProp) => {
  const [activeImage, setActiveImage] = useState("");

  useEffect(() => {
    setActiveImage(images[0].url);
  });
  return (
    <View>
      <Image source={{ uri: activeImage }} style={styles.image} />
      <View style={styles.previewContainer}>
        {images.map((image, idx) => (
          <TouchableOpacity
            key={idx}
            onPress={() => {
              setActiveImage(image.url);
            }}
          >
            <Image
              source={{ uri: image.url }}
              style={[
                styles.previewImage,
                {
                  borderWidth: activeImage === image.url ? 3 : 0,
                },
              ]}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Images;

const styles = StyleSheet.create({
  image: {
    width: 700,
    height: 700,
  },
  previewContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: -5,
  },
  previewImage: {
    width: 150,
    height: 150,
    marginRight: 5,
    borderColor: "#C37AFF",
    borderRadius: 10,
  },
});
