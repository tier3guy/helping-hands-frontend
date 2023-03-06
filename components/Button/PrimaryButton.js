import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import colors from '../../assets/themes/colors';
import Icon from '../Icons';

// Components
import InterText from '../Text/InterText';

const PrimaryButton = (props) => {

    const { 
        style, 
        label, 
        textStyle, 
        onPress, 
        icon, 
        iconPosition, 
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
                icon && (!iconPosition || iconPosition === "left") && 
                <Icon 
                    name={icon} 
                    size={20} 
                    color={colors.dark.light} 
                    style={{
                        marginRight: 10
                    }}
                />
            }
            {
                labelShownFalse ? null : 
                <View>
                    <InterText style={textStyle}>{label || "Submit"}</InterText>
                </View>
            }
            {
                icon && iconPosition === "right" && 
                <Icon 
                    name={icon} 
                    size={20} 
                    color={colors.dark.light} 
                    style={{
                        marginLeft: 10
                    }}
                />
            }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonWrapper: {
        height: 50,
        width: '100%',
        backgroundColor: colors.dark.orange,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    }
});

export default PrimaryButton;