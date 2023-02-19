import React from 'react';
import {ImageBackground, Animated, StyleSheet, View} from "react-native";
import {NAFTA_APP_CONSTANTS} from "../constants";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllFuels, setSelectedFuel} from "../redux/fuelsSlice";
import {MainListItem} from "../ui/MainListItem";

export const FuelsScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const { allFuels } = useSelector((state) => state.fuels);

    const [fadeAnim] = React.useState(new Animated.Value(0));

    React.useEffect(() => {
        dispatch(fetchAllFuels());
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
        }).start();
    }, []);

    const onFuelItemPress = (fuelName) => {
        dispatch(setSelectedFuel(fuelName));
        navigation.navigate(NAFTA_APP_CONSTANTS.STACKS.FUELS_STACK, {
            screen: NAFTA_APP_CONSTANTS.SCREENS.FUELS_DETAILS_SCREEN,
            fuelName
        });
    }

    return(<View style={styles.container}>
        <ImageBackground source={require('../assets/map2.jpg')} blurRadius={5} resizeMode="cover" style={styles.backgroundImage}>
            <Animated.ScrollView style={{marginTop: 100,  flex: 1, opacity: fadeAnim}}>
                {allFuels.map((item, idx) => {
                    const {name, margin, lastMonthAveragePrice, averageMonthlyPrice, imageUrl } = item;

                    return (
                        <React.Fragment key={`main-fuel-item-${idx}`}>
                            <MainListItem
                                text={name}
                                imageUrl={imageUrl}
                                price={averageMonthlyPrice}
                                priceMargin={margin}
                                onPress={() => onFuelItemPress(name)}
                                customStyles={{backgroundColor: `rgba(51, 51, 51, 0.85)`}}
                            />
                    </React.Fragment>)
                })}
            </Animated.ScrollView>
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