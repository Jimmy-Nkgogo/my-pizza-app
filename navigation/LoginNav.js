import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login Screens/Login";
import ForgotPassword from "../screens/Login Screens/ForgotPassword";

const Stack = createNativeStackNavigator();

const LoginNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
};

export default LoginNav;
