import {createStackNavigator} from "@react-navigation/stack";
import {NAFTA_APP_CONSTANTS} from "../../constants";
import {GasStationsScreen} from "../../screens/GasStationsScreen";
import {GasStationDetailsScreen} from "../../screens/GasStationDetailsScreen";

const sharedGasCompaniesStackNavigatorProps = {
    headerShown: false,
};

const GasSCompaniesStack = createStackNavigator();

export const GasStationsStackScreen = () => (
    <GasSCompaniesStack.Navigator>
        <GasSCompaniesStack.Screen
            name={NAFTA_APP_CONSTANTS.SCREENS.GAS_STATIONS_SCREEN}
            component={GasStationsScreen}
            options={{
                ...sharedGasCompaniesStackNavigatorProps
            }}
        />
        <GasSCompaniesStack.Screen
            name={NAFTA_APP_CONSTANTS.SCREENS.GAS_STATIONS_DETAILS_SCREEN}
            component={GasStationDetailsScreen}
            options={({route}) => ({
                // title: route.params.companyName,
                ...sharedGasCompaniesStackNavigatorProps
            })}
        />
    </GasSCompaniesStack.Navigator>
);