import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import BackButton from "../../components/BackButton";
import { AntDesign } from "@expo/vector-icons";
import globalStyles from "../../globalBtnStyle";

const ForgotPassword = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  const handlePress = () => {
    setLoading(!loading);

    setTimeout(() => {
      navigation.navigate("Login");
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <BackButton title="Reset Password" />

      <View style={{ alignItems: "center", marginVertical: 10 }}>
        <Text style={styles.resetPassword}>Reset Password</Text>
        <Text
          style={{
            width: 280,
            textAlign: "center",
            fontSize: 17
          }}
        >
          Enter your email address or mobile number and we will send you a code
          to reset your password.
        </Text>
      </View>

      <Text
        style={{
          color: "#444",
          fontWeight: "bold",
          marginTop: 10,
          textAlign: "center",
          fontSize: 16,
          letterSpacing: 2,
        }}
      >
        MOBILE NUMBER/EMAIL
      </Text>
      <View style={styles.inputDiv}>
        <AntDesign name="user" size={24} color="black" />
        <TextInput autoFocus />
      </View>

      <View
        style={{
          width: "50%",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 50,
        }}
      >
        <TouchableOpacity
          style={globalStyles.btnBlueStyle}
          onPress={handlePress}
        >
          {loading ? (
            <ActivityIndicator />
          ) : (
            <Text style={globalStyles.btnTextStyle}>SUBMIT</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
  resetPassword: {
    width: 200,
    fontSize: 34,
    fontWeight: "900",
    textAlign: "center",
    color: "#333",
  },
  inputDiv: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#999",
    height: 40,
    borderRadius: 12,
    paddingHorizontal: 20,
  },
});
