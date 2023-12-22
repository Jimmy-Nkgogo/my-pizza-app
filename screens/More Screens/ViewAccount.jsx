import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ViewAccount = ({ navigation, route }) => {
  const user = route.params.user;
  return (
    <View>
      <Text>{user} </Text>
    </View>
  );
};

export default ViewAccount;

const styles = StyleSheet.create({});
