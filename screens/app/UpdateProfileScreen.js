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
    AddEmailCard
} from '../../components';

// Contexts
import { useAuth } from '../../context/authContext';

const UpdateProfileScreen = ({ navigation }) => {

    const { user, setUser } = useAuth();

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
                    />
                    <Input
                        label="Gender"
                        placeholder={user?.gender || "Male / Female / Other"}
                        icon="genderless"
                    />
                </View>

                <PrimaryButton
                    label="Update"
                />

                <InterText style={[styles.text, { marginVertical: 10 }]}>You cannot update Email and Contact Number once given.</InterText>
            
                {
                    !(user?.email) && <AddEmailCard />
                }

            </ScrollView>
            <InterText style={styles.text}>Version 1.0.0</InterText>
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
        height: 150,
        justifyContent: 'space-between',
    }
});

export default UpdateProfileScreen;