import { StyleSheet, Text, View } from "react-native";
import React from "react";

const NewAddress = () => {
  const [addresses, setAddresses] = useState([
    {
      id: "",
      street: "14 Kremetart Str",
      city: "Phalaborwa",
      postalCode: 0,
    },
  ]);
  return (
    <View>
      <Text>NewAddress</Text>
    </View>
  );
};

export default NewAddress;

const styles = StyleSheet.create({});
