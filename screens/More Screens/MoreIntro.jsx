import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import LineBreak from "../../components/LineBreak";
import ItemComponent from "../../components/ItemComponent";
import packageJson from "../../package.json";
import { selectAllUsers } from "../../redux/features/UsersSlice";
import { useSelector } from "react-redux";

const MoreIntro = ({ navigation }) => {
  const user = useSelector(selectAllUsers)
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
      <View style={styles.userView}>
        <FontAwesome5 name="user-circle" size={50} color="black" />
        <Text style={{ fontSize: 28, fontWeight: "900", letterSpacing: 1.5 }}>
          {user.firstName + " " + user.lastName}
        </Text>
      </View>
      <LineBreak />
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
        <ItemComponent
          title="Customer Service"
          userDetails={userDetails}
          handleNavigation={handleNavigation}
          navigateTo="CustomerService"
        />
        <LineBreak />
        <ItemComponent
          title="Logout"
          userDetails={userDetails}
          handleNavigation={handleNavigation}
          navigateTo="AuthStack"
        />
        <LineBreak />
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          alignItems: "flex-end",
        }}
      >
        <Text>v{packageJson.version}</Text>
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
  userView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "90%",
    height: 60,
    gap: 10,
    paddingLeft: 12,
    marginBottom: 5,
  },
});
