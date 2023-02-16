import {createStackNavigator} from "@react-navigation/stack";
import {NAFTA_APP_CONSTANTS} from "../../constants";
import {SettingsScreen} from "../../screens/SettingsScreen";
import {AccountSettingsScreen} from "../../screens/AccountSettingsScreen";
import {ReportAProblemScreen} from "../../screens/ReportAProblemScreen";
import {AboutSettingsScreen} from "../../screens/AboutSettingsScreen";
import {NotificationsScreen} from "../../screens/NotificationsScreen";
import {ManageAdsScreen} from "../../screens/ManageAdsScreen";
import {WinAwardsScreen} from "../../screens/WinAwardsScreen";

const sharedSettingsStackNavigatorProps = {
    headerShown: false,
};

const SettingsStackNavigator = createStackNavigator();

export const SettingsStackScreen = () => (
    <SettingsStackNavigator.Navigator initialRouteName={NAFTA_APP_CONSTANTS.SCREENS.SETTINGS_SCREEN}>
        <SettingsStackNavigator.Screen
            name={NAFTA_APP_CONSTANTS.SCREENS.SETTINGS_SCREEN}
            component={SettingsScreen}
            options={{
                ...sharedSettingsStackNavigatorProps
            }}
        />
        <SettingsStackNavigator.Screen
            name={NAFTA_APP_CONSTANTS.SCREENS.ACCOUNT_SETTINGS_SCREEN}
            component={AccountSettingsScreen}
            options={{
                ...sharedSettingsStackNavigatorProps
            }}
        />
        <SettingsStackNavigator.Screen
            name={NAFTA_APP_CONSTANTS.SCREENS.REPORT_A_PROBLEM_SCREEN}
            component={ReportAProblemScreen}
            options={{
                ...sharedSettingsStackNavigatorProps
            }}
        />
        <SettingsStackNavigator.Screen
            name={NAFTA_APP_CONSTANTS.SCREENS.ABOUT_SETTINGS_SCREEN}
            component={AboutSettingsScreen}
            options={{
                ...sharedSettingsStackNavigatorProps
            }}
        />
        <SettingsStackNavigator.Screen
            name={NAFTA_APP_CONSTANTS.SCREENS.NOTIFICATIONS_SETTINGS_SCREEN}
            component={NotificationsScreen}
            options={{
                ...sharedSettingsStackNavigatorProps
            }}
        />
        <SettingsStackNavigator.Screen
            name={NAFTA_APP_CONSTANTS.SCREENS.MANAGE_ADDS_SETTINGS_SCREEN}
            component={ManageAdsScreen}
            options={{
                ...sharedSettingsStackNavigatorProps
            }}
        />
        <SettingsStackNavigator.Screen
            name={NAFTA_APP_CONSTANTS.SCREENS.WIN_AWARDS_SETTINGS_SCREEN}
            component={WinAwardsScreen}
            options={{
                ...sharedSettingsStackNavigatorProps
            }}
        />
    </SettingsStackNavigator.Navigator>
);