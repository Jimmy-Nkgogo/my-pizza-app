import { createNativeStackNavigator} from "@react-navigation/native-stack"
import ViewAccount from "../screens/MoreScreens/ViewAccount"
import OrderHistory from "../screens/MoreScreens/OrderHistory"
import Favourites from "../screens/MoreScreens/Favourites"
import SavedAddresses from "../screens/MoreScreens/SavedAddresses"
import SavedCards from "../screens/MoreScreens/SavedCards"
import CustomerService from "../screens/MoreScreens/CustomerService"


const Stack = createNativeStackNavigator()

const MoreNav = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ViewAccount" component={ViewAccount}/>
            <Stack.Screen name="OrderHistory" component={OrderHistory}/>
            <Stack.Screen name="Favourites" component={Favourites}/>
            <Stack.Screen name="SavedAddresses" component={SavedAddresses}/>
            <Stack.Screen name="SavedCards" component={SavedCards}/>
            <Stack.Screen name="CustomerService" component={CustomerService}/>
        </Stack.Navigator>
    )
}

export default MoreNav;