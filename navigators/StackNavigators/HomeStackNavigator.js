import {createStackNavigator} from "@react-navigation/stack";
import {NAFTA_APP_CONSTANTS} from "../../constants";
import {HomeScreen} from "../../screens/HomeScreen";
import {SearchResultScreen} from "../../screens/SearchResultScreen";
import {SearchResultDetailsScreen} from "../../screens/SearchResultDetailsScreen";

const sharedHomeStackNavigatorProps = {
    headerShown: false,
};

const HomeStack = createStackNavigator();

export const HomeStackScreen = () => (
    <HomeStack.Navigator initialRouteName={NAFTA_APP_CONSTANTS.SCREENS.HOME_SCREEN}>
        <HomeStack.Screen
            name={NAFTA_APP_CONSTANTS.SCREENS.HOME_SCREEN}
            component={HomeScreen}
            initialParams={{subTitle: 'Find the best gas price in your region'}}
            options={{
                ...sharedHomeStackNavigatorProps
            }}
        />
        <HomeStack.Screen
            name={NAFTA_APP_CONSTANTS.SCREENS.SEARCH_RESULT_SCREEN}
            component={SearchResultScreen}
            options={{
                // headerBackImage: () => (<FontAwesomeIcon icon={faArrowLeft} size={30} style={{marginTop: 50}} color={'pink'} />),
                ...sharedHomeStackNavigatorProps
            }}
        />
        <HomeStack.Screen
            name={NAFTA_APP_CONSTANTS.SCREENS.SEARCH_RESULT_DETAILS_SCREEN}
            component={SearchResultDetailsScreen}
            options={{
                ...sharedHomeStackNavigatorProps
            }}
        />
        {/*<HomeStack.Screen name={NAFTA_APP_CONSTANTS.SCREENS.SETTINGS_SCREEN} component={SettingsScreen} options={{...sharedHomeStackNavigatorProps}} />*/}
    </HomeStack.Navigator>
);