import {Text, View, StyleSheet, ScrollView, Image, Pressable} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import {NAFTA_APP_CONSTANTS} from "../constants";

const sampleResultData = [
    {companyName: 'Shell', companyLogo: require('../assets/shell-logo.png'), fuelPrice: 2.14, distance: 1.23},
    {companyName: 'Lukoil', companyLogo: require('../assets/lukoil-logo.png'), fuelPrice: 2.15, distance: 1.22},
    {companyName: 'Rompetrol', companyLogo: require('../assets/rompetrol-logo.png'), fuelPrice: 2.19, distance: 1.27},
    {companyName: 'Shell', companyLogo: require('../assets/shell-logo.png'), fuelPrice: 2.21, distance: 1.19},
    {companyName: 'Petrol', companyLogo: require('../assets/petrol-logo.png'), fuelPrice: 2.23, distance: 1.31},
    {companyName: 'Eko', companyLogo: require('../assets/eko-logo.png'), fuelPrice: 2.23, distance: 1.41},
    {companyName: 'Shell', companyLogo: require('../assets/shell-logo.png'), fuelPrice: 2.24, distance: 1.47},
    {companyName: 'Eko', companyLogo: require('../assets/eko-logo.png'), fuelPrice: 2.288, distance: 1.58},
    {companyName: 'Shell', companyLogo: require('../assets/shell-logo.png'), fuelPrice: 2.31, distance: 1.9}
];

export const SearchResultScreen = ({navigation, route}) => {
    const {fuelType, radius} = route.params;

    const onResultItemPress = (companyName, fuelPrice, gasStationLocation, radius) => {
        navigation.navigate({
            name: NAFTA_APP_CONSTANTS.SCREENS.SEARCH_RESULT_DETAILS_SCREEN,
            params: {
                companyName,
                fuelPrice,
                gasStationLocation,
                radius,
                fuelType
            }
        })
    };

    return(<LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={[NAFTA_APP_CONSTANTS.COLORS.BACKGROUND_COLOR_DARK, NAFTA_APP_CONSTANTS.COLORS.BACKGROUND_COLOR_ORANGE]}
        style={styles.container}>
            <View style={styles.informationButtonsWrapper}>
                <Text style={styles.informationButton}>{fuelType}</Text>
                <Text style={styles.informationButton}>Radius: {radius}km</Text>
            </View>
            <ScrollView style={{marginTop: 20}}>
                {sampleResultData.map((item, index) => {
                    const {companyName, companyLogo, fuelPrice, distance} = item;
                    const isLast = index === sampleResultData.length - 1;

                    return(<Pressable
                        key={`fcsr-${index}`}
                        style={{...styles.itemWrapper, marginBottom: isLast ? 40 : 0}}
                        onPress={() => onResultItemPress(companyName, fuelPrice, 'sample location', distance)}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Image source={companyLogo} style={{height: 30, width: 30}} />
                                <Text style={{fontSize: 18, color: 'white', marginLeft: 20}}>{companyName}</Text>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center', width: 120, justifyContent: 'space-between'}}>
                                <Text style={{fontSize: 18, color: NAFTA_APP_CONSTANTS.COLORS.ACTIVE_COLOR}}>{fuelPrice}</Text>
                                <Text style={{fontSize: 18, color: NAFTA_APP_CONSTANTS.COLORS.ACTIVE_COLOR}}>{distance}km</Text>
                            </View>
                    </Pressable>);
                })}
            </ScrollView>
    </LinearGradient>)
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    informationButtonsWrapper: {
        marginTop: 110,
        flexDirection: 'row',
        justifyContent: "space-between",
        marginHorizontal: 30,
    },
    informationButton: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: NAFTA_APP_CONSTANTS.COLORS.ACTIVE_COLOR_2,
        paddingHorizontal: 20,
        paddingVertical: 7,
        borderRadius: 20
    },
    itemWrapper: {
        backgroundColor: 'rgba(100,79,60,0.4)',
        padding: 15,
        marginHorizontal: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 10,
        marginTop: 25,
        elevation: 10
    }
});
