import {Pressable} from "react-native";
import {NAFTA_APP_CONSTANTS} from "../constants";
import {faBars} from "@fortawesome/fontawesome-free-solid";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {useNavigation} from "@react-navigation/native";

export const settingIcon = () => {
    const navigation = useNavigation();

    return (<Pressable onPress={() => navigation.navigate(NAFTA_APP_CONSTANTS.SCREENS.SETTINGS_SCREEN)} style={{marginRight: 20}}>
        <FontAwesomeIcon icon={faBars} color="white" size={30} />
    </Pressable>)
};