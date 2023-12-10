import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React, { useState } from "react";

const Register2 = ({ navigation }) => {
  const [dietaryReq, setDietaryReq] = useState([
    {
      id: 1,
      req: "",
    },
  ]);
  const [req, setReq] = useState("");

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View>
        <TouchableOpacity
          style={styles.btnLogin}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={{ color: "white" }}>LOGIN INSTEAD</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.numbers}>
        <View style={styles.inActiveNumber}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              textAlign: "center",
            }}
          >
            1
          </Text>
        </View>
        <View style={styles.activeNumber}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              textAlign: "center",
              color: "white",
            }}
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
      {/* Inputs are here */}
      <ScrollView style={{ width: "100%", flex: 1, marginVertical: 10 }}>
        <View style={styles.main}>
          <Text style={styles.headerText}>MY DIETARY REQUIREMENTS</Text>
          <Text>Select your dietary requirements below.</Text>
          <View style={{ marginVertical: 15 }}></View>
          <TouchableOpacity>
            <Text>Halaal</Text>
          </TouchableOpacity>

          <View style={styles.btnViewStyle}>

          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Register2")}
            style={styles.btnNext}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 18,
                textAlign: "center",
              }}
            >
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Register2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 15,
    backgroundColor: "white",
    marginBottom: 0,
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
    marginVertical: 20,
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
  headerText: {
    fontSize: 28,
    fontWeight: "900",
    width: 215,
    textAlign: "center",
  },
  main: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    backgroundColor: "white",
  },
  inputStyle: {
    width: "90%",
    height: 48,
    marginVertical: 10,
    backgroundColor: "#eee",
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  btnNext: {
    backgroundColor: "blue",
    width: "90%",
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 18,
    marginVertical: 20,
  },
});
