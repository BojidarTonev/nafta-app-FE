import {NAFTA_APP_CONSTANTS} from "../constants";
import {FuelStackScreen, GasCompaniesStackScreen, HomeStackScreen, SettingsStackScreen} from "./StackNavigators";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {getHeaderTitle} from "../utils";
import {FontAwesome, Ionicons, MaterialIcons} from "@expo/vector-icons";

const navigationTabSharedProps = {
    headerTitleAlign: 'center',
    headerTitleStyle: { fontSize: 35, color: NAFTA_APP_CONSTANTS.COLORS.ACTIVE_COLOR, fontFamily: 'HeadingBold', letterSpacing: 0.8 },
    headerTransparent: true
};

const Tab = createBottomTabNavigator();

export const TabScreenNavigator = () => (
    <Tab.Navigator
        // initialRouteName={NAFTA_APP_CONSTANTS.SCREENS.HOME_SCREEN}
        screenOptions={{
            tabBarStyle: {position: 'absolute', backgroundColor: '#000000', height: 60},
            tabBarActiveTintColor: NAFTA_APP_CONSTANTS.COLORS.ACTIVE_COLOR,
            tabBarShowLabel: false,
        }}>
            <Tab.Screen
                name={NAFTA_APP_CONSTANTS.STACKS.HOME_STACK}
                component={HomeStackScreen}
                options={({route}) => ({
                    headerTitle: getHeaderTitle(route),
                    tabBarIcon: ({color}) => (
                        <FontAwesome name="usd" size={30} color={color} />
                    ),
                    ...navigationTabSharedProps
                })}
            />
            <Tab.Screen
                name={NAFTA_APP_CONSTANTS.STACKS.FUELS_STACK}
                component={FuelStackScreen}
                options={({route}) => ({
                    headerTitle: getHeaderTitle(route),
                    tabBarIcon: ({color}) => (
                        <Ionicons name="flame" size={30} color={color} />
                    ),
                    ...navigationTabSharedProps
                })}
            />
            <Tab.Screen
                name={NAFTA_APP_CONSTANTS.STACKS.GAS_COMPANIES_STACK}
                component={GasCompaniesStackScreen}
                options={({route}) => ({
                    headerTitle: getHeaderTitle(route),
                    tabBarIcon: ({color}) => (
                        <MaterialIcons name="local-gas-station" size={30} color={color} />
                    ),
                    ...navigationTabSharedProps
                })}
            />
            <Tab.Screen
                name={NAFTA_APP_CONSTANTS.STACKS.SETTINGS_STACK}
                component={SettingsStackScreen}
                options={({route}) => ({
                    headerTitle: getHeaderTitle(route),
                    tabBarIcon: ({color}) => (
                        <Ionicons name="settings-sharp" size={30} color={color} />
                    ),
                    ...navigationTabSharedProps
                })}
            />
    </Tab.Navigator>
);
