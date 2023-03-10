import React from "react";
import PropTypes from "prop-types";
import {Pressable, StyleSheet, View} from "react-native";
import {NAFTA_APP_CONSTANTS} from "../constants";
import {NaftaText} from "./NaftaText";
import {FontAwesome} from "@expo/vector-icons";

export const SortButtons = (props) => {
    const { buttonOptions, data, updateReducer } = props;

    const [activeFilter, setActiveFilter] = React.useState(-1);
    const [sortDirection, setSortDirection] = React.useState(true);

    const onButtonPress = (propName, index) => {
        setActiveFilter(index);
        setSortDirection(!sortDirection);

        if(index !== activeFilter && activeFilter !== -1) {
            setSortDirection(true)
        }

        const sortFunc = sortDirection ? (a, b) => b[propName] - a[propName] : (a, b) => a[propName] - b[propName];
        const sortedData = data.sort(sortFunc);
        updateReducer(sortedData);
    }

    const renderActiveButtonFilterIcon = React.useCallback(() => {
        const icon = sortDirection ? "angle-up" : "angle-down";

        return(<FontAwesome name={icon} size={25} color={NAFTA_APP_CONSTANTS.COLORS.ACTIVE_COLOR} style={{marginRight: 10}}/>);
    }, [sortDirection]);

    return(<View style={styles.filterButtonsWrapper}>
        {buttonOptions?.map((btnOpt, idx) => (
            <Pressable key={`sort-button-${idx}`} style={[styles.filterButton, activeFilter === idx && styles.activeFilterButton]} onPress={() => onButtonPress(btnOpt.propName, idx)}>
                {activeFilter === idx && renderActiveButtonFilterIcon()}
                <NaftaText text={btnOpt.buttonText} color={activeFilter === idx ? NAFTA_APP_CONSTANTS.COLORS.ACTIVE_COLOR : 'white'}/>
            </Pressable>
        ))}
    </View>);
};

SortButtons.propTypes = {
    buttonOptions: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    updateReducer: PropTypes.func.isRequired,
    setData: PropTypes.func
};

const styles = StyleSheet.create({
    filterButtonsWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 35,
        marginBottom: 40
    },
    filterButton: {
        backgroundColor: 'rgba(100,79,60,0.5)',
        paddingVertical: 10,
        paddingHorizontal:25,
        borderRadius: 25,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },
    activeFilterButton: {
        backgroundColor: 'rgba(43,90,152,0.6)'
    }
});
