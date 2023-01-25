import {ImageBackground, Pressable, ScrollView, StyleSheet, Text, View} from "react-native";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faInfoCircle} from "@fortawesome/fontawesome-free-solid";
import {NAFTA_APP_CONSTANTS} from "../constants";
import {getPositiveNegativeNumberColor, transformMarketNumber} from "../utils";

const sampleFuelsData = [
    { fuelName: 'Gasoline A95', fuelPriceMovement: 0.00 },
    { fuelName: 'Gasoline A100', fuelPriceMovement: 0.01 },
    { fuelName: 'Premium Diesel', fuelPriceMovement: 0.00 },
    { fuelName: 'Diesel', fuelPriceMovement: 0.02 },
    { fuelName: 'Propane-Butane', fuelPriceMovement: 0.00 },
    { fuelName: 'Methane', fuelPriceMovement: -0.03 },
    { fuelName: 'Methane 2', fuelPriceMovement: -0.03 },
];

export const FuelsScreen = ({ navigation }) => {

    const onFuelItemPress = (fuelName) => {
        navigation.navigate({
            name: NAFTA_APP_CONSTANTS.SCREENS.FUELS_DETAILS_SCREEN,
            params: {
                fuelName: fuelName
            }
        });
    }

    return(<View style={styles.container}>
        <ImageBackground source={require('../assets/map2.jpg')} blurRadius={5} resizeMode="cover" style={styles.backgroundImage}>
            <ScrollView style={{marginTop: 100, flex: 1}}>
                {sampleFuelsData.map((item, idx) => {
                    const {fuelName, fuelPriceMovement } = item;

                    return(<Pressable key={`main-fuel-item-${idx}`} style={styles.itemWrapper} onPress={() => onFuelItemPress(fuelName)}>
                        <Text style={styles.itemText}>{fuelName}</Text>
                        <View style={styles.innerWrapper}>
                            <Text style={{color: getPositiveNegativeNumberColor(fuelPriceMovement), fontSize: 20}}>
                                {transformMarketNumber(fuelPriceMovement)}
                            </Text>
                            <FontAwesomeIcon icon={faInfoCircle} size={20} color={NAFTA_APP_CONSTANTS.COLORS.ACTIVE_COLOR} style={{marginLeft: 10}} />
                        </View>
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
    innerWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    priceMovementText: {
        fontSize: 20,
    }
});