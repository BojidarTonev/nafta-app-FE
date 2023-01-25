import {Pressable} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NAFTA_APP_CONSTANTS} from '../constants';
import {HomeScreen} from "../screens/HomeScreen";
import {FuelsScreen} from "../screens/FuelsScreen";
import {GasStationsScreen} from "../screens/GasStationsScreen";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import { faDollarSign, faGasPump, faFire, faBars } from '@fortawesome/fontawesome-free-solid';
import {useNavigation} from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export const NavigationTabs = () => {
    const navigation = useNavigation();

    const settingIcon = () => (
        <Pressable onPress={() => navigation.navigate(NAFTA_APP_CONSTANTS.SCREENS.SETTINGS_SCREEN)} style={{marginRight: 20, marginTop: 20}}>
            <FontAwesomeIcon icon={faBars} color="white" size={30} />
        </Pressable>
    )

    const navigationTabSharedProps = {
        headerTitleAlign: 'center',
        headerTitleStyle: { fontSize: 30, color: NAFTA_APP_CONSTANTS.COLORS.ACTIVE_COLOR, marginTop: 20, fontWeight: 'bold' },
        headerTintColor: '#ffffff',
        headerTransparent: true,
        headerRight: settingIcon
    };

    return(<Tab.Navigator
        initialRouteName={NAFTA_APP_CONSTANTS.SCREENS.HOME_SCREEN}
        screenOptions={{
            tabBarStyle: { position: 'absolute', backgroundColor: '#000000', height: 60 },
            tabBarActiveTintColor: NAFTA_APP_CONSTANTS.COLORS.ACTIVE_COLOR,
            tabBarShowLabel: false,
        }}>
        <Tab.Screen
            name={NAFTA_APP_CONSTANTS.SCREENS.HOME_SCREEN}
            component={HomeScreen}
            initialParams={{subTitle: 'Find the best gas price in your region'}}
            options={{
                title: 'Welcome',
                ...navigationTabSharedProps,
                tabBarIcon: ({ color, size }) => (
                    <FontAwesomeIcon icon={faDollarSign} color={color} size={size} />
                )
            }}
        />
        <Tab.Screen
            name={NAFTA_APP_CONSTANTS.SCREENS.FUELS_SCREEN}
            component={FuelsScreen}
            options={{
                title: 'Fuels',
                ...navigationTabSharedProps,
                tabBarIcon: ({ color, size}) => (
                    <FontAwesomeIcon icon={faFire} color={color} size={size} />
                )
            }}
        />
        <Tab.Screen
            name={NAFTA_APP_CONSTANTS.SCREENS.GAS_STATIONS_SCREEN}
            component={GasStationsScreen}
            options={{
                title: 'Gas Stations',
                ...navigationTabSharedProps,
                tabBarIcon: ({color, size}) => (
                    <FontAwesomeIcon icon={faGasPump} color={color} size={size} />
                )
            }}
        />
    </Tab.Navigator>)
}