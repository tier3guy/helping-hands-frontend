// Internal Libraries
import { useState, useEffect, useRef } from 'react';
import { TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';

// Styles
import colors from '../../assets/themes/colors';

// Components
import InterText from '../Text/InterText';
import Timer from '../Time';

const BOX_SIZE = 40;
const FONT_SIZE = 20;

const OTPInput = ({ length, value, setValue, timer, time }) => {
    
    
    const inputRef = useRef();
    const [otpArray, setOtpArray] = useState([]);
    const [enableResend, setEnableResend] = useState(false);
    const [message, setMessage] = useState(null);

    useEffect(() => {
        
        if(value === undefined) return;
        if (value.length === length) inputRef.current.blur();

        const otp = value.split('');
        for(let i = value.length; i < length; i++) otp.push('');

        setOtpArray(otp);

    }, [value]);

    const onResendClick = () => {
        if(enableResend){
            setEnableResend(false);
            setMessage("OTP has been sent to your email again.");
            return;
        }
    }  
    
    return (
        <View style={styles.wrapper}>

            {/* Will get Visible */}
            <View style={styles.boxesWrapper}>
            {
                otpArray && otpArray.map((item, index) => {
                    return (
                        <TouchableOpacity
                            key={index}
                            onPress={() => inputRef.current.focus()}
                            style={[styles.input, {
                                borderColor: item === '' ? colors.dark.gray : colors.dark.orange
                            }]}
                        >
                            <InterText>{item}</InterText>
                        </TouchableOpacity>
                    )
                })
            }
            </View>

            {
                timer && (
                    <View style={styles.resendOtpWrapper}>
                        <TouchableOpacity>
                            <InterText 
                                style={[
                                    styles.resendotp, 
                                    { 
                                        color: enableResend ? colors.dark.orange : colors.dark.gray 
                                    }
                                ]}
                                onPress={onResendClick}
                            >
                                @ Resend OTP
                            </InterText>
                        </TouchableOpacity>
                        <Timer 
                            time={time || 30} 
                            setEnable={setEnableResend}
                        />
                    </View>
                )
            }

            {
                message && (
                    <View style={styles.errorContainer}>
                        <InterText style={styles.error}>{message}</InterText>
                    </View>
                )
            }
            
            {/* Will get Hidden */}
            <TextInput
                keyboardType="number-pad"
                maxLength={length}
                value={value}
                onChangeText={(text) => setValue(text)}
                ref={inputRef}
                style={styles.hiddenInput}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        width: BOX_SIZE,
        height: BOX_SIZE,
        borderWidth: 2,
        borderColor: colors.dark.gray,
        textAlign: 'center',
        fontSize: FONT_SIZE,
        fontFamily: 'Inter-Regular',
        color: colors.dark.light,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    boxesWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    hiddenInput: {
        position: 'absolute',
        top: 0,
        left: 0,
        borderWidth: 2,
        width: '100%',
        height: BOX_SIZE,
        opacity: 0,
    },
    wrapper:{
        // borderWidth: 2
    },
    resendotp: {
        color: colors.dark.orange,
        fontSize: 14,
    },
    resendOtpWrapper: {
        marginVertical: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    errorContainer: {
        height: 40,
        marginVertical: 10,
    },
    error: {
        color: colors.dark.gray,
        fontSize: 14,
    }
});

export default OTPInput;