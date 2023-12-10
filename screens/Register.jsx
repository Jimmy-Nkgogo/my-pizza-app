import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React, { useState } from "react";

const Register = ({ navigation }) => {
  const [userDetails, setUserDetails] = useState([
    {
      id: 1,
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      nationality: "South Africa",
      mobile: null,
      email: "",
    },
  ]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <ScrollView style={{ backgroundColor: "white", flex: 1 }}>
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
          />
          <TextInput
            style={styles.inputStyle}
            required
            placeholder="Last Name"
            type="text"
            value={lastName}
          />
          <TextInput
            style={styles.inputStyle}
            placeholder="Date of Birth (Optional)"
          />
          <TextInput
            style={styles.inputStyle}
            placeholder="Mobile number"
            type="number"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.inputStyle}
            placeholder="Email Address"
            type="email"
          />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 15,
    backgroundColor: "white",
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
});
