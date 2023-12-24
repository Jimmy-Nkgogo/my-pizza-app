import { StyleSheet, Text, View } from "react-native";
import React from "react";

const LineBreak = () => {
  return (
    <Text style={styles.lineBreakStyle}>
      ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    </Text>
  );
};

export default LineBreak;

const styles = StyleSheet.create({
  lineBreakStyle: {
    color: "#888",
    letterSpacing: -2,
  },
});
