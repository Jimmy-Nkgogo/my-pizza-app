import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";

const ImageComponent = ({ title,image }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "red",
        width: "40%",
        borderRadius: 12,
        height: 120,
        alignItems: "center",
      }}
    >
      <Text style={styles.picText}>{title}</Text>
      <Image
        source={image}
        style={{ height: "100%", width: "100%", backgroundColor: "red" }}
      />
    </TouchableOpacity>
  );
};

ImageComponent.defaultProps = {
    title: "Pizza",
}

export default ImageComponent;

const styles = StyleSheet.create({});
