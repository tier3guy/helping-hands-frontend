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

// APIs
import { verifyOtpFunction } from '../../api';

const OTPScreen = ({ navigation, route }) => {

    const { email, otp } = route.params;
    const { user, setUser, loader, setLoader } = useAuth();

    const [error, setError] = useState(null);
    const [localOtp, setLocalOtp] = useState("");


    const OTPVerificationHandler = () => {
            
        if(localOtp === "") {
            setError("Please enter an OTP");
            return;
        }
        if(localOtp !== otp) {
            setError("Please enter a valid OTP");
            return;
        }
        const phone = user.phone;
        verifyOtpFunction({ email, phone, setLoader, setError, navigation, setUser });
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
                        value={localOtp}
                        setValue={setLocalOtp}
                        timer
                    />
                    <View style={styles.errorContainer}>
                        {
                            error && <InterText style={styles.error}>{error}</InterText>
                        }
                    </View>
                </View>

                <PrimaryButton
                    label="Verify"
                    onPress={OTPVerificationHandler}
                    // style={{
                    //     marginTop: 20
                    // }}
                />
                
            </ScrollView>


            
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