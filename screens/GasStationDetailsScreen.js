import {StyleSheet, Text} from "react-native";
import {NAFTA_APP_CONSTANTS} from "../constants";
import {LinearGradient} from "expo-linear-gradient";

export const GasStationDetailsScreen = () => {
    return(<LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={[NAFTA_APP_CONSTANTS.COLORS.BACKGROUND_COLOR_DARK, NAFTA_APP_CONSTANTS.COLORS.BACKGROUND_COLOR_ORANGE]}
        style={styles.container}>
            <Text>gas station details screen</Text>
    </LinearGradient>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(24,24,24,1)',
        alignItems: 'center'
    }
});