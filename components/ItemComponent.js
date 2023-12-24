import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const ItemComponent = ({ title, handleNavigation, userDetails, navigateTo }) => {
  return (
    <TouchableOpacity
      onPress={() =>
        handleNavigation(navigateTo, { userDetails, handleNavigation })
      }
      style={{ marginVertical: 12 }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold", color: "#333" }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default ItemComponent;

const styles = StyleSheet.create({});
