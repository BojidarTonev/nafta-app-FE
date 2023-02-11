import React from "react";
import {Text, View, StyleSheet, Image, ScrollView, Pressable, FlatList, ActivityIndicator} from "react-native";
import {NAFTA_APP_CONSTANTS} from "../constants";
import {LinearGradient} from 'expo-linear-gradient';
import {useDispatch, useSelector} from "react-redux";
import {fetchGasCompanyById, fetchGasCompanyGasStations} from '../redux/gasCompaniesSlice';
import {faLocationArrow} from "@fortawesome/fontawesome-free-solid";
import {MainListItem} from "../ui/MainListItem";

export const GasStationDetailsScreen = ({navigation, route}) => {
    const { id, imageUrl } = route.params;

    const dispatch = useDispatch();
    const {selectedGasCompanyDetails, loading} = useSelector(state => state.gasCompanies);
    const [selectedMenu, setSelectedMenu] = React.useState(0);

    React.useEffect(() => {
        dispatch(fetchGasCompanyById({id}));
    }, []);

    const onSelectedMenuItemPress = () => {
        selectedMenu !== 0 ? setSelectedMenu(0) : setSelectedMenu(1);
        if (selectedMenu === 1) {
            // dispatch(fetchGasCompanyGasStations({id}))
        }
    };

    const renderFuelsByStation = () => {
        if(!selectedGasCompanyDetails) return;

        return (<ScrollView style={{width: '100%'}}>
            {(selectedGasCompanyDetails.fuels || []).map((selectedGasCompanyFuel, index) => {
                const { _id, fuel, averagePrice, margin, imageSrc } = selectedGasCompanyFuel;
                const isLast = index === selectedGasCompanyDetails.fuels.length - 1;

                return (<MainListItem
                    key={`gas-company-fuels-${_id}`}
                    imageUrl={imageSrc}
                    text={fuel}
                    price={averagePrice}
                    priceMargin={margin}
                    customStyles={{marginBottom: isLast ? 100 : 0}}
                />)}
            )}
        </ScrollView>)
    };

    const renderGasStations = () => {
        const renderGasCompanyDetail = ({item, index }) => {
            const { _id, phoneNumber, location, name } = item;
            const isLast = index === selectedGasCompanyDetails.gasStations.length - 1;

            return (<MainListItem
                text={name}
                icon={faLocationArrow}
                customStyles={{marginBottom: isLast ? 100 : 0}}
            />)
        };

        return (<FlatList
            data={selectedGasCompanyDetails.gasStations || []}
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
                    <Text style={[styles.toggleButton, selectedMenu === 0 && styles.activeToggleButton]}>Details</Text>
                </Pressable>
                <Pressable onPress={onSelectedMenuItemPress}>
                    <Text style={[styles.toggleButton, selectedMenu === 1 && styles.activeToggleButton]}>Gas Stations</Text>
                </Pressable>
            </View>
            <Image source={{uri: imageUrl}} style={{height: 170, width: 170, marginTop: 40, borderRadius: 15}} />
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
    toggleButton: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
        paddingHorizontal: 20
    },
    activeToggleButton: {
        backgroundColor: NAFTA_APP_CONSTANTS.COLORS.ACTIVE_COLOR,
        borderRadius: 20
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