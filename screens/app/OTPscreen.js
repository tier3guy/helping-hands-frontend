// Internal Libraries
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

// Styles
import colors from '../../assets/themes/colors';

// Components
import { 
    ScrollView,
    Header,
    PrimaryButton,
    InterText,
    OtpInput,
    Loader
} from '../../components';

// Contexts
import { useAuth } from '../../context/authContext';


const OTPScreen = ({ navigation, route }) => {

    const { email } = route.params;
    const { user, setUser, loader, setLoader } = useAuth();

    const [error, setError] = useState(null);
    const [otp, setOtp] = useState("");


    const OTPVerificationHandler = () => {

    }

    return (
        <View style={[styles.w100, styles.container]}>
            <ScrollView>

                <Header 
                    title="OTP Verification"
                    navigation={navigation}
                    button
                    icon="keyboard-arrow-right"
                    iconSize={30}
                    onIconPress={() => navigation.goBack()}
                />

                <View style={styles.inputContainer}>
                    <InterText style={styles.textotp}>Enter the OTP sent to {email}</InterText>
                    <OtpInput
                        length={6}
                        value={otp}
                        setValue={setOtp}
                        timer
                    />
                </View>
                
            </ScrollView>

            <PrimaryButton
                label="Verify"
                onPress={OTPVerificationHandler}
            />
            
            <Loader loading={loader} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.dark.dark,
        alignItems: 'center',
        padding: 20,
    },
    w100: {
        width: '100%',
    },
    border: {
        borderWidth: 1,
        borderColor: colors.dark.light,
    },
    text: {
        color: "gray" || colors.dark.light,
        fontSize: 14,
    },
    textotp: {
        color: "gray" || colors.dark.light,
        fontSize: 14,
        // textAlign: 'center',
        // borderWidth: 1,
        marginBottom: 20,
    },
    inputContainer: {
        marginVertical: 10,
        marginTop: 30,
        // height: 100,
        // justifyContent: 'space-between',
    },
    error: {
        color: colors.dark.danger,
        fontSize: 14,
        textAlign: 'center',
    },
    errorContainer: {
        height: 40,
        justifyContent: 'center',
        marginVertical: 10,
    }
});

export default OTPScreen;