import React from 'react';
import {ImageBackground, ScrollView, StyleSheet, View} from "react-native";
import {NAFTA_APP_CONSTANTS} from "../constants";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllGasCompanies} from "../redux/gasCompaniesSlice";
import {MainListItem} from "../ui/MainListItem";

export const GasStationsScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const { allGasCompanies } = useSelector((state) => state.gasCompanies);

    React.useEffect(() => {
        dispatch(fetchAllGasCompanies());
    }, []);

    const onGasCompanyItemPress = (id, imageUrl) => {
        navigation.navigate({
            name: NAFTA_APP_CONSTANTS.SCREENS.GAS_STATIONS_DETAILS_SCREEN,
            params: {
                id,
                imageUrl
            }
        });
    };

    return(<View style={styles.container}>
        <ImageBackground source={require('../assets/map2.jpg')} blurRadius={5} resizeMode="cover" style={styles.backgroundImage}>
            <ScrollView style={{marginTop: 100, flex: 1}}>
                {allGasCompanies.map((item, idx) => {
                    const { _id, name, imageUrl  } = item;
                    const isLast = idx === allGasCompanies.length - 1;

                    return (<MainListItem
                        key={`main-fuel-item-${_id}`}
                        text={name}
                        imageUrl={imageUrl}
                        onPress={() => onGasCompanyItemPress(_id, imageUrl)}
                        infoIcon
                        customStyles={{marginBottom: isLast ? 80 : 0, backgroundColor: `rgba(51, 51, 51, 0.85)`}}
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