import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
  KeyboardAvoidingView
} from "react-native";
import React, { useState } from "react";
import LineBreak from "../../components/LineBreak";
import BackButton from "../../components/BackButton";
import globalBtnStyle from "../../globalBtnStyle";
import { AntDesign } from "@expo/vector-icons";
import AddCardComponent from "../../components/AddCardComponent";

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
    setUserAddress([...userAddress, listItem]);
  };

  const handleDelete = (id) => {
    const listItem = userAddress.filter((item) => item.key !== id)
    console.log(listItem)
    setUserAddress(listItem)
  }

  return (
    <View style={styles.container}>
      <BackButton title="Saved Addresses" />
      <LineBreak />
      <>
        <View>
          {userAddress.map((item) => (
            <View key={item.key}>
              <Text style={styles.blueText}>SELECTED STORE:</Text>
              <Text>{item.store}</Text>
              <Text style={styles.blueText}>DELIVERING TO:</Text>
              <Text>{`${item.address}, ${item.store}`}</Text>
              <Text>{item.city}</Text>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                  marginVertical: 18,
                }}
                onPress={() => handleDelete(item.key)}
              >
                <AntDesign name="delete" size={24} color="black" />
                <Text
                  style={{ fontWeight: "bold", letterSpacing: 2, fontSize: 18 }}
                >
                  DELETE
                </Text>
              </TouchableOpacity>
              <LineBreak />
            </View>
          ))}
        </View>

        <KeyboardAvoidingView style={{ alignItems: "center", width: "100%" }}>
          <AddCardComponent
            title="Nearby Store"
            placeholder="Store"
            value={store}
            setValue={setStore}
          />
          <AddCardComponent
            title="Address"
            placeholder="Address"
            value={address}
            setValue={setAddress}
          />
          <AddCardComponent
            title="City"
            placeholder="City"
            value={city}
            setValue={setCity}
          />
        </KeyboardAvoidingView>
      </>
      <View style={styles.bottomBtn}>
        <TouchableOpacity
          style={globalBtnStyle.btnBlueStyle}
          onPress={handleAddNew}
        >
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
  blueText: {
    letterSpacing: 2,
    color: "blue",
    marginVertical: 5,
  },
  bottomBtn: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    alignItems: "center",
  },
});
