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
    Input,
    Loader
} from '../../components';

// Contexts
import { useAuth } from '../../context/authContext';

// APIs
import { sendOtpFunction } from '../../api';


const EmailAuthenticationScreen = ({ navigation }) => {

    const { user, loader, setLoader } = useAuth();

    const [error, setError] = useState(null);
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");


    const UpdateEmailHandler = async () => {

        if(email === "") {
            setError("Please enter an email");
            return;
        }
        if(!email.includes("@")) {
            setError("Please enter a valid email");
            return;
        }

        sendOtpFunction({ email, setLoader, setError, navigation, setOtp, otp });
    }

    return (
        <View style={[styles.w100, styles.container]}>
            <ScrollView>
                <Header 
                    title="Email Authentication"
                    navigation={navigation}
                    button
                    icon="keyboard-arrow-right"
                    iconSize={30}
                    onIconPress={() => navigation.goBack()}
                />

                <View style={[styles.w100, styles.inputContainer]}>
                    {
                        <InterText style={styles.text}>UID: {user?._id}</InterText>
                    }
                    <Input
                        label="Email"
                        placeholder={"Enter your email"}
                        icon="mail"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>

                <PrimaryButton
                    label="Add Email"
                    onPress={UpdateEmailHandler}
                />

                <View style={[styles.w100, styles.errorContainer]}>
                    {
                        error && <InterText style={[styles.error]}>{error}</InterText>
                    }
                </View>

                <InterText style={[styles.text]}>You cannot update Email and Contact Number once given.</InterText>

            </ScrollView>
            <InterText style={styles.text}>Version 1.0.0</InterText>
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
    inputContainer: {
        marginVertical: 10,
        marginTop: 30,
        height: 100,
        justifyContent: 'space-between',
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

export default EmailAuthenticationScreen;