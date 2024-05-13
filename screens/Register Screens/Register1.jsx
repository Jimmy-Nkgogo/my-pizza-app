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
import { nanoid } from "@reduxjs/toolkit";

const Register1 = ({ navigation }) => {
  const [userDetails, setUserDetails] = useState([
    {
      id: 1,
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      nationality: "South Africa",
      mobile: null,
      email: "",
      dietReq: []
    },
  ]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [nationality, setNationality] = useState("South Africa");

  const handleDataAdded = (field, value) => {
    setUserDetails((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    navigation.navigate("Register2", {
      userDetails: {
        id: nanoid(),
        firstName,
        lastName,
        dateOfBirth,
        nationality,
        mobile,
        email,
        dietReq: [],
        communication: ''
      },
    });
    console.log(userDetails);
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View>
        <TouchableOpacity
          style={styles.btnLogin}
          onPress={() => navigation.navigate("LoginNav")}
        >
          <Text style={{ color: "white" }}>LOGIN INSTEAD</Text>
        </TouchableOpacity>
      </View>
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
      {/* Inputs are here */}
      <ScrollView style={{ width: "100%", flex: 1, marginVertical: 10 }}>
        <View style={styles.main}>
          <Text style={styles.headerText}>LET'S GET TO KNOW YOU!</Text>
          <Text>Enter your Personal Details below.</Text>
          <View style={{ marginVertical: 15 }}></View>

          <TextInput
            style={styles.inputStyle}
            required
            placeholder="First Name"
            type="text"
            value={firstName}
            onChangeText={(value) => {
              setFirstName(value);
              handleDataAdded("firstName", value);
            }}
          />
          <TextInput
            style={styles.inputStyle}
            required
            placeholder="Last Name"
            type="text"
            value={lastName}
            onChangeText={(value) => {
              setLastName(value);
              handleDataAdded("lastName", value);
            }}
          />
          <TextInput
            style={styles.inputStyle}
            placeholder="Date of Birth (Optional)"
            value={dateOfBirth}
            onChangeText={(value) => {
              setDateOfBirth(value);
              handleDataAdded("dateOfBirth", value);
            }}
          />
          <View style={{ width: "100%", marginLeft: 38 }}>
            <Text>NATIONALITY</Text>
            <TextInput
              style={styles.inputStyle}
              placeholder={nationality}
              value={nationality}
              onChangeText={(value) => {
                setNationality(value);
                handleDataAdded("nationality", value);
              }}
            />
          </View>
          <TextInput
            style={styles.inputStyle}
            placeholder="Mobile number"
            type="number"
            keyboardType="numeric"
            value={mobile}
            onChangeText={(value) => {
              setMobile(value);
              handleDataAdded("mobile", value);
            }}
          />
          <TextInput
            style={styles.inputStyle}
            placeholder="Email Address"
            type="email"
            value={email}
            onChangeText={(value) => {
              setEmail(value);
              handleDataAdded("email", value);
            }}
          />
          <TouchableOpacity onPress={handleSubmit} style={styles.btnNext}>
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

export default Register1;

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
    fontSize: 30,
    fontWeight: "900",
    width: 200,
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
