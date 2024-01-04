import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome,Entypo } from "@expo/vector-icons";

const SavedCardComponent = ({ userCards }) => {
  function ShowEllipse(text) {
    let returned;
    if (text.length > 4) {
      return (returned = text.slice(text.length - 4) + "...");
    } else {
      return text;
    }
  }

  return (
    <View>
      {userCards.map((userCard) => (
        <View
          key={userCard.id}
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "80%",
              backgroundColor: "red",
            }}
          >
            {userCard.cardNumber.startsWith("4") ? (
              <FontAwesome name="cc-visa" size={24} color="black" />
            ) : (
              <FontAwesome name="cc-mastercard" size={24} color="black" />
            )}
            <Text>{ShowEllipse(userCard.cardNumber)}</Text>
            <Text>{userCard.cardType}</Text>
            {console.log(userCard.cardType)}
            <Text>EXP</Text>
            <Text>{userCard.expDate}</Text>
          </View>
          <TouchableOpacity onPress={() => handleRemoveCard(userCard.id)}>
            <Entypo name="cross" size={24} color="black" />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default SavedCardComponent;

const styles = StyleSheet.create({});
