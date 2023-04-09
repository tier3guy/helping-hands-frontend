// Internal Libraries
import React, { useState, useEffect } from "react";
import { Dimensions, StyleSheet, View } from "react-native";

// Styles
import colors from "../../assets/themes/colors";

// Components
import {
  ScrollView,
  Header,
  SecondaryButton,
  InterText,
  Input,
} from "../../components";

// External Libraries
import { TypingAnimation } from "react-native-typing-animation";

// Globals
import questions from "../../globals/questionaries";

// Utils
import convertToUSD from "../../utils/convertToUSD";
import generateRandomLoanId from "../../utils/generateLoanId";

// Apis
import { predictLoanVerdictFunction } from "../../api";

const MessageBoxWrapper = ({ message }) => {
  return (
    <View
      style={[
        styles.w100,
        { alignItems: message.src === "me" ? "flex-end" : "flex-start" },
      ]}
    >
      <View
        style={[
          styles.messageBox,
          {
            borderTopRightRadius: message.src === "me" ? 5 : 30,
            borderTopLeftRadius: message.src === "me" ? 30 : 5,
            // backgroundColor:
            //   message.src === "me" ? colors.dark.gray : colors.dark.orange,
          },
        ]}
      >
        <InterText style={styles.text}>{message.message}</InterText>
      </View>
    </View>
  );
};

const ChatScreen = ({ navigation }) => {
  const [messages, setMessages] = useState([
    { src: "other", message: "Hey, I am Alsa, your personal assistant." },
  ]);
  const [typing, setTyping] = useState(false);
  const TIME_INTERVAL = 2000;
  const [questionId, setQuestionId] = useState(0); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const [isAnswered, setIsAnswered] = useState(true);
  const [answers, setAnswers] = useState([generateRandomLoanId()]);
  const [answer, setAnswer] = useState("");

  const putAnswer = (answer) => {
    if (questionId === 5 || questionId === 6 || questionId === 7) {
      const income = convertToUSD(answer);
      setAnswers((prev) => [...prev, income]);
    } else if (questionId === 2 || questionId === 8) {
      setAnswers((prev) => [...prev, parseInt(answer)]);
    } else if (questionId === 9) {
      const credit = answer === "Yes" ? 1 : 0;
      setAnswers((prev) => [...prev, credit]);
    } else setAnswers((prev) => [...prev, answer.trim()]);

    setMessages((prev) => [
      ...prev,
      {
        src: "me",
        message: answer,
      },
    ]);
    setIsAnswered(true);
    setQuestionId((prev) => prev + 1);
  };

  useEffect(() => {
    if (questionId === questions.length) {
      return;
    }

    if (isAnswered) {
      setTyping(true);

      const timeOut = setTimeout(() => {
        setTyping(false);

        setMessages((prev) => [
          ...prev,
          {
            src: "other",
            message: questions[questionId].question,
          },
        ]);
        setIsAnswered(false);
      }, TIME_INTERVAL);

      return () => clearTimeout(timeOut);
    }
  }, [isAnswered]);

  useEffect(() => {
    if (questionId === questions.length) {
      setMessages((prev) => [
        ...prev,
        {
          src: "other",
          message: "We are processing your request. Please wait ...",
        },
      ]);
      predictLoanVerdictFunction({ setTyping, setMessages, values: answers });
    }
  }, [questionId]);

  console.log(questionId);

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
            elevation: 5,
          }}
        />
        <ScrollView>
          <View style={[styles.w100, styles.chatContainer]}>
            {messages.map((message, index) => {
              return <MessageBoxWrapper message={message} key={index} />;
            })}
            {typing && (
              <TypingAnimation
                dotColor={colors.dark.light}
                dotMargin={5}
                dotRadius={3}
                style={{ marginTop: 10 }}
              />
            )}
          </View>
        </ScrollView>
      </ScrollView>
      <View style={[styles.w100, styles.bottom]}>
        <Input
          placeholder="Type your answer here ..."
          sideButton={{
            icon: "paper-plane",
          }}
          value={answer}
          onChangeText={setAnswer}
          onSideButtonPress={() => {
            putAnswer(answer);
            setAnswer("");
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark.dark,
    alignItems: "center",
  },
  w100: {
    width: "100%",
  },
  border: {
    borderWidth: 1,
    borderColor: colors.dark.light,
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
    width: Dimensions.get("window").width,
    padding: 20,
  },
  messageBox: {
    backgroundColor: colors.dark.orange,
    borderRadius: 30,
    padding: 10,
    marginVertical: 5,
    maxWidth: "80%",
    paddingHorizontal: 20,
  },
});

export default ChatScreen;
