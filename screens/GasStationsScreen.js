import {Image, ImageBackground, Pressable, ScrollView, StyleSheet, Text, View} from "react-native";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faInfoCircle} from "@fortawesome/fontawesome-free-solid";
import {NAFTA_APP_CONSTANTS} from "../constants";

const sampleGasCompaniesData = [
    {gasCompanyId: 1, companyName: 'Eko', companyImage: require('../assets/eko-logo.png') },
    {gasCompanyId: 2, companyName: 'Lukoil', companyImage: require('../assets/lukoil-logo.png') },
    {gasCompanyId: 3, companyName: 'OMV', companyImage: require('../assets/omv-logo.png') },
    {gasCompanyId: 4, companyName: 'Rompetrol', companyImage: require('../assets/rompetrol-logo.png') },
    {gasCompanyId: 5, companyName: 'Shell', companyImage: require('../assets/shell-logo.png') },
    {gasCompanyId: 6, companyName: 'Petrol', companyImage: require('../assets/petrol-logo.png') },
    {gasCompanyId: 1, companyName: 'Eko', companyImage: require('../assets/eko-logo.png') }
];

export const GasStationsScreen = ({ navigation }) => {

    const onGasCompanyItemPress = (companyName, companyImage, gasCompanyId) => {
        navigation.navigate({
            name: NAFTA_APP_CONSTANTS.SCREENS.GAS_STATIONS_DETAILS_SCREEN,
            params: {
                companyName,
                companyImage,
                gasCompanyId
            }
        });
    };

    return(<View style={styles.container}>
        <ImageBackground source={require('../assets/map2.jpg')} blurRadius={5} resizeMode="cover" style={styles.backgroundImage}>
            <ScrollView style={{marginTop: 100, flex: 1}}>
                {sampleGasCompaniesData.map((item, idx) => {
                    const {companyName, companyImage, gasCompanyId } = item;
                    return(<Pressable key={`main-fuel-company-item-${idx}`} style={styles.itemWrapper} onPress={() => onGasCompanyItemPress(companyName, companyImage, gasCompanyId)}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={companyImage} style={{height: 30, width: 30, marginRight: 15}} />
                            <Text style={{fontSize: 20, color: 'white'}}>{companyName}</Text>
                        </View>
                        <FontAwesomeIcon icon={faInfoCircle} size={20} color={NAFTA_APP_CONSTANTS.COLORS.ACTIVE_COLOR} style={{marginLeft: 10}} />
                    </Pressable>);
                })}
            </ScrollView>
        </ImageBackground>
    </View>)
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'center'
    },

    ////////////////////////////////////////////////////////// TO BE ABSTRACTED IN REUSABLE COMPONENT

    itemWrapper: {
        marginHorizontal: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30,
        padding: 15,
        backgroundColor: 'rgba(51, 51, 51, 0.85)',
        borderRadius: 10,
        shadowColor: NAFTA_APP_CONSTANTS.COLORS.ACTIVE_COLOR,
        elevation: 2
    },
    itemText: {
        fontSize: 20,
        color: 'white'
    },
    priceMovementText: {
        fontSize: 20,
    }
});