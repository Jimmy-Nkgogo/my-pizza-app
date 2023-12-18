import { createStackNavigator } from "@react-navigation/stack";
import Register1 from "../screens/RegisterScreens/Register1";
import Register2 from "../screens/RegisterScreens/Register2";
import Register3 from "../screens/RegisterScreens/Register3";

const Stack = createStackNavigator();

const RegisterNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Register1" component={Register1} />
      <Stack.Screen name="Register2" component={Register2} />
      <Stack.Screen name="Register3" component={Register3} />
    </Stack.Navigator>
  );
};

export default RegisterNav;
