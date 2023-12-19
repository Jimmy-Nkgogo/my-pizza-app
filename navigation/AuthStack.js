import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterNav from "./RegisterNav";
import Login from "../screens/Login";
import { Button } from "react-native-elements";
import { TouchableOpacity } from "react-native";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen name="Login" component={Login}
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
