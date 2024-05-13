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
import {
  MaterialCommunityIcons,
  Ionicons,
  Feather,
  AntDesign,
} from "@expo/vector-icons";
import { userAdded } from "../../redux/features/UsersSlice";
import { useDispatch } from "react-redux";

const Register3 = ({ navigation, route }) => {
  const [password, setPassword] = useState("");
  const [createPassword, setCreatePassword] = useState("");
  const [visibile, setVisible] = useState(false);
  const [visibile2, setVisible2] = useState(false);
  const [emailCheck, setEmailCheck] = useState(false);
  const [smsCheck, setSmsCheck] = useState(false);

  const { userDetails } = route.params;
  const dispatch = useDispatch()

  const handlePasswordVisibility = () => {
    setVisible(!visibile);
  };
  const handleCreatePasswordVisibility = () => {
    setVisible2(!visibile2);
  };

  const handleEmailCheck = () => {
    setEmailCheck(!emailCheck);
  };

  const handleSmsCheck = () => {
    setSmsCheck(!smsCheck);
  };

  const handleSubmit = () => {
    communication = "";
    if (smsCheck) {
      communication = "sms"
    } else {
      communication = "email"
    }
    const completeUserData = { ...userDetails, communication}

    d
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View>
        <TouchableOpacity
          style={styles.btnLogin}
          onPress={() => navigation.navigate("LoginNav")}
        >
          <Text style={{ color: "white", letterSpacing: 2 }}>
            LOGIN INSTEAD
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.numbers}>
        <AntDesign name="checkcircle" size={24} color="green" />
        <AntDesign name="checkcircle" size={24} color="green" />
        <View style={styles.activeNumber}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              textAlign: "center",
              color: "white",
            }}
          >
            3
          </Text>
        </View>
      </View>
      {/* Inputs are here */}
      <ScrollView style={{ width: "100%", flex: 1, marginVertical: 10 }}>
        <View style={styles.main}>
          <Text style={styles.headerText}>LET'S FINISH!</Text>
          <Text>Create your password below.</Text>
          <View style={{ marginVertical: 15 }}></View>

          <View style={styles.inputContainer}>
            <TextInput
              type="password"
              required
              placeholder="Password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              style={styles.inputStyle}
              secureTextEntry={visibile}
            />
            <TouchableOpacity onPress={handlePasswordVisibility}>
              {visibile ? (
                <Feather name="eye-off" size={30} color="black" />
              ) : (
                <AntDesign name="eyeo" size={30} color="black" />
              )}
            </TouchableOpacity>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              type="password"
              required
              placeholder="Password"
              value={createPassword}
              onChangeText={(text) => setCreatePassword(text)}
              style={styles.inputStyle}
              secureTextEntry={visibile2}
            />
            <TouchableOpacity onPress={handleCreatePasswordVisibility}>
              {visibile2 ? (
                <Feather name="eye-off" size={30} color="black" />
              ) : (
                <AntDesign name="eyeo" size={30} color="black" />
              )}
            </TouchableOpacity>
          </View>

          <View
            style={{
              backgroundColor: "#85858585",
              height: 200,
              width: "90%",
              borderRadius: 12,
              marginVertical: 20,
              alignItems: "center",
              padding: 20,
            }}
          >
            <Text
              style={{ fontWeight: "bold", marginBottom: 10, fontSize: 20 }}
            >
              Sign me up for Offers
            </Text>
            <Text style={{ width: 200, textAlign: "center", fontSize: 16 }}>
              How do you want to receive special vouchers and other promotions?
            </Text>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 15,
                marginTop: 20,
              }}
            >
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 5,
                }}
                onPress={handleEmailCheck}
              >
                {emailCheck ? (
                  <Ionicons name="checkbox" size={24} color="black" />
                ) : (
                  <MaterialCommunityIcons
                    name="checkbox-blank-outline"
                    size={24}
                    color="black"
                  />
                )}

                <Text>Email me</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 5,
                }}
                onPress={handleSmsCheck}
              >
                {smsCheck ? (
                  <Ionicons name="checkbox" size={24} color="black" />
                ) : (
                  <MaterialCommunityIcons
                    name="checkbox-blank-outline"
                    size={24}
                    color="black"
                  />
                )}

                <Text>SMS me</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.btnViewStyle}>
            <TouchableOpacity
              style={styles.btnBack}
              onPress={() => navigation.goBack()}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 18,
                  textAlign: "center",
                  letterSpacing: 1,
                }}
              >
                BACK
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("BottomTabs")}
              style={styles.btnNext}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 18,
                  textAlign: "center",
                  letterSpacing: 1,
                }}
              >
                SUBMIT
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Register3;

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
    width: "80%",
    height: 48,
    backgroundColor: "#eee",
    borderRadius: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  btnNext: {
    backgroundColor: "blue",
    width: "50%",
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    marginVertical: 20,
  },
  btnViewStyle: {
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  btnBack: {
    backgroundColor: "white",
    width: "50%",
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    marginVertical: 20,
    borderWidth: 2,
    borderColor: "#444",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#eee",
    borderRadius: 12,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
});
