import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterNav from "./RegisterNav";
import LoginNav from "./LoginNav";
import { Button } from "react-native-elements";
import { TouchableOpacity } from "react-native";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen name="LoginNav" component={LoginNav}
        options={{
          headerLeft: () => (
            <TouchableOpacity />
          ),
          title: ''
        }}
      />
      <Stack.Screen name="RegisterNav" component={RegisterNav}
        options={{
          title: 'Register',
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
