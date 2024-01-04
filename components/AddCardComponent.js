import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

const AddCardComponent = ({
  title,
  placeholder,
  value,
  setValue,
  maxLength,
  required,
  keyboardTypeValue
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "80%",
      }}
    >
      <Text>{title}</Text>
      <View
        style={{
          width: "60%",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={(text) => setValue(text)}
          maxLength={maxLength}
          required={required}
          style={{ width: '100%', height: 70 }}
          keyboardType={keyboardTypeValue}
        />
      </View>
    </View>
  );
};

export default AddCardComponent;

const styles = StyleSheet.create({});
