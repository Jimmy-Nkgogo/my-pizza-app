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
import AddCardComponent from "../../components/AddCardComponent";
import { FontAwesome } from "@expo/vector-icons";

const SavedCards = () => {
  const [userCards, setUserCards] = useState([
    {
      id: 1,
      cardHolder: "MJ NKGOGO",
      cardNumber: "4847958248327726",
      expDate: "10/27",
      cvv: "123",
      cardType: "Visacard",
    },
  ]);
  const [cardHolder, setCardHolder] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expDate, setExpDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [emptyCard, setEmptyCard] = useState(false);
  const [cardType, setCardType] = useState("");

  function ShowEllipse(text) {
    let returned;
    if (text.length > 4) {
      return (returned = text.slice(text.length - 4) + "...");
    } else {
      return text;
    }
  }

  const handleAddNewCard = () => {
    if (cardNumber.startsWith("4")) {
      setCardType("Visacard");
    } else if (cardNumber.startsWith("2") || cardNumber.startsWith("5")) {
      setCardType("Mastercard");
    }
    const newItem = {
      id: userCards.length + 1, // just a prototype for adding a new id
      cardHolder,
      cardNumber,
      expDate,
      cvv,
      cardType,
    };
    setUserCards([...userCards, newItem]);
    setTimeout(() => {
      setEmptyCard(true);
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <BackButton title="Payment Options" />
      <View style={{ flex: 1, width: "95%" }}>
        {emptyCard && (
          <View>
            <Text style={styles.text}>Saved Cards</Text>
            {userCards.map((userCard) => (
              <View key={userCard.id}>
                <View style={{ flexDirection: "row", gap: 10 }}>
                  {userCard.cardNumber.startsWith("4") ? (
                    <FontAwesome name="cc-visa" size={24} color="black" />
                  ) : (
                    <FontAwesome name="cc-mastercard" size={24} color="black" />
                  )}
                  <Text>{ShowEllipse(userCard.cardNumber)}</Text>
                  <Text>{userCard.cardType}</Text>
                  <Text>EXP</Text>
                  <Text>{userCard.expDate}</Text>
                </View>
              </View>
            ))}
          </View>
        )}
        <Text style={styles.text}>Add new card</Text>
        <View style={styles.form}>
          <AddCardComponent
            title="Card Holder"
            placeholder="John Doe"
            value={cardHolder}
            setValue={setCardHolder}
          />
          <LineBreak />
          <AddCardComponent
            title="Card Number"
            placeholder="1234 5678 1234 5678"
            value={cardNumber}
            setValue={setCardNumber}
            maxLength={16}
          />
          <LineBreak />
          <AddCardComponent
            title="Expiry Date"
            placeholder="10/27"
            value={expDate}
            setValue={setExpDate}
            maxLength={5}
          />
          <LineBreak />
          <AddCardComponent
            title="CVV"
            placeholder="123"
            value={cvv}
            setValue={setCvv}
            maxLength={3}
          />
          <LineBreak />
        </View>
      </View>
      <TouchableOpacity onPress={handleAddNewCard} style={styles.btnAddCard}>
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 18,
            textAlign: "center",
            letterSpacing: 2,
          }}
        >
          ADD NEW CARD
        </Text>
      </TouchableOpacity>
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
  btnAddCard: {
    backgroundColor: "mediumblue",
    width: "90%",
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    marginVertical: 20,
  },
});
