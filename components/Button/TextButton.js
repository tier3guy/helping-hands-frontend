import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

// Styles
import colors from '../../assets/themes/colors';

// Components
import InterText from '../Text/InterText';

const TextButton = (props) => {

    const { buttonStyle, textStyle, onPress } = props;

    return (
        <TouchableOpacity
            style={[styles.wrapper, buttonStyle]}
            onPress={onPress}
        >
            <InterText style={[styles.text, textStyle]}>
                {props.label}
            </InterText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 15,
        color: colors.dark.light,
    },
    wrapper: {
        width: '100%',
    }
});
export default TextButton;