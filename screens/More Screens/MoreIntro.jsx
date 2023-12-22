import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

const MoreIntro = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          width: "90%",
          height: 80,
          gap: 10,
          paddingLeft: 12,
          marginBottom: 5,
        }}
      >
        <FontAwesome5 name="user-circle" size={50} color="black" />
        <Text style={{ fontSize: 28, fontWeight: "900", letterSpacing: 1.5 }}>
          Jimmy Nkgogo
        </Text>
      </View>
      <Text style={styles.lineBreakStyle}>
        -------------------------------------------------------------------------------------------------
      </Text>
    </View>
  );
};

export default MoreIntro;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 5,
  },
  lineBreakStyle: {
    color: "#888",
    letterSpacing: -2,
    fontWeight: "bold",
  },
});
