import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BackButton from "../../components/BackButton";

const SavedCards = () => {
  return (
    <View style={styles.container}>
      <BackButton title="Payment Options" />
      <View style={{ backgroundColor: "red", flex: 1, width: "95%" }}>
        <Text>SavedCards</Text>
      </View>
    </View>
  );
};

export default SavedCards;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
});
