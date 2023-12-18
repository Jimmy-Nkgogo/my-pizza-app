import { createStackNavigator } from "@react-navigation/stack";
import RegisterNav from "../screens/RegisterNav";
import Login from "../screens/Login";

const Stack = createStackNavigator();

const AuthStack = () => {
  <Stack.Navigator screenOptions={{}}>
    <Stack.Screen name="RegisterNav" component={RegisterNav} />
    <Stack.Screen name="Login" component={Login} />
  </Stack.Navigator>;
};

export default AuthStack;
