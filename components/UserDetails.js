import { StyleSheet, Text, View } from "react-native";
import React from "react";

const UserDetails = ({ item }) => {
  return (
    <View>
      <View style={styles.dataViewStyle}>
        <Text style={styles.lineBreakStyle}>
          ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        </Text>
        <Text style={styles.dataNameStyle}>DATE OF BIRTH</Text>
        <Text style={styles.dataTextStyle}>{item.dateOfBirth}</Text>
      </View>
      <Text style={styles.lineBreakStyle}>
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
      </Text>
      <View style={styles.dataViewStyle}>
        <Text style={styles.dataNameStyle}>COUNTRY</Text>
        <Text style={styles.dataTextStyle}>{item.nationality}</Text>
      </View>
      <Text style={styles.lineBreakStyle}>
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
      </Text>
      <View style={styles.dataViewStyle}>
        <Text style={styles.dataNameStyle}>MOBILE NUMBER</Text>
        <Text style={styles.dataTextStyle}>{item.mobile}</Text>
      </View>
      <Text style={styles.lineBreakStyle}>
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
      </Text>
      <View style={styles.dataViewStyle}>
        <Text style={styles.dataNameStyle}>EMAIL</Text>
        <Text style={styles.dataTextStyle}>{item.email}</Text>
      </View>

      <Text style={styles.lineBreakStyle}>
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
      </Text>
      <View style={styles.dataViewStyle}>
        <Text style={styles.dataNameStyle}>DIETARY REQUIREMENTS</Text>
        <Text style={styles.dataTextStyle}>{item.dietReq.map((item, index) => (
          <View key={index}>
            <Text>{item} {" "}</Text>
          </View>
        ))}</Text>
      </View>
      <Text style={styles.lineBreakStyle}>
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
      </Text>
      <View style={styles.dataViewStyle}>
        <Text style={styles.dataNameStyle}>COMMUNICATION METHOD</Text>
        <Text style={styles.dataTextStyle}>{item.communication}</Text>
      </View>
    </View>
  );
};

export default UserDetails;

const styles = StyleSheet.create({
  dataTextStyle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  dataViewStyle: {
    paddingVertical: 10,
  },
  lineBreakStyle: {
    color: "#888",
    letterSpacing: -2,
  },
  dataNameStyle: {
    color: "gray",
    letterSpacing: 1,
    fontSize: 16,
  },
});
