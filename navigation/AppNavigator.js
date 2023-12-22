import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/SplashScreen";
import MenuScreen from "../screens/MenuScreen";
import CartScreen from "../screens/CartScreen";
import Stores from "../screens/Stores";
import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import AuthStack from "./AuthStack";
import More from "../screens/More";
import MoreNav from "./MoreNav";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="BottomTabs" component={BottomTabs} />
      </Stack.Navigator>
    </>
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
        name="MenuScreen"
        component={MenuScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="book" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="CartSceen"
        component={CartScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="shoppingcart" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="StoresScreen"
        component={Stores}
        options={{
          tabBarIcon: ({ color }) => (
            <EvilIcons name="location" size={34} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="MoreNav"
        component={MoreNav}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="menu" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
