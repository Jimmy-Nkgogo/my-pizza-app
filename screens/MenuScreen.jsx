import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import StoreButton from "../components/StoreButton";

const MenuScreen = () => {
  return (
    <View style={styles.container}>
      <StoreButton title="Phalaborwa" />
      <View
        style={{ alignItems: "center", flex: 1, width: "95%", marginTop: 15 }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            justifyContent: "space-around",
          }}
        >
          <TouchableOpacity style={styles.darkBlueBtn}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
              SPECIALS
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.darkBlueBtn}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
              FAVOURITES
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
  },
  darkBlueBtn: {
    backgroundColor: "darkblue",
    paddingVertical: 25,
    paddingHorizontal: 25,
    borderRadius: 12,
  },
});
