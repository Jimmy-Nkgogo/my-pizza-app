import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterNav from "../screens/RegisterNav";
import Login from "../screens/Login";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="RegisterNav" component={RegisterNav} />
    </Stack.Navigator>
  );
};

export default AuthStack;
