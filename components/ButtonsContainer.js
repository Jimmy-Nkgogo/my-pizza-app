import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const ButtonsContainer = () => {
  return (
    <View style={styles.btnContainer}>
      <TouchableOpacity style={styles.btnLogOut}>
        <Text style={styles.btnLogOutText}>LOGOUT</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnNext}>
        <Text style={styles.btnEditText}>EDIT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonsContainer;

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 30,
    marginBottom: 50,
  },
  btnEditText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    letterSpacing: 2,
  },
  btnNext: {
    backgroundColor: "blue",
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    marginVertical: 20,
    flex: 1,
  },
  btnLogOutText: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    letterSpacing: 2,
  },
  btnLogOut: {
    borderWidth: 2,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    marginVertical: 20,
    flex: 1,
  },
});
