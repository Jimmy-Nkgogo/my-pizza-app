import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dessert from "../screens/MenuScreens/Dessert";
import Drinks from "../screens/MenuScreens/Drinks";
import Pasta from "../screens/MenuScreens/Pasta";
import Pizza from "../screens/MenuScreens/Pizza";
import PizzaPies from "../screens/MenuScreens/PizzaPies";
import Salads from "../screens/MenuScreens/Salads";
import SavaFlava from "../screens/MenuScreens/SavaFlava";
import Starters from "../screens/MenuScreens/Starters";
import MenuScreen from "../screens/MenuScreen";

const StackNavigator = createNativeStackNavigator();

const MenuNav = () => {
  return (
    <StackNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <StackNavigator.Screen name="MenuScreen" component={MenuScreen} />
      <StackNavigator.Screen name="Dessert" component={Dessert} />
      <StackNavigator.Screen name="Drinks" component={Drinks} />
      <StackNavigator.Screen name="Pasta" component={Pasta} />
      <StackNavigator.Screen name="Pizza" component={Pizza} />
      <StackNavigator.Screen name="PizzaPies" component={PizzaPies} />
      <StackNavigator.Screen name="Salads" component={Salads} />
      <StackNavigator.Screen name="SavaFlava" component={SavaFlava} />
      <StackNavigator.Screen name="Starters" component={Starters} />
    </StackNavigator.Navigator>
  );
};

export default MenuNav;
