import {Image, ImageBackground, Pressable, ScrollView, StyleSheet, Text, View} from "react-native";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faInfoCircle} from "@fortawesome/fontawesome-free-solid";
import {NAFTA_APP_CONSTANTS} from "../constants";

const sampleGasCompaniesData = [
    {companyName: 'Eko', companyImage: require('../assets/eko-logo.png') },
    {companyName: 'Lukoil', companyImage: require('../assets/lukoil-logo.png') },
    {companyName: 'OMV', companyImage: require('../assets/omv-logo.png') },
    {companyName: 'Rompetrol', companyImage: require('../assets/rompetrol-logo.png') },
    {companyName: 'Shell', companyImage: require('../assets/shell-logo.png') },
    {companyName: 'Petrol', companyImage: require('../assets/petrol-logo.png') },
    {companyName: 'Eko', companyImage: require('../assets/eko-logo.png') }
];

export const GasStationsScreen = ({ navigation }) => {

    const onGasCompanyItemPress = (companyName, companyImage) => {
        navigation.navigate({
            name: NAFTA_APP_CONSTANTS.SCREENS.GAS_STATIONS_DETAILS_SCREEN,
            params: {
                companyName,
                companyImage
            }
        });
    };

    return(<View style={styles.container}>
        <ImageBackground source={require('../assets/blurred-map-background.jpg')} resizeMode="cover" style={styles.backgroundImage}>
            <ScrollView style={{marginTop: 100, flex: 1}}>
                {sampleGasCompaniesData.map((item, idx) => {
                    const {companyName, companyImage } = item;

                    return(<Pressable key={`main-fuel-company-item-${idx}`} style={styles.itemWrapper} onPress={() => onGasCompanyItemPress(companyName, companyImage)}>
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
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 40,
        padding: 15,
        backgroundColor: 'rgba(51, 51, 51, 0.9)',
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1
    },
    itemText: {
        fontSize: 20,
        color: 'white'
    },
    innerWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    priceMovementText: {
        fontSize: 20,
    }
});