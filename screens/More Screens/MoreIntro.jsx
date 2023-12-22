import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

const MoreIntro = ({ navigation }) => {
  const handleNavigation = (location) => {
    navigation.navigate(location);
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          width: "90%",
          height: 60,
          gap: 10,
          paddingLeft: 12,
          marginBottom: 5,
        }}
      >
        <FontAwesome5 name="user-circle" size={50} color="black" />
        <Text style={{ fontSize: 28, fontWeight: "900", letterSpacing: 1.5 }}>
          Jimmy Nkgogo
        </Text>
      </View>
      <Text style={styles.lineBreakStyle}>
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
      </Text>
      {/* The buttons will go here to navigation to the other places */}
      <View>
        <TouchableOpacity
          onPress={() => handleNavigation("ViewAccount")}
          style={{ marginVertical: 12 }}
        >
          <Text style={{ fontSize: 24, fontWeight: "bold", color: "#333" }}>
            View Your Account
          </Text>
        </TouchableOpacity>
        <Text style={styles.lineBreakStyle}>
          ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        </Text>
        <TouchableOpacity
          onPress={() => handleNavigation("OrderHistory")}
          style={{ marginVertical: 12 }}
        >
          <Text style={{ fontSize: 24, fontWeight: "bold", color: "#333" }}>
            Order History
          </Text>
        </TouchableOpacity>
        <Text style={styles.lineBreakStyle}>
          ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        </Text>
        <TouchableOpacity
          onPress={() => handleNavigation("Favourites")}
          style={{ marginVertical: 12 }}
        >
          <Text style={{ fontSize: 24, fontWeight: "bold", color: "#333" }}>
            You Favourites
          </Text>
        </TouchableOpacity>
        <Text style={styles.lineBreakStyle}>
          ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        </Text>
        <TouchableOpacity
          onPress={() => handleNavigation("SavedAddesses")}
          style={{ marginVertical: 12 }}
        >
          <Text style={{ fontSize: 24, fontWeight: "bold", color: "#333" }}>
            Saved Addresses
          </Text>
        </TouchableOpacity>
        <Text style={styles.lineBreakStyle}>
          ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        </Text>
        <TouchableOpacity
          onPress={() => handleNavigation("SavedCards")}
          style={{ marginVertical: 12 }}
        >
          <Text style={{ fontSize: 24, fontWeight: "bold", color: "#333" }}>
            Saved Cards
          </Text>
        </TouchableOpacity>
        <Text style={styles.lineBreakStyle}>
          ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        </Text>
        <TouchableOpacity
          onPress={() => handleNavigation("CustomerService")}
          style={{ marginVertical: 12 }}
        >
          <Text style={{ fontSize: 24, fontWeight: "bold", color: "#333" }}>
            Customer Service
          </Text>
        </TouchableOpacity>
        <Text style={styles.lineBreakStyle}>
          ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        </Text>
        <TouchableOpacity
          style={{ marginVertical: 12 }}
          onPress={() => navigation.push("AuthStack")}
        >
          <Text style={{ fontSize: 24, fontWeight: "bold", color: "#333" }}>
            Logout
          </Text>
        </TouchableOpacity>
        <Text style={styles.lineBreakStyle}>
          ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        </Text>
      </View>
    </View>
  );
};

export default MoreIntro;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 5,
  },
  lineBreakStyle: {
    color: "#888",
    letterSpacing: -2,
  },
});
