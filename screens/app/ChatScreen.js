// Internal Libraries
import React, { useState, useEffect } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

// Styles
import colors from '../../assets/themes/colors';

// Components
import { 
    ScrollView,
    Header,
    SecondaryButton,
    InterText,
    Input
} from '../../components';

// External Libraries
import { TypingAnimation } from 'react-native-typing-animation';

const MessageBoxWrapper = ({ message }) => {
    return(
        <View style={[styles.w100, { alignItems: message.src === "me" ? 'flex-end' : 'flex-start' }]}>
            <View style={[styles.messageBox, { 
                borderTopRightRadius: message.src === "me" ? 5 : 30,
                borderTopLeftRadius: message.src === "me" ? 30 : 5,
            }]}>
                <InterText style={styles.text}>{message.message}</InterText>
            </View>
        </View>
    );
}

const ChatScreen = ({ navigation }) => {

    const [typing, setTyping] = useState(true);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setTyping(false);
            setMessages([
                ...messages,
                {
                    src: "other",
                    message: "Hi, I am Alsa. I am your personal assistant. How can I help you?"
                }
            ]);
        }, 2000);

        return () => clearTimeout(timeOut);
    }, []);

    return (
        <View style={[styles.w100, styles.container]}>
            <ScrollView>
                <Header 
                    title="New Conversation"
                    navigation={navigation}
                    icon="keyboard-arrow-right"
                    iconSize={30}
                    button
                    onIconPress={() => navigation.goBack()}
                    containerStyle={{
                        padding: 20,
                        elevation: 5
                    }}
                />
                <ScrollView>
                    <View style={[styles.w100, styles.chatContainer]}>
                        {
                            messages.map((message, index) => {
                                return(
                                    <MessageBoxWrapper message={message} key={index} />
                                )
                            })
                        }
                        {
                            typing && (
                                <TypingAnimation 
                                    dotColor={colors.dark.light}
                                    dotMargin={5}
                                    dotRadius={3}
                                    style={{ marginTop: 10 }}
                                />
                            )
                        }
                    </View>
                </ScrollView>
            </ScrollView>
            <View
                style={[styles.w100, styles.bottom]}
            >
                <Input
                    placeholder="Enter your query ..."
                    sideButton={{
                        icon:"paper-plane"
                    }}
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
    },
    w100: {
        width: '100%',
    },
    border: {
        borderWidth: 1,
        borderColor: colors.dark.light,
    },
    bottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
    },
    text: {
        color: colors.dark.light,
        fontSize: 14,
    },
    chatContainer: {
        minHeight: 560,
        borderTopColor: colors.dark.gray,
        borderTopWidth: 0.3,
        width: Dimensions.get('window').width,
        padding: 20,
    },
    messageBox: {
        backgroundColor: colors.dark.orange,
        borderRadius: 30,
        padding: 10,
        marginVertical: 5,
        maxWidth: '80%',
        paddingHorizontal: 20,
    },
});

export default ChatScreen;