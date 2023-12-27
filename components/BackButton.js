import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const BackButton = ({ title }) => {
  const navigation = useNavigation();
  return (
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
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({});
