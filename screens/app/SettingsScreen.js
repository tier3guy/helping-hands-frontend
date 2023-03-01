// Internal Libraries
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

// Styles
import colors from '../../assets/themes/colors';

// Components
import {
    Header,
    ScrollView,
    ProfileCard,
    SecondaryButton,
    PrimaryButton,
    TextButton,
    AddEmailCard
} from '../../components';

// Contexts
import { useAuth } from '../../context/authContext';

// External Libraries
import ToggleSwitch from 'toggle-switch-react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

// Global 
import { ASYNC_STORAGE_ACCESS_KEY } from '../../globals/constants';


const SettingsScreen = ({ navigation }) => {

    const { user, setUser } = useAuth();
    const [notification, setNotification] = useState(false);

    const LogoutFunctionHandler = () => {
        AsyncStorage.removeItem(ASYNC_STORAGE_ACCESS_KEY);
        setUser(null);
    }

    return (
        <View style={[styles.container, styles.w100]}>
            <ScrollView>
                <Header
                    title="Settings"
                    navigation={navigation}
                    button
                    icon="keyboard-arrow-right"
                    iconSize={30}
                    onIconPress={() => navigation.goBack()}
                />
                <View style={[styles.w100, styles.wrapper]}>
                    <View style={[styles.w100, styles.profileCardContainer]}>
                        <ProfileCard />
                        {
                            !(user?.email) ? <AddEmailCard/> : null
                        }
                        <SecondaryButton
                            label="Update Profile"
                            icon="edit"
                            style={{
                                marginTop: 20
                            }}
                            onPress={() => navigation.navigate('UpdateProfile')}
                        />
                    </View>
                    <View style={[styles.w100, styles.switchContainer]}>
                    
                        <ToggleSwitch
                            isOn={notification}
                            onColor={colors.dark.orange}
                            offColor={colors.dark.gray}
                            label="Notifications"
                            labelStyle={styles.notificationLabel}
                            onToggle={isOn => setNotification(isOn)}
                        />
                        
                    </View>
                </View>
            </ScrollView>
                
            <View style={[styles.footer, styles.w100]}>
                <TextButton
                    label="@ Delete Account"
                    textStyle={styles.deleteAccountButton}
                />
                <PrimaryButton
                    label="Logout"
                    icon="logout"
                    onPress={LogoutFunctionHandler}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.dark.dark,
        alignItems: 'center',
        padding: 20
    },
    w100: {
        width: '100%'
    },
    border: {
        borderWidth: 1,
        borderColor: colors.dark.light,
    },
    text: {
        marginVertical: 10,
        color: colors.dark.gray,
        fontSize: 15
    },
    wrapper: {
        marginVertical: 20,
    },
    switchContainer: {
        marginVertical: 20,
    },
    notificationLabel: {
        color: colors.dark.light,
        fontSize: 20,
        fontFamily: 'Inter-Regular',
        flex: 1,
        marginVertical: 20,
    },
    footer: {
        position: 'absolute',
        bottom: 20,
    },
    deleteAccountButton: {
        color: colors.dark.danger,
        fontSize: 15,
        marginVertical: 20,
    },
});

export default SettingsScreen;