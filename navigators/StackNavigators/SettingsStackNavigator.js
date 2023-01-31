import {createStackNavigator} from "@react-navigation/stack";
import {NAFTA_APP_CONSTANTS} from "../../constants";
import {SettingsScreen} from "../../screens/SettingsScreen";

const SettingsStack = createStackNavigator();

export const SettingsStackScreen = () => (
    <SettingsStack.Navigator>
        <SettingsStack.Screen
            name={NAFTA_APP_CONSTANTS.SCREENS.SETTINGS_SCREEN}
            component={SettingsScreen}
        />
    </SettingsStack.Navigator>
);