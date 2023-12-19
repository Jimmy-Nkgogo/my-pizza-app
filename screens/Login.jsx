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
import img from "../assets/login-pizza.png";
import { AntDesign } from "@expo/vector-icons";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passhide, setPassHide] = useState(true);

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
});
{
  /* <TouchableOpacity onPress={() => navigation.navigate('RegisterNav')}>
  <Text>REGISTER INSTEAD</Text>
</TouchableOpacity> */
}
