// Internal Libraries
import { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

// Styles
import colors from '../../assets/themes/colors';

// Components
import Icon from '../Icons';


/**
 * @description Input Component for React Native App
 * @param {*} props - major props are {style, icon, eye, containerStyle}
 * @returns - Input Component
 */
const RNInput = (props) => {
    
    const { style, icon, eye, containerStyle, ...rest } = props;

    /**
     * @description Toggle Secure Text Entry
     * @param {*} toggleSecure - toggleSecure state
     * @param {*} setToggleSecure - setToggleSecure state
     * @returns - toggleSecure state
     * @permissable - true, false : boolean 
     */
    const [toggleSecure, setToggleSecure] = useState(false);

    return (
        <View style={[styles.body, containerStyle]}>
            {
                icon && <Icon 
                            name={icon} 
                            size={20} 
                            color={colors.dark.light} 
                            style={{
                                marginRight: 10
                            }}
                        />
            }
            <TextInput 
                style={[styles.input, style]}
                placeholderTextColor={colors.dark.light} 
                {...rest} 
                secureTextEntry={eye && toggleSecure}
                cursorColor={colors.dark.light}
            />
            {
                eye && <Icon
                            name={toggleSecure ? 'eye' : 'eye-off'}
                            size={20}
                            color={colors.dark.light}
                            style={{
                                marginLeft: 10
                            }}
                            onPress={() => setToggleSecure(!toggleSecure)}
                        />
            }
        </View>
    );
}

const styles = StyleSheet.create({
    body:{
        paddingHorizontal: 15,
        backgroundColor: "gray",
        borderRadius: 5,
        elevation: 2,
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        color: colors.dark.light,
        fontFamily: 'Inter-Regular',
        fontSize: 16,
        flex: 1,
        height: 60,
    },
});

export default RNInput;