import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import BackButton from "../../components/BackButton";
import email from 'react-native-email';
import globalStyles from "../../globalBtnStyle";

const CustomerService = () => {

  const  handleEmail = () => {
    const to = 'feedback@romanspizza.com' // string or array of email addresses
    email(to, {
        // Optional additional arguments
         
        checkCanOpen: false // Call Linking.canOpenURL prior to Linking.openURL
    }).catch(console.error)
}
  return (
    <View style={styles.container}>
      <BackButton title="Customer Service" />
      <View style={styles.textView}>
        <Text style={styles.text}>Hello Romanite</Text>
        <Text style={styles.text}>
          Do you have feedback on a great, or not so great experience with
          Roman's Pizza? We'd love to hear from you
        </Text>
        <Text style={styles.text}>
          We're committed to delivering the best pizza, and the best value with
          no excuses.
        </Text>
        <Text style={styles.text}>
          Drop us a line and we'll get back to you as soons as possible.
        </Text>
      </View>
      <TouchableOpacity style={globalStyles.btnBlueStyle} onPress={handleEmail}>
        <Text style={globalStyles.btnTextStyle}>SUBMIT FEEDBACK</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomerService;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
  },
  text: {
    color: "#666",
    textAlign: "center",
    marginVertical: 10,
  },
  textView: {
    width: "80%",
    alignItems: "center",
    paddingVertical: 50,
    flex: 1
  },
});
