import PropTypes from 'prop-types';
import {Pressable, StyleSheet, Text, View, Image} from "react-native";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faInfoCircle} from '@fortawesome/fontawesome-free-solid';
import {NAFTA_APP_CONSTANTS} from "../constants";
import {getPositiveNegativeNumberColor, transformMarketNumber} from "../utils";

export const MainListItem = (props) => {
    const { key, imageUrl, icon, infoIcon, text, price, priceMargin, onPress, customStyles } = props;

    const renderLeadImage = (imageUrl, icon) => {
        if(imageUrl) return <Image source={{uri: imageUrl}} style={{height: 30, width: 30}}/>
        else if (icon) return <FontAwesomeIcon icon={icon} size={30} color={NAFTA_APP_CONSTANTS.COLORS.ACTIVE_COLOR} />

        return <FontAwesomeIcon icon={faInfoCircle} size={30} color={NAFTA_APP_CONSTANTS.COLORS.ACTIVE_COLOR} />
    }

    return(<Pressable key={key} style={{...styles.itemWrapper, ...customStyles}} onPress={onPress}>
        <View style={{flexDirection: 'row'}}>
            {renderLeadImage(imageUrl, icon)}
            <Text style={styles.itemText}>{text}</Text>
        </View>
        <View style={styles.innerWrapper}>
            {price && (<View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 20, color: getPositiveNegativeNumberColor(priceMargin), fontWeight: 'bold'}}>
                    {price}
                </Text>
                {priceMargin ? (<Text style={{fontSize: 15, paddingLeft: 5, color: getPositiveNegativeNumberColor(priceMargin)}}>
                    {transformMarketNumber(priceMargin)}
                </Text>) : null}
            </View>)}
            {infoIcon && <FontAwesomeIcon icon={faInfoCircle} size={20} color={NAFTA_APP_CONSTANTS.COLORS.ACTIVE_COLOR} style={{marginLeft: 10}}/>}
        </View>
    </Pressable>);
};

MainListItem.propTypes = {
    text: PropTypes.string.isRequired,
    key: PropTypes.string,
    imageUrl: PropTypes.string,
    infoIcon: PropTypes.bool,
    price: PropTypes.number,
    priceMargin: PropTypes.number,
    onPress: PropTypes.func,
    customStyles: PropTypes.object
}

const styles = StyleSheet.create({
    itemWrapper: {
        backgroundColor: 'rgba(100,79,60,0.3)',
        marginHorizontal: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 30,
        padding: 15,
        borderRadius: 10,

        // shadowColor: NAFTA_APP_CONSTANTS.COLORS.ACTIVE_COLOR,
        elevation: 20
    },
    itemText: {
        fontSize: 20,
        color: 'white',
        marginLeft: 20
    },
    innerWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    priceMovementText: {
        fontSize: 20,
    }
});