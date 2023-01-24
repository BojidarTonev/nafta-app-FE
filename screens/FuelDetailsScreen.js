import React from 'react';
import {Text, View, StyleSheet, Image, FlatList, Pressable} from "react-native";
import {NAFTA_APP_CONSTANTS} from "../constants";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import { faArrowDown, faArrowUp, faAngleUp, faAngleDown } from '@fortawesome/fontawesome-free-solid';
import {getPositiveNegativeNumberColor, transformMarketNumber} from "../utils";

const sampleGasCompanyPerFuelData = [
    {id: 1, companyName: 'Shell', companyImage: require('../assets/shell-logo.png'), averagePrice: 2.14, margin: 0.02},
    {id: 2, companyName: 'OMV', companyImage: require('../assets/omv-logo.png'), averagePrice: 2.14, margin: 0},
    {id:3, companyName: 'Lukoil', companyImage: require('../assets/lukoil-logo.png'), averagePrice: 2.19, margin: 0},
    {id:4, companyName: 'Rompetrol', companyImage: require('../assets/rompetrol-logo.png'), averagePrice: 2.22, margin: -0.01},
    {id:5, companyName: 'Eko', companyImage: require('../assets/eko-logo.png'), averagePrice: 2.35, margin: 0},
    {id:6, companyName: 'Petrol', companyImage: require('../assets/petrol-logo.png'), averagePrice: 2.51, margin: 0.03}
];

export const FuelDetailsScreen = ({ navigate, route }) => {
    const [monthlyAveragePrice, setMonthlyAveragePrice] = React.useState(0);

    React.useEffect(() => {
        // should ask API and await response
        setMonthlyAveragePrice('+0.01');
    }, []);

    const getMonthlyAverageIcon = React.useCallback(() => {
        if(Number(monthlyAveragePrice) === 0) return null;
        else if (Number(monthlyAveragePrice) > 0) return faArrowUp;
        else return faArrowDown;
    }, [monthlyAveragePrice]);

    const getMonthlyAverageNumbersColor = React.useCallback(() => {
        return getPositiveNegativeNumberColor(monthlyAveragePrice);
    }, [monthlyAveragePrice]);

    const renderFuelCompanyItem = ({ item, index }) => {
        const { companyName, companyImage, averagePrice, margin } = item;
        const isLast = index === sampleGasCompanyPerFuelData.length - 1;

        return(<View style={{...styles.gasStationPerFuelWrapper, borderBottomWidth: isLast ? 0 : 2}}>
            <View style={{flexDirection: 'row'}}>
                <Image source={companyImage} style={{height: 30, width: 30}} />
                <Text style={{fontSize: 20, color: 'white', marginLeft: 20}}>{companyName}</Text>
            </View>
            <View style={{flexDirection: 'row', width: 120, justifyContent: 'space-between'}}>
                <Text style={{fontSize: 20, color: 'white'}}>{averagePrice}</Text>
                <Text style={{fontSize: 20, color: getPositiveNegativeNumberColor(margin)}}>
                    {transformMarketNumber(margin)}
                </Text>
            </View>
        </View>)
    }

    return(<View style={styles.container}>
        <View style={styles.monthlyAverageWrapper}>
            <Text style={styles.monthlyAverageText}>Monthly average: </Text>
            {Number(monthlyAveragePrice) !== 0 && <FontAwesomeIcon icon={getMonthlyAverageIcon()} size={25} color={getMonthlyAverageNumbersColor()}/>}
            <Text style={{color: getMonthlyAverageNumbersColor(), fontSize: 25}}>{monthlyAveragePrice}</Text>
        </View>
        <View style={styles.filterWrapper}>
            <Pressable style={styles.filterButtonWrapper}>
                <View style={{marginRight: 20, marginLeft: -15}}>
                    <FontAwesomeIcon icon={faAngleUp} style={{marginBottom: -5}} />
                    <FontAwesomeIcon icon={faAngleDown} color={NAFTA_APP_CONSTANTS.COLORS.ACTIVE_COLOR} />
                </View>
                <Text style={styles.filter}>Avg Price</Text>
            </Pressable>
            <Pressable style={styles.filterButtonWrapper}>
                <View style={{marginRight: 20, marginLeft: -15}}>
                    <FontAwesomeIcon icon={faAngleUp} style={{marginBottom: -5}} />
                    <FontAwesomeIcon icon={faAngleDown} />
                </View>
                <Text style={styles.filter}>Margin</Text>
            </Pressable>
        </View>
        <FlatList
            data={sampleGasCompanyPerFuelData}
            renderItem={renderFuelCompanyItem}
            contentContainerStyle={{flexGrow: 1}}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
        />
    </View>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(24,24,24,1)',
        paddingHorizontal: 30
    },
    monthlyAverageWrapper: {
      marginTop: 110,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    monthlyAverageText: {
      color: NAFTA_APP_CONSTANTS.COLORS.ACTIVE_COLOR,
      fontSize: 25,
      marginRight: 20,
      fontWeight: 'bold'
    },
    filterWrapper: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginVertical: 40
    },
    filter: {
        fontSize: 20,
        fontWeight: 'bold',
        color: NAFTA_APP_CONSTANTS.COLORS.ACTIVE_COLOR
    },
    filterButtonWrapper: {
        paddingHorizontal: 30,
        paddingVertical: 15,
        width: 160,
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: NAFTA_APP_CONSTANTS.COLORS.PASSIVE_COLOR_2,
        borderRadius: 35,
        borderWidth: 1
    },
    activeFilterButton: {

    },
    gasStationPerFuelWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10,
        paddingBottom: 25,
    }
})