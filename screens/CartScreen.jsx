import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const CartScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          width: "95%",
          alignItems: "center",
          paddingVertical: 10,
          gap: 130,
        }}
        onPress={() => navigation.navigate("Menu")}
      >
        <Ionicons name="chevron-back-outline" size={24} color="black" />
        <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 24 }}>
          My Cart
        </Text>
      </TouchableOpacity>
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
