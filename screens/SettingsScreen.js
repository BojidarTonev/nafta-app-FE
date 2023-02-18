import {Text, StyleSheet, View, ScrollView, Pressable} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import {NAFTA_APP_CONSTANTS} from "../constants";
import React from "react";
import {FontAwesome} from "@expo/vector-icons";

const settingsItems = [{
    text: 'Account',
    onItemPress: (navigation) => {
        navigation.navigate(NAFTA_APP_CONSTANTS.STACKS.SETTINGS_STACK, {
            screen: NAFTA_APP_CONSTANTS.SCREENS.ACCOUNT_SETTINGS_SCREEN
        })
    },
    iconName: "user",
}, {
    text: 'Report A Problem',
    onItemPress: (navigation) => {
        navigation.navigate(NAFTA_APP_CONSTANTS.STACKS.SETTINGS_STACK, {
            screen: NAFTA_APP_CONSTANTS.SCREENS.REPORT_A_PROBLEM_SCREEN
        })
    },
    iconName: "bug",
},{
        text: 'About',
        onItemPress: (navigation) => {
            navigation.navigate(NAFTA_APP_CONSTANTS.STACKS.SETTINGS_STACK, {
                screen: NAFTA_APP_CONSTANTS.SCREENS.ABOUT_SETTINGS_SCREEN
            })
        },
        iconName: "info-circle",
}, {
    text: 'Notifications',
    onItemPress: (navigation) => {
        navigation.navigate(NAFTA_APP_CONSTANTS.STACKS.SETTINGS_STACK, {
            screen: NAFTA_APP_CONSTANTS.SCREENS.NOTIFICATIONS_SETTINGS_SCREEN
        })
    },
    iconName: "info-circle"
}, {
    text: 'Manage Ads',
    onItemPress: (navigation) => {
        navigation.navigate(NAFTA_APP_CONSTANTS.STACKS.SETTINGS_STACK, {
            screen: NAFTA_APP_CONSTANTS.SCREENS.MANAGE_ADDS_SETTINGS_SCREEN
        })
    },
    iconName: "thumbs-up",
    isOffer: true
}, {
    text: 'Win Awards',
    onItemPress: (navigation) => {
        navigation.navigate(NAFTA_APP_CONSTANTS.STACKS.SETTINGS_STACK, {
            screen: NAFTA_APP_CONSTANTS.SCREENS.WIN_AWARDS_SETTINGS_SCREEN
        })
    },
    iconName: "gift",
    isOffer: true
}];

export const SettingsScreen = ({navigation}) => {
    return (<LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={[NAFTA_APP_CONSTANTS.COLORS.BACKGROUND_COLOR_DARK, NAFTA_APP_CONSTANTS.COLORS.BACKGROUND_COLOR_ORANGE]}
        style={styles.container}>
            <View style={styles.settingsItemsContainer}>
                <ScrollView>
                    {settingsItems?.map((item, idx) => {
                        const {text, iconName, isOffer, onItemPress } = item;
                        const itemColor = isOffer ? 'white' :  NAFTA_APP_CONSTANTS.COLORS.ACTIVE_COLOR;

                        return (<React.Fragment key={`settings-item-${idx}`}>
                                <Pressable style={[styles.settingsItem, isOffer && styles.test]} onPress={() => onItemPress(navigation)}>
                                    <View style={{flexDirection: 'row'}}>
                                        <FontAwesome name={iconName} size={25} style={{color: itemColor, marginRight: 20}} />
                                        <Text style={{color: 'white', fontSize: 18}}>{text}</Text>
                                    </View>
                                    <FontAwesome name="angle-right" size={25} style={{color: 'white'}} />
                                </Pressable>
                                {idx === 0 && <View
                                    style={{
                                        borderBottomColor: NAFTA_APP_CONSTANTS.COLORS.ACTIVE_COLOR_2,
                                        borderBottomWidth: 5,
                                        borderRadius: 10,
                                        marginVertical: 10
                                    }}
                                />}
                            </React.Fragment>)
                    })}
                </ScrollView>
            </View>
    </LinearGradient>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(24,24,24,1)',
        alignItems: 'center'
    },
    settingsItemsContainer: {
        marginTop: 110,
        width: '90%',
    },
    settingsItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 20
    },
    test: {
        backgroundColor: NAFTA_APP_CONSTANTS.COLORS.ACTIVE_COLOR_2,
        padding: 20,
        borderRadius: 10,
        marginTop: 20,
    }
})