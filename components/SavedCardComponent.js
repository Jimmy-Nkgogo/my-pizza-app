import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome, Entypo } from "@expo/vector-icons";

const SavedCardComponent = ({ userCards, handleRemoveCard, ShowEllipse }) => {

  return (
    <View>
      
      {userCards.map((userCard, index) => (
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
              width: "80%",
              backgroundColor: "red",
              justifyContent: "space-between",
              marginBottom: 10,
            }}
          >
            {userCard.cardNumber.startsWith("4") ? (
              <FontAwesome name="cc-visa" size={24} color="black" />
            ) : (
              <FontAwesome name="cc-mastercard" size={24} color="black" />
            )}
            <Text>{ShowEllipse(userCard.cardNumber)}</Text>
            <Text>{userCard.cardType}</Text>
            {console.log(index, userCard.cardType)}
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
