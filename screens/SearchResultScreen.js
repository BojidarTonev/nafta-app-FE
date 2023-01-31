import {Text, View, StyleSheet, ScrollView, Image, Pressable} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import {NAFTA_APP_CONSTANTS} from "../constants";
import {useSelector} from "react-redux";

export const SearchResultScreen = ({navigation, route}) => {
    const {fuelType, radius} = route.params;

    const { gasStations } = useSelector((state) => state.home);

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
                {gasStations.map((item, index) => {
                    const {brand_name, fuelPrice, distance, address} = item;
                    const isLast = index === gasStations.length - 1;

                    return(<Pressable
                        key={`fcsr-${index}`}
                        style={{...styles.itemWrapper, marginBottom: isLast ? 80 : 0}}
                        onPress={() => onResultItemPress(brand_name, fuelPrice, address, distance)}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Image source={{uri: `http://origin.stg.cld.vcdn.data.here.com/p/d/autox_stg/dt/icons/2015-05-06/${brand_name.toLowerCase()}.png`}} style={{height: 30, width: 30}} />
                                <Text style={{fontSize: 18, color: 'white', marginLeft: 20}}>{brand_name}</Text>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center', width: 120, justifyContent: 'space-between'}}>
                                <Text style={{fontSize: 18, color: NAFTA_APP_CONSTANTS.COLORS.ACTIVE_COLOR}}>{fuelPrice}</Text>
                                <Text style={{fontSize: 18, color: NAFTA_APP_CONSTANTS.COLORS.ACTIVE_COLOR}}>{distance.toFixed(2)}km</Text>
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
