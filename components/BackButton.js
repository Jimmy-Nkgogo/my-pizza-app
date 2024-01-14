import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const BackButton = ({ title }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        width: "90%",
        alignItems: "center",
        paddingVertical: 10,
      }}
      onPress={() => navigation.goBack()}
    >
      <Ionicons name="chevron-back-outline" size={24} color="black" />

      <View
        style={{
          width: "90%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 24 }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

BackButton.defaultProps = {
  title: "Back",
};

export default BackButton;

const styles = StyleSheet.create({});
