import React from 'react';
import {ImageBackground, Pressable, ScrollView, StyleSheet, Text, View} from "react-native";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faInfoCircle} from "@fortawesome/fontawesome-free-solid";
import {NAFTA_APP_CONSTANTS} from "../constants";
import {useDispatch, useSelector} from "react-redux";
import {fetchFuelsAveragePrice} from "../redux/fuelsSlice";

export const FuelsScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const {fuelsAveragePrices} = useSelector((state) => state.fuels);

    React.useEffect(() => {
        dispatch(fetchFuelsAveragePrice());
    }, []);

    const onFuelItemPress = (fuelName, averagePrice) => {
        navigation.navigate({
            name: NAFTA_APP_CONSTANTS.SCREENS.FUELS_DETAILS_SCREEN,
            params: {
                fuelName,
                averagePrice
            }
        });
    }

    return(<View style={styles.container}>
        <ImageBackground source={require('../assets/map2.jpg')} blurRadius={5} resizeMode="cover" style={styles.backgroundImage}>
            <ScrollView style={{marginTop: 100,  flex: 1}}>
                {fuelsAveragePrices.map((item, idx) => {
                    const {fuel, price } = item;

                    return(<Pressable key={`main-fuel-item-${idx}`} style={styles.itemWrapper} onPress={() => onFuelItemPress(fuel, price)}>
                        <Text style={styles.itemText}>{fuel}</Text>
                        <View style={styles.innerWrapper}>
                            <Text style={{color: NAFTA_APP_CONSTANTS.COLORS.ACTIVE_COLOR, fontSize: 20}}>{price}</Text>
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