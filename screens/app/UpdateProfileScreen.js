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
    AddEmailCard,
    Loader
} from '../../components';

// Contexts
import { useAuth } from '../../context/authContext';

// Api Services
import { UpdateProfileFunction } from '../../api';

const UpdateProfileScreen = ({ navigation }) => {

    const { user, setUser, loader, setLoader } = useAuth();

    const [error, setError] = useState(null);

    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const UpdateProfileHandler = () => {

        if(name === "" && gender === "" && password === "" && confirmPassword === "") {
            setError("Nothning to update");
            return;
        }
        if(password !== "" && password !== confirmPassword) {
            setError("Passwords & Confirm Password do not match");
            return;
        }
        const data = {
            name: name !== "" ? name : user?.name,
            gender: gender !== "" ? gender : user?.gender,
            password: password !== "" ? password : user?.password,
            phone: user?.phone,
        };

        UpdateProfileFunction(data, setError, setUser, setLoader);
    }

    return (
        <View style={[styles.w100, styles.container]}>
            <ScrollView>
                <Header 
                    title="Profile Settings"
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
                        label="Display Name"
                        placeholder={user?.name}
                        icon="person"
                        value={name}
                        onChangeText={setName}
                    />
                    <Input
                        label="Gender"
                        placeholder={user?.gender || "Male / Female / Other"}
                        icon="genderless"
                        value={gender}
                        onChangeText={setGender}
                    />
                    <Input
                        label="New Password"
                        placeholder="New Password"
                        icon="lock"
                        eye
                        value={password}
                        onChangeText={setPassword}
                    />
                    <Input
                        label="Confirm Password"
                        placeholder="Confirm Password"
                        icon="lock"
                        eye
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                    />
                </View>

                <PrimaryButton
                    label="Update"
                    onPress={UpdateProfileHandler}
                />

                <View style={[styles.w100, styles.errorContainer]}>
                    {
                        error && <InterText style={[styles.error]}>{error}</InterText>
                    }
                </View>

                <InterText style={[styles.text]}>You cannot update Email and Contact Number once given.</InterText>
            
                {
                    !(user?.email) && <AddEmailCard navigation={navigation} />
                }

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
        marginVertical: 20,
        marginTop: 30,
        height: 280,
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

export default UpdateProfileScreen;