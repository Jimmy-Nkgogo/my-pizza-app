import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import BackButton from "../../components/BackButton";
import LineBreak from "../../components/LineBreak";

const SavedCards = () => {
  const [userCard, setUserCard] = useState([
    {
      id: 1,
      cardHolder: "MJ NKGOGO",
      cardNumber: "4847958248327726",
      expDate: "10/27",
      cvv: "123",
    },
  ]);
  const [cardHolder, setCardHolder] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expDate, setExpDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [emptyCard, setEmptyCard] = useState(true);

  return (
    <View style={styles.container}>
      <BackButton title="Payment Options" />
      <View style={{ backgroundColor: "whitesmoke", flex: 1, width: "95%" }}>
        <Text style={styles.text}>Add new card</Text>
      </View>
    </View>
  );
};

export default SavedCards;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  text: {
    color: "#777",
  },
});
