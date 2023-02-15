import React from 'react';
import {Text, View, StyleSheet, FlatList} from "react-native";
import {NAFTA_APP_CONSTANTS} from "../constants";
import {LinearGradient} from 'expo-linear-gradient';
import {MainListItem} from "../ui/MainListItem";
import {useDispatch, useSelector} from "react-redux";
import {
    calculateAveragePrice,
    fetchGasCompaniesByAvailableFuel, setGasCompaniesByAvailableFuel,
} from "../redux/gasCompaniesSlice";
import {SortButtons} from "../ui/SortButtons";
import {getPositiveNegativeNumberColor} from "../utils";

export const FuelDetailsScreen = ({ navigate, route }) => {
    const dispatch = useDispatch();

    const {gasCompaniesByAvailableFuel, averagePriceByFuel} = useSelector((state) => state.gasCompanies);

    const getData = async () => {
        await dispatch(fetchGasCompaniesByAvailableFuel());
        await dispatch(calculateAveragePrice());
    }

    React.useEffect(() => {
        getData();
    }, []);

    const getMonthlyAverageNumbersColor = React.useCallback(() => {
        return getPositiveNegativeNumberColor(averagePriceByFuel);
    }, [averagePriceByFuel]);

    const renderFuelCompanyItem = ({ item, index }) => {
        const { _id, name, imageUrl, averagePrice, margin } = item;

        const isLast = index === gasCompaniesByAvailableFuel.length - 1;

        return(<React.Fragment key={`fuel-company-item-${_id}`}>
            <MainListItem
                text={name}
                imageUrl={imageUrl}
                price={averagePrice}
                priceMargin={margin}
                customStyles={{marginBottom: isLast ? 80 : 8, marginTop: 15}}
            />
        </React.Fragment>)
    };

    const updateReducers = (data) => {
        return dispatch(setGasCompaniesByAvailableFuel(data))
    }

    const buttonOptions = [
        {buttonText: 'Avg Price', propName: 'averagePrice'},
        {buttonText: 'Margin', propName: 'margin'}
    ]

    return(<LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={[NAFTA_APP_CONSTANTS.COLORS.BACKGROUND_COLOR_DARK, NAFTA_APP_CONSTANTS.COLORS.BACKGROUND_COLOR_ORANGE]}
        style={styles.container}>
            <View style={styles.monthlyAverageWrapper}>
                <Text style={styles.monthlyAverageText}>Monthly average: </Text>
                <Text style={{color: getMonthlyAverageNumbersColor(), fontSize: 25}}>{averagePriceByFuel}</Text>
            </View>
            <SortButtons
                buttonOptions={buttonOptions}
                data={[...gasCompaniesByAvailableFuel] || []}
                updateReducer={updateReducers}
            />
            <FlatList
                data={gasCompaniesByAvailableFuel}
                renderItem={renderFuelCompanyItem}
                keyExtractor={(item) => `fuel-details-${item._id}`}
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
    }
});