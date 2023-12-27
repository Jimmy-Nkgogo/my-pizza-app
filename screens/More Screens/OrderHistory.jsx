import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import BackButton from "../../components/BackButton";

const OrderHistory = () => {
  return (
    <View style={styles.container}>
      <BackButton title="Order History" />
      <View style={styles.textView}>
        <Text
          style={{
            fontWeight: "bold",
            width: "90%",
            textAlign: "center",
            fontSize: 17,
          }}
        >
          Your order histroy is empty. Let's change that! Dive into our menu
          full of tasty delights. Once you place an order, you'll be able to see
          all the details here.
        </Text>
      </View>
    </View>
  );
};

export default OrderHistory;

const styles = StyleSheet.create({
  textView: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "lightgray",
    justifyContent: "center",
    alignItems: "center",
    minHeight: 80,
    width: "90%",
    marginVertical: 10,
    paddingVertical: 8,
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
});
