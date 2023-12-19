import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passhide, setPassHide] = useState(true);

  const img = require("../../assets/login-pizza.png");

  const handlePasswordShow = () => {
    setPassHide(!passhide);
  };
  return (
    <View style={styles.container}>
      <Image
        source={img}
        style={{
          height: 100,
          width: 100,
        }}
      />
      <Text style={styles.headerText}>WELCOME BACK!</Text>

      <KeyboardAvoidingView style={styles.mainContainer}>
        <View style={styles.emailStyle}>
          <AntDesign name="user" size={24} color="black" />
          <TextInput
            placeholder="Mobile Number/Email"
            type="email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.passwordInputStyle}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row",
              gap: 5,
              alignItems: "center",
            }}
          >
            <AntDesign name="lock" size={24} color="black" />
            <TextInput
              placeholder="Password"
              value={password}
              secureTextEntry={passhide}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
          <TouchableOpacity onPress={handlePasswordShow}>
            <AntDesign name="eyeo" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View
          style={{ alignItems: "flex-end", width: "90%", marginVertical: 20 }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            <Text
              style={{
                letterSpacing: 0.5,
                fontSize: 16,
              }}
            >
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>
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
              letterSpacing: 2,
            }}
          >
            LOGIN
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("RegisterNav")}
          style={{
            flexDirection: "row",
            marginVertical: 10,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "500",
              color: "#888",
              letterSpacing: 2,
            }}
          >
            REGISTER INSTEAD
          </Text>
          <MaterialIcons name="navigate-next" size={24} color="black" />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "white",
    flex: 1,
  },
  headerText: {
    fontSize: 30,
    fontWeight: "900",
    width: 200,
    textAlign: "center",
    letterSpacing: 1.5,
  },
  mainContainer: {
    flex: 1,
    width: "100%",
    marginTop: 35,
    alignItems: "center",
  },
  emailStyle: {
    flexDirection: "row",
    gap: 5,
    backgroundColor: "lightgray",
    borderRadius: 12,
    paddingVertical: 12,
    width: "90%",
    paddingLeft: 12,
    marginVertical: 10,
    alignItems: "center",
  },
  passwordInputStyle: {
    flexDirection: "row",
    gap: 5,
    backgroundColor: "lightgray",
    borderRadius: 12,
    paddingVertical: 12,
    width: "90%",
    marginVertical: 10,
    paddingLeft: 12,
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 10,
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
