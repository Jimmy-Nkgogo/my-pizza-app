import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BackButton from "../../components/BackButton";

const ForgotPassword = () => {
  return (
    <View style={styles.container}>
      <BackButton title="Reset Password"/>
      <View>
        <Text></Text>
      </View>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
});
