import React from 'react';
import {Text, View, ImageBackground, StyleSheet, TouchableOpacity} from "react-native";
import {NAFTA_APP_CONSTANTS} from "../constants";
import {Slider} from "@miblanchard/react-native-slider";
import {Picker} from "@react-native-picker/picker";

const pickerFuelTypesValues = [
    { label: 'Gasoline A95', value: 'gasoline_a95' },
    { label: 'Gasoline A100', value: 'gasoline_a100' },
    { label: 'Propane-Butane', value: 'propane_butane' },
    { label: 'Premium Diesel', value: 'premium_diesel' },
    { label: 'Diesel', value: 'diesel' },
    { label: 'Methane', value: 'methane' }
];

export const HomeScreen = ({ navigation, route }) => {
  const {subTitle} = route.params;

  const [sliderValue, setSliderValue] = React.useState(0);
  const [selectedFuelType, setSelectedFuelType] = React.useState(pickerFuelTypesValues[0]);

  const onFindPress = () => {
      navigation.navigate({
          name: NAFTA_APP_CONSTANTS.SCREENS.SEARCH_RESULT_SCREEN,
          params: {
              fuelType: selectedFuelType.label,
              radius: sliderValue
          }
      })
  };

  const onSliderValueChange = (e) => {
      const numberValue = e[0];
      if(isNaN(numberValue)) return;

      setSliderValue(Number(numberValue).toFixed(1));
  };

  const onSelectedFuelTypeChange = (itemValue) => {
      console.log('test => ', itemValue)
    const selectedItem = pickerFuelTypesValues.find((v) => v.value === itemValue);
    selectedItem && setSelectedFuelType(selectedItem);
  };

  return(<View style={{flex: 1}}>
      <ImageBackground source={require('../assets/map2.jpg')} blurRadius={5} resizeMode="cover" style={styles.backgroundImage}>
          <Text style={styles.subHeaderText}>{subTitle}</Text>
          <TouchableOpacity
              activeOpacity={0.6}
              onPress={onFindPress}
              style={styles.actionButton}>
              <Text style={styles.actionButtonText}>FIND</Text>
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
              <Text style={styles.radiusText}>Radius: {sliderValue}km</Text>
              <Slider
                  step={0.1}
                  minimumValue={0}
                  maximumValue={2}
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
    subHeaderText: {
        color: 'white',
        fontSize: 20,
        position: 'absolute',
        top: 90,
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
    actionButtonText: {
        fontSize: 35,
        fontWeight: 'bold',
        color: NAFTA_APP_CONSTANTS.COLORS.ACTIVE_COLOR
    },
    filtersContainer: {
        width: '80%',
        marginTop: 40
    },
    radiusText: {
        fontSize: 20,
        color: 'white'
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