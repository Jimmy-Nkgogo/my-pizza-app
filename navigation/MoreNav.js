import { createNativeStackNavigator} from "@react-navigation/native-stack"
import ViewAccount from "../screens/MoreScreens/ViewAccount"
import OrderHistory from "../screens/MoreScreens/OrderHistory"
import Favourites from "../screens/MoreScreens/Favourites"
import SavedAddresses from "../screens/MoreScreens/SavedAddresses"
import SavedCards from "../screens/MoreScreens/SavedCards"
import CustomerSevice from "../screens/MoreScreens/CustomerSevice"


const Stack = createNativeStackNavigator()

const MoreNav = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen />
        </Stack.Navigator>
    )
}

export default MoreNav;