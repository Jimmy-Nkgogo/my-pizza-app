import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const StoreButton = ({ title }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        paddingVertical: 10,
        backgroundColor: "whitesmoke",
        justifyContent: "space-around",
        gap: 100,
      }}
      onPress={() => navigation.navigate("StoresScreen")}
    >
      <View>
        <Text style={{ letterSpacing: 2, textAlign: "center", color: "#444" }}>
          SELECTED STORE
        </Text>
        <Text style={{ textAlign: "left", fontWeight: "bold", fontSize: 24 }}>
          {title}
        </Text>
      </View>
      <MaterialIcons name="navigate-next" size={34} color="black" />
    </TouchableOpacity>
  );
};

StoreButton.defaultProps = {
  title: "Back",
};

export default StoreButton;

const styles = StyleSheet.create({});
