import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

const AddCardComponent = ({
  title,
  placeholder,
  value,
  setValue,
  maxLength,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "90%",
      }}
    >
      <Text>{title}</Text>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={(text) => setValue(text)}
        maxLength={maxLength}
      />
    </View>
  );
};

export default AddCardComponent;

const styles = StyleSheet.create({});
