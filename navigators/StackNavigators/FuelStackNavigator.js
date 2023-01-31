import {createStackNavigator} from "@react-navigation/stack";
import {NAFTA_APP_CONSTANTS} from "../../constants";
import {FuelsScreen} from "../../screens/FuelsScreen";
import {FuelDetailsScreen} from "../../screens/FuelDetailsScreen";

const sharedFuelStackNavigatorProps = {
    headerShown: false,
};

const FuelStack = createStackNavigator();

export const FuelStackScreen = () => (
    <FuelStack.Navigator initialRouteName={NAFTA_APP_CONSTANTS.SCREENS.FUELS_SCREEN}>
        <FuelStack.Screen
            name={NAFTA_APP_CONSTANTS.SCREENS.FUELS_SCREEN}
            component={FuelsScreen}
            options={{
                ...sharedFuelStackNavigatorProps
            }}
        />
        <FuelStack.Screen
            name={NAFTA_APP_CONSTANTS.SCREENS.FUELS_DETAILS_SCREEN}
            component={FuelDetailsScreen}
            options={{
                ...sharedFuelStackNavigatorProps
            }}
        />
        {/*<FuelStack.Screen name={NAFTA_APP_CONSTANTS.SCREENS.SETTINGS_SCREEN} component={SettingsScreen} options={{...sharedFuelStackNavigatorProps}} />*/}
    </FuelStack.Navigator>
);