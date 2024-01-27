import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Card } from "react-native-shadow-cards";

const ImageComponent = ({ title, image }) => {
  return (
    <Card style={styles.cardStyle}>
      <TouchableOpacity style={styles.btnStyle}>
        <Text style={styles.picText}>{title}</Text>
        <Image
          source={image}
          style={{ height: "100%", width: "100%", backgroundColor: "gray", borderRadius: 12 }}
        />
      </TouchableOpacity>
    </Card>
  );
};

ImageComponent.defaultProps = {
  title: "Pizza",
};

export default ImageComponent;

const styles = StyleSheet.create({
  picText: { fontWeight: "900", marginVertical: 10,fontSize: 18, letterSpacing: 1 },
  btnStyle: {
    width: "100%",
    borderRadius: 12,
    height: 120,
    alignItems: "center",
    backgroundColor: "Whitesmoke",
  },
  cardStyle: {
    paddingHorizontal: 5,
    width: "45%",
    height: 170,
    elevation: 5,
    borderRadius: 12,
  },
});
