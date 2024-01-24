import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  ActivityIndicator,
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
  const [loading, setLoading] = useState(true);
  const [toggleForm, setToggleForm] = useState(true);

  const handleDelete = (id) => {
    const listItem = userAddress.filter((item) => item.key !== id);
    console.log(listItem);
    setUserAddress(listItem);
  };

  const handleToggleForm = () => {
    setToggleForm(!toggleForm);
  };

  const handleLoading = () => {
    setLoading(!loading);
  };

  const handleAddNew = () => {
    setTimeout(() => {}, 3000);
    const listItem = {
      key: Math.random() * 1000,
      store,
      address,
      city,
    };
    setUserAddress([...userAddress, listItem]);

    handleLoading();
    setTimeout(() => {
      handleToggleForm();
      setStore("");
      setAddress("");
      setCity("");
    }, 3000);
  };

  return (
    <View style={styles.container}>
      <BackButton title="Saved Addresses" />
      <LineBreak />
      <ScrollView>
        {toggleForm ? (
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
                    style={{
                      fontWeight: "bold",
                      letterSpacing: 2,
                      fontSize: 18,
                    }}
                  >
                    DELETE
                  </Text>
                </TouchableOpacity>
                <LineBreak />
                <View style={{ marginBottom: 20 }}></View>
              </View>
            ))}
          </View>
        ) : (
          <View style={{ alignItems: "center", width: "100%" }}>
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
            <TouchableOpacity style={styles.confirmBtn} onPress={handleAddNew}>
              {loading ? (
                <Text
                  style={{
                    letterSpacing: 2,
                    fontWeight: "500",
                    paddingVertical: 5,
                  }}
                >
                  CONFIRM
                </Text>
              ) : (
                <ActivityIndicator />
              )}
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>

      <View style={styles.bottomBtn}>
        <TouchableOpacity
          style={globalBtnStyle.btnBlueStyle}
          onPress={handleToggleForm}
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
    backgroundColor: "white",
  },
  blueText: {
    letterSpacing: 2,
    color: "blue",
    marginVertical: 5,
  },
  bottomBtn: {
    position: "relative",
    bottom: 0,
    width: "100%",
    alignItems: "center",
  },
  confirmBtn: {
    width: "50%",
    borderWidth: 1,
    borderRadius: 12,
    borderColor: "black",
    paddingVertical: 5,
    alignItems: "center",
  },
});
