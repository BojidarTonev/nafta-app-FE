import {Text, View, StyleSheet, Image, Pressable} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import {NAFTA_APP_CONSTANTS} from "../constants";

export const SearchResultDetailsScreen = ({navigation, route}) => {
    const {fuelType, fuelPrice, gasStationLocation, radius} = route.params;

    const onOpenInMapsButtonPress = () => {
        console.log('opening in maps!');
    }

    return(<LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={[NAFTA_APP_CONSTANTS.COLORS.BACKGROUND_COLOR_DARK, NAFTA_APP_CONSTANTS.COLORS.BACKGROUND_COLOR_ORANGE]}
        style={styles.container}>
            <Image source={require('../assets/shell-logo.png')} style={{width: 200, height: 190, alignSelf: 'center', marginTop: 140}} />
            <View style={styles.informationContainer}>
                <View style={styles.containerRow}>
                    <Text style={styles.containerRowKeyText}>{fuelType} Price:</Text>
                    <Text style={styles.containerRowKeyValue}>{fuelPrice}</Text>
                </View>
                <View style={styles.containerRow}>
                    <Text style={styles.containerRowKeyText}>Location:</Text>
                    <Text style={styles.containerRowKeyValue}>{gasStationLocation}</Text>
                </View>
                <View style={styles.containerRow}>
                    <Text style={styles.containerRowKeyText}>Radius:</Text>
                    <Text style={styles.containerRowKeyValue}>{radius}</Text>
                </View>
            </View>
            <Pressable title="Open in Maps" style={styles.actionButtonWrapper} onPress={onOpenInMapsButtonPress}>
                <Text style={styles.actionButtonText}>Open in Maps</Text>
            </Pressable>
    </LinearGradient>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    informationContainer: {
        backgroundColor: 'rgba(43,90,152,0.2)',
        padding: 15,
        marginHorizontal: 30,
        justifyContent: 'space-between',
        borderRadius: 15,
        marginTop: 50,
        elevation: 20
    },
    containerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 12
    },
    containerRowKeyText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    },
    containerRowKeyValue: {
        fontSize: 20,
        color: NAFTA_APP_CONSTANTS.COLORS.ACTIVE_COLOR
    },
    actionButtonWrapper: {
        backgroundColor: 'rgba(253, 166, 20, 0.8)',
        width: 200,
        alignSelf: 'center',
        padding: 20,
        marginTop: 30,
        borderRadius: 40
    },
    actionButtonText: {
        color: 'black',
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    }
})