import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import colors from '../../assets/themes/colors';

// Components
import InterText from '../Text/InterText';

const SecondaryButton = (props) => {

    const { 
        style, 
        label, 
        textStyle, 
        onPress, 
        labelShownFalse, 
        ...rest 
    } = props;

    return (
        <TouchableOpacity 
            style={[styles.buttonWrapper, style]}
            onPress={onPress ? onPress : () => {console.log("Button Pressed")}}
            {...rest}
        >
            {
                labelShownFalse ? null : 
                <View>
                    <InterText style={textStyle}>{label || "Submit"}</InterText>
                </View>
            }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonWrapper: {
        height: 46,
        borderColor: colors.dark.orange,
        borderWidth: 2,
        width: '100%',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default SecondaryButton;