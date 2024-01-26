import { StyleSheet, Text, View } from "react-native";
import React from "react";
import StoreButton from "../components/StoreButton";

const MenuScreen = () => {
  return (
    <View style={styles.container}>
      <StoreButton title="Phalaborwa" />
      <Text>Menu Screen</Text>
    </View>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
  },
});
