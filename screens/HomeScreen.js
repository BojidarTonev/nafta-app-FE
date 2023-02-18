import React from 'react';
import {View, ImageBackground, StyleSheet, TouchableOpacity} from "react-native";
import {NAFTA_APP_CONSTANTS} from "../constants";
import {Slider} from "@miblanchard/react-native-slider";
import {Picker} from "@react-native-picker/picker";
import {useDispatch} from "react-redux";
import {fetchBestPriceNearestStations} from "../redux/homeSlice";
import {NaftaText} from "../ui/NaftaText";

const pickerFuelTypesValues = [
    { label: 'Gasoline', value: 'gasoline' },
    { label: 'Diesel', value: 'diesel' },
    { label: 'LPG', value: 'lpg' },
    { label: 'Methane', value: 'methane' }
];

export const HomeScreen = ({ navigation, route }) => {
  const {subTitle} = route.params;

  const dispatch = useDispatch();

  const [sliderValue, setSliderValue] = React.useState(0);
  const [selectedFuelType, setSelectedFuelType] = React.useState(pickerFuelTypesValues[0]);

  const onFindPress = () => {
      const fetchProps = {
          lat: 42.6628640167891,
          lon: 23.28363632506699,
          fuel: selectedFuelType.value,
          limit: 15,
          distance: sliderValue
      };
      dispatch(fetchBestPriceNearestStations(fetchProps));

      navigation.navigate(NAFTA_APP_CONSTANTS.STACKS.HOME_STACK, {
          screen: NAFTA_APP_CONSTANTS.SCREENS.SEARCH_RESULT_SCREEN,
          params: {
              fuelType: selectedFuelType.label,
              radius: sliderValue
          }
      })
  };

  const onSliderValueChange = (e) => {
      const numberValue = e[0];
      if(isNaN(numberValue)) return;

      setSliderValue(Number(numberValue));
  };

  const onSelectedFuelTypeChange = (itemValue) => {
    const selectedItem = pickerFuelTypesValues.find((v) => v.value === itemValue);
    selectedItem && setSelectedFuelType(selectedItem);
  };

  return(<View style={{flex: 1}}>
      <ImageBackground source={require('../assets/map2.jpg')} blurRadius={5} resizeMode="cover" style={styles.backgroundImage}>
          <NaftaText text={subTitle} customStyles={{position: 'absolute', top: 90}}/>
          <TouchableOpacity
              activeOpacity={0.6}
              onPress={onFindPress}
              style={styles.actionButton}>
              <NaftaText text={"FIND"} bold color={NAFTA_APP_CONSTANTS.COLORS.ACTIVE_COLOR} customStyles={{fontSize: 35}} />
          </TouchableOpacity>

          <View style={styles.filtersContainer}>
              <Picker
                dropdownIconColor={NAFTA_APP_CONSTANTS.COLORS.ACTIVE_COLOR}
                style={styles.pickerStyle}
                selectedValue={selectedFuelType.value}
                onValueChange={onSelectedFuelTypeChange}
              >
                  {pickerFuelTypesValues.map((item, idx) => {
                      const {value, label} = item;
                      return(<Picker.Item key={`gasoline-item-${idx}`} label={label} value={value} />)
                  })}
              </Picker>
              <NaftaText text={`Radius: ${sliderValue}km`} />
              <Slider
                  step={1}
                  minimumValue={0}
                  maximumValue={100}
                  value={sliderValue}
                  onValueChange={onSliderValueChange}
                  thumbTintColor={NAFTA_APP_CONSTANTS.COLORS.ACTIVE_COLOR}
                  minimumTrackTintColor={NAFTA_APP_CONSTANTS.COLORS.ACTIVE_COLOR}
              />
          </View>
      </ImageBackground>
  </View>)
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    actionButton: {
        marginTop: 70,
        marginBottom: 10,
        width: 190,
        height: 190,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: 'rgb(24,24,24)',
        borderColor: NAFTA_APP_CONSTANTS.COLORS.ACTIVE_COLOR_2,
        borderWidth: 5
    },
    filtersContainer: {
        width: '80%',
        marginTop: 40
    },
    pickerStyle: {
        backgroundColor: 'rgba(51, 51, 51, 0.8)',
        borderStyle: 'solid',
        borderWidth: 3,
        borderColor: 'black',
        borderRadius: 30,
        color: NAFTA_APP_CONSTANTS.COLORS.ACTIVE_COLOR,
        marginBottom: 20,
        marginTop: 10
    }
});