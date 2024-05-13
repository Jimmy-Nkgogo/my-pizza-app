import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import UserDetails from "../../components/UserDetails";
import ButtonsContainer from "../../components/ButtonsContainer";
import { selectAllUsers } from "../../redux/features/UsersSlice";
import { useSelector } from "react-redux";

const ViewAccount = ({ navigation, route }) => {
  const user = useSelector(selectAllUsers);
  const handleNavigation = route.params.handleNavigation;

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          width: "90%",
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-outline" size={28} color="gray" />
        </TouchableOpacity>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "90%"
          }}
        >
          <FontAwesome5 name="user-circle" size={48} color="black" />
          <Text style={{ fontSize: 23, fontWeight: "bold", textAlign: "center" }}>
            {user.firstName + " " + user.lastName}
          </Text>
        </View>
      </View>
      <View style={styles.mainContent}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View >
              <UserDetails item={user} />
              <ButtonsContainer handleNavigation={handleNavigation} />
            </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default ViewAccount;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
  },
  lineBreakStyle: {
    color: "#888",
    letterSpacing: -2,
  },
  dataNameStyle: {
    color: "gray",
    letterSpacing: 1,
    fontSize: 16,
  },
  mainContent: {
    width: "90%",
    flex: 1,
  },
  dataTextStyle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  dataViewStyle: {
    paddingVertical: 10,
  },
});
