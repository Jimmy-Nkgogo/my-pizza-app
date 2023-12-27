import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BackButton from "../../components/BackButton";

const Favourites = () => {
  return (
    <View style={styles.container}>
      <BackButton title="Your Favourites" />
      <View style={styles.textView}>
        <Text
          style={{
            fontWeight: "bold",
            width: "90%",
            textAlign: "center",
            fontSize: 17,
          }}
        >
          Your don't have any favourites yet. Go to any menu item and tap the
          star in the top right coner to add favourites.
        </Text>
      </View>
    </View>
  );
};

export default Favourites;

const styles = StyleSheet.create({
  textView: {
    borderRadius: 12,
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
