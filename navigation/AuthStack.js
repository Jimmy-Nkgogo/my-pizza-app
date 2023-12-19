import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterNav from "./RegisterNav";
import Login from "../screens/Login";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen name="Login" component={Login}
        options={{
          headerShown: false
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
