import {Text, View, StyleSheet, Image, ScrollView} from "react-native";
import {NAFTA_APP_CONSTANTS} from "../constants";
import {getPositiveNegativeNumberColor, transformMarketNumber} from "../utils";
import {LinearGradient} from 'expo-linear-gradient';

const sampleGasCompanyDetailsData = {
    fuels: [
        {fuelType: 'Propane-Butane', averagePrice: 2.03, margin: 0.05, imageSrc: require('../assets/a95.png') },
        {fuelType: 'Gasoline A95', averagePrice: 2.14, margin: 0.02, imageSrc: require('../assets/a95.png') },
        {fuelType: 'Gasoline A100', averagePrice: 2.79, margin: 0.00, imageSrc: require('../assets/a100.png') },
        {fuelType: 'Diesel Premium', averagePrice: 2.79, margin: 0.02, imageSrc: require('../assets/a100.png') },
        {fuelType: 'Diesel', averagePrice: 2.86, margin: -0.01, imageSrc: require('../assets/diesel.png') }],
    companyPhoneNumber: '+359 867 259 132',
    companyEmail: 'office@gascompany.bg',
    companyWebsite: 'gascompany.bg',
    numberOfStations: 7
};

export const GasStationDetailsScreen = ({navigation, route}) => {
    return(<LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={[NAFTA_APP_CONSTANTS.COLORS.BACKGROUND_COLOR_DARK, NAFTA_APP_CONSTANTS.COLORS.BACKGROUND_COLOR_ORANGE]}
        style={styles.container}>
        <View style={styles.toggleButtonWrapper}>
            <Text style={{...styles.toggleButton, ...styles.activeToggleButton}}>Details</Text>
            <Text style={styles.toggleButton}>Gas Stations</Text>
        </View>
        <Image source={require('../assets/eko-logo.png')} style={{height: 170, width: 170, marginVertical: 40, borderRadius: 15}} />
        <ScrollView style={{width: '100%'}}>
            {sampleGasCompanyDetailsData.fuels.map((fuel, index) => {
                const { fuelType, averagePrice, margin, imageSrc } = fuel;
                const isLast = index === sampleGasCompanyDetailsData.fuels.length - 1;

                return(<View key={`fuel-type-key-${index}`} style={{...styles.fuelRow, marginBottom: isLast ? 30 : 15}}>
                    <View style={{flexDirection: 'row'}}>
                        <Image source={imageSrc} style={{height: 30, width: 30, marginRight: 10}} />
                        <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>{fuelType}</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 20, color: getPositiveNegativeNumberColor(margin), fontWeight: 'bold'}}>
                            {averagePrice}
                        </Text>
                        <Text style={{fontSize: 15, paddingLeft: 5, color: getPositiveNegativeNumberColor(margin)}}>
                            {margin !== 0 && transformMarketNumber(margin)}
                        </Text>
                    </View>
                </View>)
            })}
            <Text style={styles.additionalInformation}>Additional Information</Text>
        </ScrollView>
    </LinearGradient>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(24,24,24,1)',
        alignItems: 'center'
    },
    toggleButtonWrapper: {
        marginTop: 100,
        flexDirection: 'row',
        justifyContent: "center",
    },
    toggleButton: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white'
    },
    activeToggleButton: {
        backgroundColor: NAFTA_APP_CONSTANTS.COLORS.ACTIVE_COLOR,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginRight: 20
    },
    fuelRow: {
        backgroundColor: 'rgba(100,79,60,0.4)',
        padding: 15,
        marginHorizontal: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 10,
        marginTop: 10,
        elevation: 10
    },
    additionalInformation: {
        marginBottom: 80,
        alignSelf: 'center',
        fontSize: 15,
        color: NAFTA_APP_CONSTANTS.COLORS.ACTIVE_COLOR,
        backgroundColor: NAFTA_APP_CONSTANTS.COLORS.ACTIVE_COLOR_2,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20
    }
})