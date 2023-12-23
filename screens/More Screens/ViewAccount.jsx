import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const ViewAccount = ({ navigation, route }) => {
  const user = route.params.user;
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Ionicons name="chevron-back-outline" size={28} color="gray" />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "25%",
          }}
        >
          <FontAwesome5 name="user-circle" size={48} color="black" />
          <Text style={{ fontSize: 23, fontWeight: "bold" }}>{user}</Text>
        </View>
      </View>
    </View>
  );
};

export default ViewAccount;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    flex: 1,
  },
});
