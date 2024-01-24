import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import LineBreak from "../../components/LineBreak";
import BackButton from "../../components/BackButton";
import globalBtnStyle from "../../globalBtnStyle";
import { AntDesign } from "@expo/vector-icons";

const SavedAddresses = () => {
  const [userAddress, setUserAddress] = useState([
    {
      key: 1,
      store: "Aucklard Park",
      address: "54 Richmond Ave",
      city: "Johannesburg",
    },
  ]);
  const [store, setStore] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");

  const handleAddNew = () => {
    const listItem = {
      key: Math.random() * 1000,
      store,
      address,
      city,
    };
  };

  return (
    <View style={styles.container}>
      <BackButton title="Saved Addresses" />
      <LineBreak />
      <View>
        {userAddress.map((item) => (
          <View key={item.key}>
            <Text>SELECTED STORE:</Text>
            <Text>{item.store}</Text>
            <Text>DELIVERING TO:</Text>
            <Text>{`${item.address}, ${item.store}`}</Text>
            <Text>{item.city}</Text>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                marginVertical: 18,
              }}
            >
              <AntDesign name="delete" size={24} color="black" />
              <Text>DELETE</Text>
            </TouchableOpacity>
            <LineBreak />
          </View>
        ))}
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          alignItems: "center",
        }}
      >
        <TouchableOpacity style={globalBtnStyle.btnBlueStyle}>
          <Text style={globalBtnStyle.btnTextStyle}>ADD ADDRESS</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SavedAddresses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
