// Internal Libraries
import React from 'react';
import { StyleSheet, View } from 'react-native';

// Styles
import colors from '../../assets/themes/colors';

// Components
import InterText from '../Text/InterText';

// Contexts
import { useAuth } from '../../context/authContext';

const ProfileCard = () => {

    const { user } = useAuth();

    const textOptions = {
        size: 15,
        style: {
            marginTop: 5
        }
    };

    return (
        <View style={[styles.container, styles.w100]}>
            <InterText>Hi, {user?.name}</InterText>
            <InterText {...textOptions}>UID: {user?._id}</InterText>
            {
                user?.email ? <InterText {...textOptions}>Email: {user?.email}</InterText> : null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.dark.gray,
        padding: 15,
        borderRadius: 10,
        elevation: 4,
    },
    w100: {
        width: '100%'
    },
    border: {
        borderWidth: 1,
        borderColor: colors.dark.light,
    }
});

export default ProfileCard;