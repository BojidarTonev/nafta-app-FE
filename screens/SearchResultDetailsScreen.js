import {Text, View, StyleSheet, Image, Pressable, Linking, Platform} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import {NAFTA_APP_CONSTANTS} from "../constants";

export const SearchResultDetailsScreen = ({navigation, route}) => {
    const {fuelType, fuelPrice, gasStationLocation, radius, companyName, lat, lon} = route.params;

    const onOpenInMapsButtonPress = () => {
        const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
        const latLng = `${lat},${lon}`;
        const label = 'Open in maps...';
        const url = Platform.select({
            ios: `${scheme}${label}@${latLng}`,
            android: `${scheme}${latLng}(${label})`
        });

        Linking.openURL(url);
    }

    return(<LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={[NAFTA_APP_CONSTANTS.COLORS.BACKGROUND_COLOR_DARK, NAFTA_APP_CONSTANTS.COLORS.BACKGROUND_COLOR_ORANGE]}
        style={styles.container}>
            <Image source={{uri: `http://origin.stg.cld.vcdn.data.here.com/p/d/autox_stg/dt/icons/2015-05-06/${companyName.toLowerCase()}.png`}} style={{width: 200, height: 190, alignSelf: 'center', marginTop: 100}} />
            <View style={styles.informationContainer}>
                <View style={styles.containerRow}>
                    <Text style={styles.containerRowKeyText}>{fuelType} Price:</Text>
                    <Text style={styles.containerRowKeyValue}>{fuelPrice}</Text>
                </View>
                <View style={styles.containerRow}>
                    <Text style={styles.containerRowKeyText}>Location:</Text>
                    <Text style={{flex: 1, textAlign: 'right', ...styles.containerRowKeyValue}} numberOfLines={2} ellipsizeMode="tail">{gasStationLocation}</Text>
                </View>
                <View style={styles.containerRow}>
                    <Text style={styles.containerRowKeyText}>Distance:</Text>
                    <Text style={styles.containerRowKeyValue}>{radius.toFixed(2)}km</Text>
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
        marginTop: 30,
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
        fontWeight: 'bold',
        marginRight: 15
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