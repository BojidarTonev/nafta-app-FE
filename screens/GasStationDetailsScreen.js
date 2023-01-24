import {Text, View, StyleSheet, Image, ScrollView} from "react-native";
import {NAFTA_APP_CONSTANTS} from "../constants";
import {getPositiveNegativeNumberColor, transformMarketNumber} from "../utils";

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
    return(<View style={styles.container}>
        <View style={styles.toggleButton}>
            <Text style={{fontSize: 25, color: NAFTA_APP_CONSTANTS.COLORS.ACTIVE_COLOR, borderBottomWidth: 2, borderBottomColor: NAFTA_APP_CONSTANTS.COLORS.ACTIVE_COLOR, marginBottom: 5, fontWeight: 'bold'}}>Details</Text>
            <Text style={{fontSize: 25, borderBottomWidth: 2, marginBottom: 5, color: 'white', borderBottomColor: 'white', fontWeight: 'bold'}}>Gas Stations</Text>
        </View>
        <Image source={require('../assets/eko-logo.png')} style={{height: 170, width: 170, marginVertical: 40, borderRadius: 15}} />
        <View style={styles.descriptionWrapper}>
            <Text style={styles.descriptionText}>Fuel Type</Text>
            <Text style={styles.descriptionText}>Avg Price</Text>
        </View>
        <ScrollView style={{width: '100%'}}>
            {sampleGasCompanyDetailsData.fuels.map((fuel) => {
                const { fuelType, averagePrice, margin, imageSrc } = fuel;

                return(<View style={styles.fuelRow}>
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
        </ScrollView>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(24,24,24,1)',
        paddingHorizontal: 30,
        alignItems: 'center'
    },
    toggleButton: {
        width: 250,
        flexDirection: 'row',
        marginTop: 90,
        justifyContent: "space-between",
    },
    fuelRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 15
    },
    descriptionWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 10,
        borderBottomWidth: 3,
        paddingBottom: 20
    },
    descriptionText: {
        fontSize: 20,
        color: NAFTA_APP_CONSTANTS.COLORS.ACTIVE_COLOR,
        fontWeight: 'bold'
    }
})