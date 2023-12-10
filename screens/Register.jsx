import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const Register = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btnLogin}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={{ color: "white" }}>LOGIN INSTEAD</Text>
      </TouchableOpacity>
      <View style={styles.numbers}>
        <View style={styles.activeNumber}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              textAlign: "center",
              color: "white",
            }}
          >
            1
          </Text>
        </View>
        <View style={styles.inActiveNumber}>
          <Text
            style={{ fontWeight: "bold", fontSize: 18, textAlign: "center" }}
          >
            2
          </Text>
        </View>
        <View style={styles.inActiveNumber}>
          <Text
            style={{ fontWeight: "bold", fontSize: 18, textAlign: "center" }}
          >
            3
          </Text>
        </View>
      </View>
      {/* Rest of the Screen */}
      
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 15,
  },
  btnLogin: {
    backgroundColor: "skyblue",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
  numbers: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    marginVertical: 10
  },
  activeNumber: {
    backgroundColor: "#333",
    borderRadius: 20,
    width: 25,
  },
  inActiveNumber: {
    borderColor: "#333",
    borderRadius: 20,
    width: 25,
    borderWidth: 1,
  },
});
