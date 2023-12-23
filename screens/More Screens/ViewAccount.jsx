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
import UserDetails from "../../components/userDetails";

const ViewAccount = ({ navigation, route }) => {
  const user = route.params.userDetails;
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          width: "90%",
        }}
      >
        <Ionicons name="chevron-back-outline" size={28} color="gray" />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "22.5%",
          }}
        >
          <FontAwesome5 name="user-circle" size={48} color="black" />
          <Text style={{ fontSize: 23, fontWeight: "bold" }}>
            {user[0].name}
          </Text>
        </View>
      </View>
      <View style={styles.mainContent}>
        <ScrollView style={{ width: "100%", }}>
          {user.map((item) => (
            <UserDetails item={item} />
          ))}
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btnLogOut}>
              <Text>LOGOUT</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnNext}>
              <Text style={styles.btnEditText}>EDIT</Text>
            </TouchableOpacity>
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
  },
  dataTextStyle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  dataViewStyle: {
    paddingVertical: 10,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 30,
  },
  btnEditText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    letterSpacing: 2,
  },
  btnNext: {
    backgroundColor: "blue",
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 18,
    marginVertical: 20,
    flex: 1,
  },
  btnLogOut: {
    borderWidth: 1,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 18,
    marginVertical: 20,
    flex: 1,
  },
});
