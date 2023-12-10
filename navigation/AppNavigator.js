import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../screens/SplashScreen";
import MenuScreen from "../screens/MenuScreen";
import CartScreen from "../screens/CartScreen";
import Stores from "../screens/Stores";
import Login from "../screens/Login";
import Register from "../screens/Register";
import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="BottomTabs" component={BottomTabs} />
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "black",
      }}
    >
      <Tab.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="book" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="shoppingcart" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Stores"
        component={Stores}
        options={{
          tabBarIcon: ({ color }) => (
            <EvilIcons name="location" size={34} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Register"
        component={Register}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="pencil-sharp" size={24} color={color} />
          ),
          headerTitle: "Register",
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
