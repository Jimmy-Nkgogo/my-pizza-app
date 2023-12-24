import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import LineBreak from "../../components/LineBreak";
import ItemComponent from "../../components/ItemComponent";

const MoreIntro = ({ navigation }) => {
  const [user, setUser] = useState("Jimmy Nkgogo");
  const [userDetails, setUserDetails] = useState([
    {
      id: 1,
      name: "Jimmy Nkgogo",
      dateOfBirth: "--",
      country: "South Africa",
      mobileNumber: "0736746218",
      email: "jimmy@gmail.com",
      dietReq: "none",
      communication: "SMS",
    },
  ]);

  const handleNavigation = (location, options) => {
    if (location === "AuthStack") {
      navigation.replace("AuthStack");
    } else {
      navigation.navigate(location, options);
    }
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
          {userDetails[0].name}
        </Text>
      </View>
      <LineBreak />
      {/* The buttons will go here to navigation to the other places */}
      <View>
        <ItemComponent
          title="View Your Account"
          userDetails={userDetails}
          handleNavigation={handleNavigation}
          navigateTo="ViewAccount"
        />

        <LineBreak />

        <ItemComponent
          title="Order History"
          userDetails={userDetails}
          handleNavigation={handleNavigation}
          navigateTo="OrderHistory"
        />
        <LineBreak />

        <ItemComponent
          title="Your Favourites"
          userDetails={userDetails}
          handleNavigation={handleNavigation}
          navigateTo="Favourites"
        />
        <LineBreak />

        <ItemComponent
          title="Saved Addresses"
          userDetails={userDetails}
          handleNavigation={handleNavigation}
          navigateTo="SavedAddresses"
        />
        <LineBreak />

        <ItemComponent
          title="Saved Cards"
          userDetails={userDetails}
          handleNavigation={handleNavigation}
          navigateTo="SavedCards"
        />
        <LineBreak />
        <TouchableOpacity
          onPress={() => handleNavigation("CustomerService")}
          style={{
            marginVertical: 12,
            marginVertical: -2,
            paddingVertical: 15,
          }}
        >
          <Text style={{ fontSize: 24, fontWeight: "bold", color: "#333" }}>
            Customer Service
          </Text>
        </TouchableOpacity>
        <LineBreak />
        <TouchableOpacity
          style={{
            marginVertical: 12,
            marginVertical: -2,
            paddingVertical: 15,
          }}
          onPress={() => handleNavigation("AuthStack")}
        >
          <Text style={{ fontSize: 24, fontWeight: "bold", color: "#333" }}>
            Logout
          </Text>
        </TouchableOpacity>
        <LineBreak />
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
