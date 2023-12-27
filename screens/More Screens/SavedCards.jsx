import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
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
  const [emptyCard, setEmptyCard] = useState(false);

  const handleAddNewCard = () => {
    const newItem = {
      id: userCard.length + 1, // just a prototype for adding a new id
      cardHolder,
      cardNumber,
      expDate,
      cvv,
    };
    setUserCard(newItem);
    setTimeout(() => {
      setEmptyCard(true);
    }, timeout);
  };

  return (
    <View style={styles.container}>
      <BackButton title="Payment Options" />
      <View style={{ backgroundColor: "whitesmoke", flex: 1, width: "95%" }}>
        {emptyCard && (
          <View>
            <Text style={styles.text}>Saved Cards</Text>
            <Text>Money</Text>
          </View>
        )}
        <Text style={styles.text}>Add new card</Text>
        <View style={styles.form}>
          <View style={{ flexDirection: "row" }}>
            <Text>Card Holder</Text>
            <TextInput
              placeholder="John Doe"
              value={cardHolder}
              onChangeText={(text) => setCardHolder(text)}
            />
          </View>
          <LineBreak />
          <View style={{ flexDirection: "row" }}>
            <Text>Card Number</Text>
            <TextInput
              placeholder="John Doe"
              value={cardNumber}
              onChangeText={(text) => setCardNumber(text)}
            />
          </View>
          <LineBreak />
          <View style={{ flexDirection: "row" }}>
            <Text>Expiry Date</Text>
            <TextInput
              placeholder="10/27"
              value={expDate}
              onChangeText={(text) => setExpDate(text)}
            />
          </View>
          <LineBreak />
          <View style={{ flexDirection: "row" }}>
            <Text>CVV</Text>
            <TextInput
              placeholder="123"
              value={cvv}
              onChangeText={(text) => setCvv(text)}
            />
          </View>
          <LineBreak />
        </View>
        <TouchableOpacity onPress={handleAddNewCard}>
          <Text>ADD NEW CARD</Text>
        </TouchableOpacity>
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
