import {Text, StyleSheet} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';

export const SettingsScreen = () => {
    return(<LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['#0D324D', '#7F5A83']} style={{...styles.linearGradient}}>
        <Text style={styles.buttonText}>
            Sign in with Facebook
        </Text>
    </LinearGradient>)
}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {

    }
})