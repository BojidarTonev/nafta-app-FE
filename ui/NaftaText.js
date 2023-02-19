import {Text, StyleSheet} from "react-native";
import PropTypes from "prop-types";

export const NaftaText = (props) => {
    const {text, isHeadingText, bold, color='white', customStyles, ...rest} = props;
    let textStyles = isHeadingText ? styles.headingText : styles.regularText;

    if(bold && isHeadingText) textStyles = {...textStyles, fontFamily: 'HeadingBold'}
    else if (bold && !isHeadingText) textStyles = {...textStyles, fontFamily: 'NormalBold'}

    return(<Text style={{...textStyles, ...customStyles, color: color}} {...rest}>{text}</Text>)
}

NaftaText.propTypes = {
    text: PropTypes.string,
    isHeadingText: PropTypes.bool,
    bold: PropTypes.bool,
    color: PropTypes.string,
    size: PropTypes.number,
    customStyles: PropTypes.object
}

const styles = StyleSheet.create({
    regularText: {
        fontSize: 20,
        fontFamily: 'NormalRegular',
    },
    headingText: {
        fontSize: 30,
        fontFamily: 'HeadingRegular',
        letterSpacing: 0.5
    }
})