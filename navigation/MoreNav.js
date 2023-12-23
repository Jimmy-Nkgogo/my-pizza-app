import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MoreIntro from "../screens/More Screens/MoreIntro";
import ViewAccount from "../screens/More Screens/ViewAccount";
import OrderHistory from "../screens/More Screens/OrderHistory";
import Favourites from "../screens/More Screens/Favourites";
import SavedAddresses from "../screens/More Screens/SavedAddresses";
import SavedCards from "../screens/More Screens/SavedCards";
import CustomerService from "../screens/More Screens/CustomerService";
import EditAccount from "../screens/More Screens/EditAccount";

const Stack = createNativeStackNavigator();

const MoreNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="MoreIntro"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="MoreIntro" component={MoreIntro} />
      <Stack.Screen name="ViewAccount" component={ViewAccount} />
      <Stack.Screen name="EditAccount" component={EditAccount} />
      <Stack.Screen name="OrderHistory" component={OrderHistory} />
      <Stack.Screen name="Favourites" component={Favourites} />
      <Stack.Screen name="SavedAddresses" component={SavedAddresses} />
      <Stack.Screen name="SavedCards" component={SavedCards} />
      <Stack.Screen name="CustomerService" component={CustomerService} />
    </Stack.Navigator>
  );
};

export default MoreNav;
