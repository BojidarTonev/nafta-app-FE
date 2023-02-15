import {createStackNavigator} from "@react-navigation/stack";
import {NAFTA_APP_CONSTANTS} from "../../constants";
import {GasCompaniesScreen} from "../../screens/GasCompaniesScreen";
import {GasCompaniesDetailsScreen} from "../../screens/GasCompaniesDetailsScreen";
import {GasStationDetailsScreen} from "../../screens/GasStationDetailsScreen";

const sharedGasCompaniesStackNavigatorProps = {
    headerShown: false,
};

const GasSCompaniesStack = createStackNavigator();

export const GasCompaniesStackScreen = () => (
    <GasSCompaniesStack.Navigator initialRouteName={NAFTA_APP_CONSTANTS.SCREENS.GAS_COMPANIES_SCREEN}>
        <GasSCompaniesStack.Screen
            name={NAFTA_APP_CONSTANTS.SCREENS.GAS_COMPANIES_SCREEN}
            component={GasCompaniesScreen}
            options={{
                ...sharedGasCompaniesStackNavigatorProps,
            }}
        />
        <GasSCompaniesStack.Screen
            name={NAFTA_APP_CONSTANTS.SCREENS.GAS_COMPANIES_DETAILS_SCREEN}
            component={GasCompaniesDetailsScreen}
            options={{
                ...sharedGasCompaniesStackNavigatorProps,
            }}
        />
        <GasSCompaniesStack.Screen
            name={NAFTA_APP_CONSTANTS.SCREENS.GAS_STATION_DETAILS_SCREEN}
            component={GasStationDetailsScreen}
            options={{
                ...sharedGasCompaniesStackNavigatorProps
            }}
        />
    </GasSCompaniesStack.Navigator>
);