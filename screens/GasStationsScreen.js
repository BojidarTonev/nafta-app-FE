import React from 'react';
import {Image, ImageBackground, Pressable, ScrollView, StyleSheet, Text, View} from "react-native";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faInfoCircle} from "@fortawesome/fontawesome-free-solid";
import {NAFTA_APP_CONSTANTS} from "../constants";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllGasCompanies} from "../redux/gasCompaniesSlice";

export const GasStationsScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const { allGasCompanies } = useSelector((state) => state.gasCompanies);

    React.useEffect(() => {
        dispatch(fetchAllGasCompanies());
    }, []);

    const onGasCompanyItemPress = (companyName, companyImage, gasCompanyId) => {
        navigation.navigate({
            name: NAFTA_APP_CONSTANTS.SCREENS.GAS_STATIONS_DETAILS_SCREEN,
            params: {
                companyName,
                companyImage,
                gasCompanyId
            }
        });
    };

    return(<View style={styles.container}>
        <ImageBackground source={require('../assets/map2.jpg')} blurRadius={5} resizeMode="cover" style={styles.backgroundImage}>
            <ScrollView style={{marginTop: 100, flex: 1}}>
                {allGasCompanies.map((item, idx) => {
                    const { _id, name, imageUrl, gasStations, website  } = item;
                    const isLast = idx === allGasCompanies.length - 1;

                    return(<Pressable key={`main-fuel-company-item-${idx}`} style={{marginBottom: isLast ? 80 : 0, ...styles.itemWrapper}} onPress={() => onGasCompanyItemPress(name, imageUrl, _id)}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={{uri: imageUrl}} style={{height: 30, width: 30, marginRight: 15}} />
                            <Text style={{fontSize: 20, color: 'white'}}>{name}</Text>
                        </View>
                        <FontAwesomeIcon icon={faInfoCircle} size={20} color={NAFTA_APP_CONSTANTS.COLORS.ACTIVE_COLOR} style={{marginLeft: 10}} />
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
        alignItems: 'center',
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
    priceMovementText: {
        fontSize: 20,
    }
});