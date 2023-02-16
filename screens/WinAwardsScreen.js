import {LinearGradient} from "expo-linear-gradient";
import {NAFTA_APP_CONSTANTS} from "../constants";
import {StyleSheet, Text} from "react-native";

export const WinAwardsScreen = () => {
    return(<LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={[NAFTA_APP_CONSTANTS.COLORS.BACKGROUND_COLOR_DARK, NAFTA_APP_CONSTANTS.COLORS.BACKGROUND_COLOR_ORANGE]}
        style={styles.container}>
            <Text>Win Awards Screen</Text>
    </LinearGradient>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})