import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import BackButton from "../../components/BackButton";
import email from 'react-native-email'

const CustomerService = () => {

  const  handleEmail = () => {
    const to = ['thabonkgogo2001@email.com', 'mphojimmy206@gmail.com'] // string or array of email addresses
    email(to, {
        // Optional additional arguments
        cc: ['bazzy@moo.com', 'doooo@daaa.com'], // string or array of email addresses
        bcc: 'mee@mee.com', // string or array of email addresses
        subject: 'Show how to use',
        body: 'Some body right here', 
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
      <TouchableOpacity onPress={handleEmail}>
        <Text>SUBMIT FEEDBACK</Text>
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
    // backgroundColor: 'purple',
    flex: 1,
    justifyContent: "center",
  },
});
