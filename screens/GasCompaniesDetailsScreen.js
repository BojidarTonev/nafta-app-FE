import React from "react";
import {View, StyleSheet, Image, ScrollView, Pressable, FlatList, ActivityIndicator} from "react-native";
import {NAFTA_APP_CONSTANTS} from "../constants";
import {LinearGradient} from 'expo-linear-gradient';
import {useDispatch, useSelector} from "react-redux";
import {fetchGasCompanyById} from '../redux/gasCompaniesSlice';
import {MainListItem} from "../ui/MainListItem";
import {NaftaText} from "../ui/NaftaText";

export const GasCompaniesDetailsScreen = ({navigation, route}) => {
    const { id, imageUrl } = route.params;

    const dispatch = useDispatch();
    const {selectedGasCompanyDetails, loading} = useSelector(state => state.gasCompanies);
    const [selectedMenu, setSelectedMenu] = React.useState(0);

    React.useEffect(() => {
        dispatch(fetchGasCompanyById({id}));
    }, []);

    const onSelectedMenuItemPress = () => {
        selectedMenu !== 0 ? setSelectedMenu(0) : setSelectedMenu(1);
    };

    const renderFuelsByStation = () => {
        if(!selectedGasCompanyDetails) return;

        return (<ScrollView style={{width: '100%'}}>
            {(selectedGasCompanyDetails.fuels || []).map((selectedGasCompanyFuel, index) => {
                const { _id, fuel, averagePrice, margin, imageSrc } = selectedGasCompanyFuel;
                const isLast = index === selectedGasCompanyDetails.fuels.length - 1;

                const onFuelPress = () => {
                    navigation.navigate(NAFTA_APP_CONSTANTS.STACKS.FUELS_STACK, {
                        screen: NAFTA_APP_CONSTANTS.SCREENS.FUELS_DETAILS_SCREEN,
                        fuelName: fuel
                    })
                }

                return (<React.Fragment key={`gas-company-fuels-${_id}`}>
                    <MainListItem
                        text={fuel}
                        imageUrl={imageSrc}
                        price={averagePrice}
                        priceMargin={margin}
                        customStyles={{marginBottom: isLast ? 100 : 0}}
                        onPress={onFuelPress}
                    />
                </React.Fragment>)}
            )}
        </ScrollView>)
    };

    const renderGasStations = () => {
        const renderGasCompanyDetail = ({item, index }) => {
            const { _id, phoneNumber, location, name } = item;
            const isLast = index === selectedGasCompanyDetails?.gasStations.length - 1;

            const onGasStationPress = () => {
                navigation.navigate(NAFTA_APP_CONSTANTS.STACKS.GAS_COMPANIES_STACK, {
                    screen: NAFTA_APP_CONSTANTS.SCREENS.GAS_STATION_DETAILS_SCREEN,
                    gasStationName: name
                })
            };

            return (<React.Fragment key={`gas-company-gas-station-${_id}`}>
                <MainListItem
                    text={name}
                    icon="location-arrow"
                    customStyles={{marginBottom: isLast ? 100 : 0}}
                    onPress={onGasStationPress}
                />
            </React.Fragment>)
        };

        return (<FlatList
            data={selectedGasCompanyDetails?.gasStations || []}
            renderItem={renderGasCompanyDetail}
            keyExtractor={(item) => `gas-company-gas-stations-${item._id}`}
            style={{width: '100%'}}
        />);
    }

    return(<LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={[NAFTA_APP_CONSTANTS.COLORS.BACKGROUND_COLOR_DARK, NAFTA_APP_CONSTANTS.COLORS.BACKGROUND_COLOR_ORANGE]}
        style={styles.container}>
            <View style={styles.toggleButtonWrapper}>
                <Pressable onPress={onSelectedMenuItemPress}>
                    <NaftaText text="Details" bold customStyles={{paddingHorizontal: 20, fontSize: 25, }} color={selectedMenu === 0 ? NAFTA_APP_CONSTANTS.COLORS.ACTIVE_COLOR : 'white'} />
                </Pressable>
                <Pressable onPress={onSelectedMenuItemPress}>
                    <NaftaText text="Gas Stations" bold customStyles={{paddingHorizontal: 20, fontSize: 25}} color={selectedMenu === 1 ? NAFTA_APP_CONSTANTS.COLORS.ACTIVE_COLOR : 'white'} />
                </Pressable>
            </View>
            <Image source={{uri: imageUrl}} style={{height: 170, width: 170, marginTop: 40, marginBottom: 20, borderRadius: 15}} />
            {loading ? <ActivityIndicator size="large" style={{marginTop: 20}} color={NAFTA_APP_CONSTANTS.COLORS.ACTIVE_COLOR} /> :
                selectedMenu === 0 ? renderFuelsByStation() : renderGasStations()}
    </LinearGradient>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(24,24,24,1)',
        alignItems: 'center'
    },
    toggleButtonWrapper: {
        marginTop: 100,
        flexDirection: 'row',
        justifyContent: "center",
        width: '120%'
    },
    additionalInformation: {
        marginBottom: 80,
        alignSelf: 'center',
        fontSize: 15,
        color: NAFTA_APP_CONSTANTS.COLORS.ACTIVE_COLOR,
        backgroundColor: NAFTA_APP_CONSTANTS.COLORS.ACTIVE_COLOR_2,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20
    }
})