import React from "react";
import {Text, View, StyleSheet, Image, ScrollView, Pressable, FlatList} from "react-native";
import {NAFTA_APP_CONSTANTS} from "../constants";
import {getPositiveNegativeNumberColor, transformMarketNumber} from "../utils";
import {LinearGradient} from 'expo-linear-gradient';
import {useDispatch, useSelector} from "react-redux";
import {fetchGasCompanyDetailsById} from '../redux/gasStationsSlice';
import {faLocationArrow} from "@fortawesome/fontawesome-free-solid";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";

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
    const { gasCompanyId, companyName } = route.params;

    const dispatch = useDispatch();
    const {loading, selectedGasCompanyDetails} = useSelector(state => state.gasStations);

    const [selectedMenu, setSelectedMenu] = React.useState(0);

    React.useEffect(() => {
        const fetchParams = {
            id: gasCompanyId,
            companyName: companyName,
            limit: NAFTA_APP_CONSTANTS.API.API_LIMIT,
            offset: 0
        };
        dispatch(fetchGasCompanyDetailsById(fetchParams));
    }, []);

    const onSelectedMenuItemPress = () => {
        selectedMenu !== 0 ? setSelectedMenu(0) : setSelectedMenu(1);
    };

    const renderFuelsByStation = () => {
        return (<ScrollView style={{width: '100%'}}>
            {sampleGasCompanyDetailsData.fuels.map((fuel, index) => {
            const { fuelType, averagePrice, margin, imageSrc } = fuel;
            const isLast = index === sampleGasCompanyDetailsData.fuels.length - 1;

            return(<View key={`fuel-type-key-${index}`} style={{...styles.fuelRow, marginBottom: isLast ? 100 : 15}}>
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
        </ScrollView>)
    };

    const renderGasStations = () => {
        const renderGasCompanyDetail = ({item, index }) => {
            const { id, address, name, brand_name } = item;
            const isLast = index === selectedGasCompanyDetails.stations.length - 1;

            return(<View style={{...styles.fuelRow, marginBottom: isLast ? 100 : 15}}>
                <View style={{flexDirection: 'row'}}>
                    <FontAwesomeIcon icon={faLocationArrow} size={30} style={{marginRight: 30}} color={NAFTA_APP_CONSTANTS.COLORS.ACTIVE_COLOR} />
                    <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>{name}</Text>
                </View>
            </View>)
        };

        return (<FlatList
            data={selectedGasCompanyDetails.stations}
            renderItem={renderGasCompanyDetail}
            keyExtractor={(item) => `gas-company-details-${item.id}`}
            style={{width: '100%'}}
        />);
    }

    return(<LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={[NAFTA_APP_CONSTANTS.COLORS.BACKGROUND_COLOR_DARK, NAFTA_APP_CONSTANTS.COLORS.BACKGROUND_COLOR_ORANGE]}
        style={styles.container}>
            <View style={styles.toggleButtonWrapper}>
                <Pressable onPress={onSelectedMenuItemPress}>
                    <Text style={[styles.toggleButton, selectedMenu === 0 && styles.activeToggleButton]}>Details</Text>
                </Pressable>
                <Pressable onPress={onSelectedMenuItemPress}>
                    <Text style={[styles.toggleButton, selectedMenu === 1 && styles.activeToggleButton]}>Gas Stations</Text>
                </Pressable>
            </View>
            <Image source={require('../assets/eko-logo.png')} style={{height: 170, width: 170, marginVertical: 40, borderRadius: 15}} />
            {selectedMenu === 0 ? renderFuelsByStation() : renderGasStations()}
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
        width: '120%'
    },
    toggleButton: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
        paddingHorizontal: 20
    },
    activeToggleButton: {
        backgroundColor: NAFTA_APP_CONSTANTS.COLORS.ACTIVE_COLOR,
        borderRadius: 20
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