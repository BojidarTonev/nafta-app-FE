import React from 'react';
import {Text, View, StyleSheet, FlatList} from "react-native";
import {NAFTA_APP_CONSTANTS} from "../constants";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import { faAngleUp } from '@fortawesome/fontawesome-free-solid';
import {getPositiveNegativeNumberColor} from "../utils";
import {LinearGradient} from 'expo-linear-gradient';
import {MainListItem} from "../ui/MainListItem";

const sampleGasCompanyPerFuelData = [
    {id: 1, companyName: 'Shell', companyImage: require('../assets/shell-logo.png'), averagePrice: 2.14, margin: 0.02},
    {id: 2, companyName: 'OMV', companyImage: require('../assets/omv-logo.png'), averagePrice: 2.14, margin: 0},
    {id: 3, companyName: 'Lukoil', companyImage: require('../assets/lukoil-logo.png'), averagePrice: 2.19, margin: 0},
    {id: 4, companyName: 'Rompetrol', companyImage: require('../assets/rompetrol-logo.png'), averagePrice: 2.22, margin: -0.01},
    {id: 5, companyName: 'Eko', companyImage: require('../assets/eko-logo.png'), averagePrice: 2.35, margin: 0},
    {id: 6, companyName: 'Eko', companyImage: require('../assets/eko-logo.png'), averagePrice: 2.35, margin: 0},
    {id: 7, companyName: 'Eko', companyImage: require('../assets/eko-logo.png'), averagePrice: 2.35, margin: 0},
    {id: 8, companyName: 'Eko', companyImage: require('../assets/eko-logo.png'), averagePrice: 2.35, margin: 0},
    {id: 9, companyName: 'Petrol', companyImage: require('../assets/petrol-logo.png'), averagePrice: 2.51, margin: 0.03}
];

export const FuelDetailsScreen = ({ navigate, route }) => {
    const { averagePrice, fuelName } = route.params;
    const [monthlyAveragePrice, setMonthlyAveragePrice] = React.useState(0);

    React.useEffect(() => {
        // should ask API and await response
        setMonthlyAveragePrice(averagePrice);
    }, []);

    const getMonthlyAverageNumbersColor = React.useCallback(() => {
        return getPositiveNegativeNumberColor(monthlyAveragePrice);
    }, [monthlyAveragePrice]);

    const renderFuelCompanyItem = ({ item, index }) => {
        const { companyName, companyImage, averagePrice, margin } = item;
        const isLast = index === sampleGasCompanyPerFuelData.length - 1;

        return(<MainListItem
                text={companyName}
                imageUrl={"https://res.cloudinary.com/dsvitxv34/image/upload/v1675829072/rompetrol-logo_m3plag.png"}
                price={averagePrice}
                priceMargin={margin}
                customStyles={{marginBottom: isLast ? 80 : 8, marginTop: 15}}
            />)
    }

    return(<LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={[NAFTA_APP_CONSTANTS.COLORS.BACKGROUND_COLOR_DARK, NAFTA_APP_CONSTANTS.COLORS.BACKGROUND_COLOR_ORANGE]}
        style={styles.container}>
        <View style={styles.monthlyAverageWrapper}>
            <Text style={styles.monthlyAverageText}>Monthly average: </Text>
            {/*{Number(monthlyAveragePrice) !== 0 && <FontAwesomeIcon icon={getMonthlyAverageIcon()} size={25} color={getMonthlyAverageNumbersColor()}/>}*/}
            <Text style={{color: getMonthlyAverageNumbersColor(), fontSize: 25}}>{averagePrice}</Text>
        </View>
        <View style={styles.filterButtonsWrapper}>
            <View style={{...styles.filterButton, flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(43,90,152,0.6)'}}>
                <FontAwesomeIcon icon={faAngleUp} size={25} color={NAFTA_APP_CONSTANTS.COLORS.ACTIVE_COLOR} style={{marginRight: 10}}/>
                <Text style={{color: NAFTA_APP_CONSTANTS.COLORS.ACTIVE_COLOR, fontSize: 20}}>Avg Price</Text>
            </View>
            <View style={styles.filterButton}>
                <Text style={{color: 'white', fontSize: 15}}>Margin</Text>
            </View>
        </View>
        <FlatList
            data={sampleGasCompanyPerFuelData}
            renderItem={renderFuelCompanyItem}
            keyExtractor={(item) => `fuel-details-${item.id}`}
        />
    </LinearGradient>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    monthlyAverageWrapper: {
      marginTop: 110,
      marginHorizontal: 30,
      marginBottom: 40,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      backgroundColor: 'rgba(100,79,60,0.2)',
      paddingVertical: 15,
      elevation: 10
    },
    monthlyAverageText: {
      color: NAFTA_APP_CONSTANTS.COLORS.ACTIVE_COLOR,
      fontSize: 25,
      marginRight: 20,
      fontWeight: 'bold'
    },
    filterButtonsWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 30,
        marginBottom: 40
    },
    filterButton: {
        backgroundColor: 'rgba(100,79,60,0.5)',
        paddingVertical: 10,
        paddingHorizontal:25,
        borderRadius: 25,
        justifyContent: 'center'
    }
});