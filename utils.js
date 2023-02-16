import {getFocusedRouteNameFromRoute} from "@react-navigation/native";
import {NAFTA_APP_CONSTANTS} from "./constants";

export const getPositiveNegativeNumberColor = (number) => {
    if(number === 0 || !number) return 'white';
    else if (number > 0) return 'green';
    else return 'red';
};

export const transformMarketNumber = (number) => {
    if(number === 0 || !number) return '0.00';
    else if (number > 0) return `+${number.toFixed(2)}`;
    else return number.toFixed(2)
};

export const getHeaderTitle = (route) => {
    let routeName = getFocusedRouteNameFromRoute(route);

    if(!routeName) {
        if(route.name === NAFTA_APP_CONSTANTS.STACKS.HOME_STACK) routeName = NAFTA_APP_CONSTANTS.SCREENS.HOME_SCREEN;
        else if (route.name === NAFTA_APP_CONSTANTS.STACKS.FUELS_STACK) routeName = NAFTA_APP_CONSTANTS.SCREENS.FUELS_SCREEN;
        else if (route.name === NAFTA_APP_CONSTANTS.STACKS.GAS_COMPANIES_STACK) routeName = NAFTA_APP_CONSTANTS.SCREENS.GAS_COMPANIES_SCREEN;
        else if (route.name === NAFTA_APP_CONSTANTS.STACKS.SETTINGS_STACK) routeName = NAFTA_APP_CONSTANTS.SCREENS.SETTINGS_SCREEN;
    }

    switch(routeName) {
        case NAFTA_APP_CONSTANTS.SCREENS.HOME_SCREEN:
            return 'Welcome';
        case NAFTA_APP_CONSTANTS.SCREENS.SEARCH_RESULT_SCREEN:
            return 'Search Result';
        case NAFTA_APP_CONSTANTS.SCREENS.SEARCH_RESULT_DETAILS_SCREEN:
            return 'Result Details';
        case NAFTA_APP_CONSTANTS.SCREENS.FUELS_SCREEN:
            return 'Fuels';
        case NAFTA_APP_CONSTANTS.SCREENS.FUELS_DETAILS_SCREEN:
            return route.params?.fuelName || 'Fuel Details';
        case NAFTA_APP_CONSTANTS.SCREENS.SETTINGS_SCREEN:
            return 'Settings';
        case NAFTA_APP_CONSTANTS.SCREENS.GAS_COMPANIES_SCREEN:
            return 'Gas Companies';
        case NAFTA_APP_CONSTANTS.SCREENS.GAS_COMPANIES_DETAILS_SCREEN:
            return route.params?.gasCompanyName || 'Gas Company Details';
        case NAFTA_APP_CONSTANTS.SCREENS.GAS_STATION_DETAILS_SCREEN:
            return route.params?.gasStationName || 'Gas Station Details';
        case NAFTA_APP_CONSTANTS.SCREENS.ACCOUNT_SETTINGS_SCREEN:
            return 'Account Settings';
        case NAFTA_APP_CONSTANTS.SCREENS.REPORT_A_PROBLEM_SCREEN:
            return 'Report Problem';
        case NAFTA_APP_CONSTANTS.SCREENS.ABOUT_SETTINGS_SCREEN:
            return 'About us';
        case NAFTA_APP_CONSTANTS.SCREENS.NOTIFICATIONS_SETTINGS_SCREEN:
            return 'Manage Notifications';
        case NAFTA_APP_CONSTANTS.SCREENS.WIN_AWARDS_SETTINGS_SCREEN:
            return 'Win Awards';
        case NAFTA_APP_CONSTANTS.SCREENS.MANAGE_ADDS_SETTINGS_SCREEN:
            return 'Manage Ads';
        default:
            return 'Ebasi';
    }
}