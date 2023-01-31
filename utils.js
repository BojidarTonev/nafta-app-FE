import {getFocusedRouteNameFromRoute} from "@react-navigation/native";
import {NAFTA_APP_CONSTANTS} from "./constants";

export const getPositiveNegativeNumberColor = (number) => {
    if(number === 0) return 'white';
    else if (number > 0) return 'green';
    else return 'red';
};

export const transformMarketNumber = (number) => {
    if(number === 0) return '0.00';
    else if (number > 0) return `+${number.toFixed(2)}`;
    else return number.toFixed(2)
};

export const getHeaderTitle = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? NAFTA_APP_CONSTANTS.SCREENS.HOME_SCREEN;

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
            // return route.params?.fuelType || 'Test';
            return 'Fuel Details';
        case NAFTA_APP_CONSTANTS.SCREENS.SETTINGS_SCREEN:
            return 'Settings';
        case NAFTA_APP_CONSTANTS.SCREENS.GAS_STATIONS_SCREEN:
            return 'Gas Companies';
        case NAFTA_APP_CONSTANTS.SCREENS.GAS_STATIONS_DETAILS_SCREEN:
            // return route.params?.companyName || 'Test';
            return 'Gas Company Details';
        default:
            return 'Ebasi';
    }
}