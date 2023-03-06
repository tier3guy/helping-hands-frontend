// Internal Libraries
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import FlySVG from '../../assets/svgs/fly';

// Styles
import colors from '../../assets/themes/colors';

// Components
import { 
    ScrollView,
    Header,
    PrimaryButton,
    InterText
} from '../../components';


const NoChats = () => {
    return (
        <View
            style={[styles.w100, styles.chatContainer]}
        >
            <FlySVG size={200} />
            <InterText style={styles.text}>You don't have any Conversation history</InterText>
        </View>
    )
}


const HomeScreen = ({ navigation }) => {

    const [chats, setChats] = useState([]);

    return (
        <View style={[styles.w100, styles.container]}>
            <ScrollView>
                <Header 
                    title="Chat History"
                    navigation={navigation}
                    searchBar
                    button
                    onIconPress={() => navigation.navigate('Settings')}
                />
                <View
                    style={[styles.chatContainer]}
                >
                {
                    chats.length === 0 ? <NoChats/> : null
                }
                </View>
            </ScrollView>
            <View
                style={[styles.w100]}
            >
                <PrimaryButton
                    label="Start a new Conversation"
                    onPress={() => navigation.navigate('ChatScreen')}
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
        padding: 20,
    },
    w100: {
        width: '100%',
    },
    border: {
        borderWidth: 1,
        borderColor: colors.dark.light,
    },
    chatContainer: {
        minHeight: 500,
        alignItems: 'center',
    },
    text: {
        color: "gray" || colors.dark.light,
        textAlign: 'center',
        marginTop: -100,
        fontSize: 14,
    }
});

export default HomeScreen