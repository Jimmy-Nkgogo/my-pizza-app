import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Card } from "react-native-shadow-cards";
import { useNavigation } from "@react-navigation/native";

const ImageComponent = ({ title, image, location }) => {
  const navigation = useNavigation();
  return (
    <Card style={styles.cardStyle}>
      <TouchableOpacity
        style={styles.btnStyle}
        onPress={() => navigation.navigate(location)}
      >
        <Text style={styles.picText}>{title}</Text>
        <Image
          source={image}
          style={{
            height: "100%",
            width: "100%",
            backgroundColor: "gray",
            borderRadius: 12,
          }}
        />
      </TouchableOpacity>
    </Card>
  );
};

ImageComponent.defaultProps = {
  title: "Pizza",
};

export default ImageComponent;

const styles = StyleSheet.create({
  picText: {
    fontWeight: "900",
    marginVertical: 10,
    fontSize: 18,
    letterSpacing: 1,
  },
  btnStyle: {
    width: "100%",
    borderRadius: 12,
    height: 120,
    alignItems: "center",
    backgroundColor: "Whitesmoke",
  },
  cardStyle: {
    paddingHorizontal: 5,
    width: '45%',
    height: 170,
    borderRadius: 12,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  
});
