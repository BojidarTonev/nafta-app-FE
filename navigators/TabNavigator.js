import {NAFTA_APP_CONSTANTS} from "../constants";
import {FuelStackScreen, GasStationsStackScreen, HomeStackScreen} from "./StackNavigators";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faDollarSign, faFire, faGasPump} from "@fortawesome/fontawesome-free-solid";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {settingIcon} from "../shared/settingIconComponent";
import {getHeaderTitle} from "../utils";

const navigationTabSharedProps = {
    headerTitleAlign: 'center',
    headerTitleStyle: { fontSize: 30, color: NAFTA_APP_CONSTANTS.COLORS.ACTIVE_COLOR, fontWeight: 'bold' },
    headerTransparent: true,
    headerRight: settingIcon,
};

const Tab = createBottomTabNavigator();

export const TabScreenNavigator = () => (
    <Tab.Navigator
        initialRouteName={NAFTA_APP_CONSTANTS.SCREENS.HOME_SCREEN}
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
                    tabBarIcon: ({color, size}) => (
                        <FontAwesomeIcon icon={faDollarSign} color={color} size={size}/>
                    ),
                    ...navigationTabSharedProps
                })}
            />
            <Tab.Screen
                name={NAFTA_APP_CONSTANTS.STACKS.FUELS_STACK}
                component={FuelStackScreen}
                options={({route}) => ({
                    headerTitle: getHeaderTitle(route),
                    tabBarIcon: ({color, size}) => (
                        <FontAwesomeIcon icon={faFire} color={color} size={size}/>
                    ),
                    ...navigationTabSharedProps
                })}
            />
            <Tab.Screen
                name={NAFTA_APP_CONSTANTS.STACKS.GAS_COMPANIES_STACK}
                component={GasStationsStackScreen}
                options={({route}) => ({
                    headerTitle: getHeaderTitle(route),
                    tabBarIcon: ({color, size}) => (
                        <FontAwesomeIcon icon={faGasPump} color={color} size={size}/>
                    ),
                    ...navigationTabSharedProps
                })}
            />
    </Tab.Navigator>
);