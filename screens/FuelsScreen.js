import React from 'react';
import {ImageBackground, ScrollView, StyleSheet, View} from "react-native";
import {NAFTA_APP_CONSTANTS} from "../constants";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllFuels} from "../redux/fuelsSlice";
import {MainListItem} from "../ui/MainListItem";

export const FuelsScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const { allFuels, loading } = useSelector((state) => state.fuels);

    React.useEffect(() => {
        dispatch(fetchAllFuels());
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
                {allFuels.map((item, idx) => {
                    const {name, margin, lastMonthAveragePrice, averageMonthlyPrice, imageUrl } = item;

                    return (<MainListItem
                        key={`main-fuel-item-${idx}`}
                        text={name}
                        imageUrl={imageUrl}
                        price={averageMonthlyPrice}
                        priceMargin={margin}
                        onPress={() => onFuelItemPress(name, averageMonthlyPrice)}
                        infoIcon
                        customStyles={{backgroundColor: `rgba(51, 51, 51, 0.85)`}}
                    />)
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
    }
});