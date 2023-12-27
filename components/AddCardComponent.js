import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

const AddCardComponent = ({ title, value, setValue }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Text>{title}</Text>
      <TextInput
        placeholder="John Doe"
        value={value}
        onChangeText={(text) => setValue(text)}
      />
    </View>
  );
};

export default AddCardComponent;

const styles = StyleSheet.create({});
