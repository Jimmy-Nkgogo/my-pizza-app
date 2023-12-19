import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import img from "../assets/login-pizza.png";

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View></View>
      <Image
        source={img}
        style={{
          justifyContent: "center",
        }}
      />
      <TouchableOpacity onPress={() => navigation.navigate('RegisterNav')}>
        <Text>REGISTER INSTEAD</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});
