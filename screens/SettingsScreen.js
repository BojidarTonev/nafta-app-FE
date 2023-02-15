import {Text, StyleSheet} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import {NAFTA_APP_CONSTANTS} from "../constants";

export const SettingsScreen = () => {
    return (<LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={[NAFTA_APP_CONSTANTS.COLORS.BACKGROUND_COLOR_DARK, NAFTA_APP_CONSTANTS.COLORS.BACKGROUND_COLOR_ORANGE]}
        style={styles.container}>
            <Text style={styles.buttonText}>
                Settings Screen
            </Text>
    </LinearGradient>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(24,24,24,1)',
        alignItems: 'center'
    }
})