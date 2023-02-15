import React from 'react';
import {ImageBackground, ScrollView, StyleSheet, View} from "react-native";
import {NAFTA_APP_CONSTANTS} from "../constants";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllGasCompanies} from "../redux/gasCompaniesSlice";
import {MainListItem} from "../ui/MainListItem";

export const GasCompaniesScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const { allGasCompanies } = useSelector((state) => state.gasCompanies);

    React.useEffect(() => {
        dispatch(fetchAllGasCompanies());
    }, []);

    const onGasCompanyItemPress = (id, imageUrl, gasCompanyName) => {
        navigation.navigate(NAFTA_APP_CONSTANTS.STACKS.GAS_COMPANIES_STACK, {
            screen: NAFTA_APP_CONSTANTS.SCREENS.GAS_COMPANIES_DETAILS_SCREEN,
            gasCompanyName,
                params: {
                    id, imageUrl
                },
            });
    };

    return(<View style={styles.container}>
        <ImageBackground source={require('../assets/map2.jpg')} blurRadius={5} resizeMode="cover" style={styles.backgroundImage}>
            <ScrollView style={{marginTop: 100, flex: 1}}>
                {allGasCompanies.map((item, idx) => {
                    const { _id, name, imageUrl  } = item;
                    const isLast = idx === allGasCompanies.length - 1;

                    return (<React.Fragment key={`main-fuel-item-${_id}`}>
                        <MainListItem
                            text={name}
                            imageUrl={imageUrl}
                            onPress={() => onGasCompanyItemPress(_id, imageUrl, name)}
                            infoIcon
                            customStyles={{marginBottom: isLast ? 80 : 0, backgroundColor: `rgba(51, 51, 51, 0.85)`}}
                        />
                    </React.Fragment>)
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