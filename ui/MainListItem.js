import PropTypes from 'prop-types';
import {Pressable, StyleSheet, View, Image} from "react-native";
import {NAFTA_APP_CONSTANTS} from "../constants";
import {getPositiveNegativeNumberColor, transformMarketNumber} from "../utils";
import {NaftaText} from "./NaftaText";
import {FontAwesome} from "@expo/vector-icons";

export const MainListItem = (props) => {
    const { key, imageUrl, icon, infoIcon, text, price, priceMargin, onPress, customStyles } = props;

    const renderLeadImage = (imageUrl, icon) => {
        if(imageUrl) return <Image source={{uri: imageUrl}} style={{height: 30, width: 30}}/>
        else if (icon) return <FontAwesome name={icon} size={30} color={NAFTA_APP_CONSTANTS.COLORS.ACTIVE_COLOR} />

        return <FontAwesome name="info-circle" size={30} color={NAFTA_APP_CONSTANTS.COLORS.ACTIVE_COLOR} />
    }

    return(<Pressable key={key} style={{...styles.itemWrapper, ...customStyles}} onPress={onPress}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {renderLeadImage(imageUrl, icon)}
            <NaftaText text={text} customStyles={{marginLeft: 20}} />
        </View>
        <View style={styles.innerWrapper}>
            {price && (<View style={{flexDirection: 'row'}}>
                <NaftaText text={price} bold color={getPositiveNegativeNumberColor(priceMargin)} />
                {priceMargin ?
                    <NaftaText text={transformMarketNumber(priceMargin)} color={getPositiveNegativeNumberColor(priceMargin)} customStyles={{paddingLeft: 5, fontSize: 15}} />
                    : null}
            </View>)}
            {infoIcon && <FontAwesome name="info-circle" size={20} color={NAFTA_APP_CONSTANTS.COLORS.ACTIVE_COLOR} style={{marginLeft: 10}}/>}
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
        backgroundColor: 'rgba(100,79,60, 0.3)',
        marginHorizontal: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 30,
        padding: 15,
        borderRadius: 10,
        // shadowColor: NAFTA_APP_CONSTANTS.COLORS.ACTIVE_COLOR,
        elevation: 25,
    },
    innerWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});