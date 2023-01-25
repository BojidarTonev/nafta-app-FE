import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {NAFTA_APP_CONSTANTS} from "./constants";
import {SettingsScreen} from "./screens/SettingsScreen";
import {RootScreen} from "./screens/RootScreen";
import {FuelDetailsScreen} from "./screens/FuelDetailsScreen";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import { faAngleLeft } from '@fortawesome/fontawesome-free-solid';
import {GasStationDetailsScreen} from "./screens/GasStationDetailsScreen";
import {SearchResultScreen} from "./screens/SearchResultScreen";
import {SearchResultDetailsScreen} from "./screens/SearchResultDetailsScreen";

const Stack = createStackNavigator();

const screenDetailsHeaderOptions = {
    headerBackImage: () => <FontAwesomeIcon icon={faAngleLeft} size={30} color={NAFTA_APP_CONSTANTS.COLORS.ACTIVE_COLOR} style={{marginTop: 30}} />,
    headerTransparent: true,
    headerTitleAlign: 'center',
    headerTitleStyle: { fontSize: 30, marginTop: 20, fontWeight: 'bold' },
    headerTintColor: '#ffffff'
};

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
            {/*ROOT SCREEN INCLUDES TAB NAVIGATION*/}
            <Stack.Screen
                name={NAFTA_APP_CONSTANTS.SCREENS.ROOT_SCREEN}
                component={RootScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen name={NAFTA_APP_CONSTANTS.SCREENS.SETTINGS_SCREEN} component={SettingsScreen} />
            <Stack.Screen
                name={NAFTA_APP_CONSTANTS.SCREENS.FUELS_DETAILS_SCREEN}
                component={FuelDetailsScreen}
                options={({route}) => ({
                    title: route.params.fuelName,
                    ...screenDetailsHeaderOptions
                })}
            />
            <Stack.Screen
                name={NAFTA_APP_CONSTANTS.SCREENS.GAS_STATIONS_DETAILS_SCREEN}
                component={GasStationDetailsScreen}
                options={({route}) => ({
                    title: route.params.companyName,
                    ...screenDetailsHeaderOptions
                })}
            />
            <Stack.Screen
                name={NAFTA_APP_CONSTANTS.SCREENS.SEARCH_RESULT_SCREEN}
                component={SearchResultScreen}
                options={() => ({
                    title: "Search Results",
                    ...screenDetailsHeaderOptions
                })}
            />
            <Stack.Screen
                name={NAFTA_APP_CONSTANTS.SCREENS.SEARCH_RESULT_DETAILS_SCREEN}
                component={SearchResultDetailsScreen}
                options={({route}) => ({
                    title: route.params.companyName.toUpperCase(),
                    ...screenDetailsHeaderOptions
                })}
            />
        </Stack.Navigator>
      </NavigationContainer>
  );
}