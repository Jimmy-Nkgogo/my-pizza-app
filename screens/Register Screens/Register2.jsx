import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { updateDietaryRequirements } from "../../redux/features/UsersSlice";

const Register2 = ({ navigation, route }) => {
  const [dietaryReq, setDietaryReq] = useState([
    {
      id: 1,
      req: "Halaal",
      checked: false,
    },
    {
      id: 2,
      req: "Vegetaian",
      checked: false,
    },
    {
      id: 3,
      req: "No Garlic",
      checked: false,
    },
    {
      id: 4,
      req: "No Chilli",
      checked: false,
    },
    {
      id: 5,
      req: "none",
      checked: true,
    },
  ]);
  const [selectedRequirements, setSelectedRequirements] = useState([]);

  const dispatch = useDispatch();
  const { userDetails } = route.params;

  const handleCheck = (id) => {
    console.log(id);
    const listItems = dietaryReq.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setDietaryReq(listItems);

    const selectedReq = listItems
      .filter((item) => item.checked)
      .map((item) => item.req);
    setSelectedRequirements(selectedReq);
  };
  const handleSubmit = () => {
    console.log(selectedRequirements);
    // Navigate to the next screen (ThirdScreen) and pass userDetails and dietReq as params
    dispatch(
      updateDietaryRequirements({
        userId: userDetails.id,
        dietReq: selectedRequirements,
      })
    );
    navigation.navigate("Register3", {
      userDetails: { ...userDetails },
    });
    console.log(userDetails);
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View>
        <TouchableOpacity
          style={styles.btnLogin}
          onPress={() => navigation.navigate("LoginNav")}
        >
          <Text style={{ color: "white" }}>LOGIN INSTEAD</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.numbers}>
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
      {/* Inputs are here */}
      <View style={styles.main}>
        <Text style={styles.headerText}>MY DIETARY REQUIREMENTS</Text>
        <Text>Select your dietary requirements below.</Text>
        <View style={{ marginVertical: 15 }}></View>

        <ScrollView style={{ width: "100%", flex: 1, marginVertical: 10 }}>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            {dietaryReq.map((item) => (
              <TouchableOpacity
                key={item.id}
                onPress={() => handleCheck(item.id)}
                style={styles.inputStyle}
              >
                <Text>{item.req}</Text>
                {item.checked ? (
                  <AntDesign name="check" size={30} color="green" />
                ) : null}
              </TouchableOpacity>
            ))}

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
              <TouchableOpacity onPress={handleSubmit} style={styles.btnNext}>
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: 18,
                    textAlign: "center",
                    letterSpacing: 1,
                  }}
                >
                  NEXT
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Register2;

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
  inActiveNumber: {
    borderColor: "#333",
    borderRadius: 20,
    width: 25,
    borderWidth: 1,
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
    width: "50%",
    height: 48,
    marginVertical: 10,
    backgroundColor: "#eee",
    borderRadius: 10,
    paddingHorizontal: 10,
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
});
