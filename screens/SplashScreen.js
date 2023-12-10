import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const SplashScreen = ({ navigation }) => {
  const image = require("../assets/download.jpeg");
  
  setTimeout(() => {
    navigation.navigate('BottomTabs')
  }, 3000);
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.imageStyle} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  imageStyle: {
    borderRadius: 50,
  },
});
