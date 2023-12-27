import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import BackButton from "../components/BackButton";

const CartScreen = () => {
  return (
    <View style={styles.container}>
      <BackButton title="My Cart" />
      <View style={styles.textView}>
        <Text
          style={{
            color: "#4fd64f",
            fontWeight: "900",
            fontSize: 30,
            width: "60%",
            textAlign: "center",
          }}
        >
          YOUR CART IS EMPTY
        </Text>
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  textView: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "lightgray",
    justifyContent: "center",
    alignItems: "center",
    minHeight: 80,
    width: "90%",
    marginVertical: 10,
    paddingVertical: 8,
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
});
