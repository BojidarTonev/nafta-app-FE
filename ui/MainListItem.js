import {StyleSheet, Text, View} from "react-native";
import {Image} from "react-native-svg";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import { faInbox } from '@fortawesome/fontawesome-free-solid';
import {NAFTA_APP_CONSTANTS} from "../constants";

export const MainListItem = (props) => {
    const { key, iconPath, infoIcon, text, priceMovement } = props;

    return(<View key={key} style={styles.container}>
        {/*{iconPath && <Image src={iconPath && require(iconPath)} width={20} height={20} />}*/}
        <Text style={styles.text}>{text}</Text>
        {/*{priceMovement && <Text>{priceMovement}</Text>}*/}
        {/*{infoIcon && <FontAwesomeIcon icon={faInbox} size={20} color={NAFTA_APP_CONSTANTS.COLORS.ACTIVE_COLOR} />}*/}
    </View>);
};

const styles = StyleSheet.create({
    container: {
        // width: 'auto',
        backgroundColor: 'rgba(51, 51, 51, 0.8)'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})