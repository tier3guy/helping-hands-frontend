// Internal Libraries
import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

// Components
import { 
  InterText,
  Input,
  PrimaryButton,
  SecondaryButton
} from '../../components';


// Styles
import colors from '../../assets/themes/colors';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      
      <View style={[styles.header, styles.w100]}>
        <InterText style={{ fontSize: 30, marginBottom: 5 }}>Hello Again,</InterText>
        <InterText style={{ lineHeight: 26 }}>Wellcome back, You've been missed !</InterText>
      </View>

      <View style={[styles.w100, styles.inputContainer]}>
        <Input placeholder="Email / Phone" icon="alternate-email" />
        <Input placeholder="Password" icon="lock" eye />
      </View>

      <TouchableOpacity style={[styles.w100]}>
        <InterText size={14}>Recovery Password</InterText>
      </TouchableOpacity>

      <View style={[styles.w100, styles.buttonContainer]}>
        <PrimaryButton
          label="Login"
          icon="paper-plane"
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  w100: {
    width: '100%',
  },
  border: {
    borderWidth: 1,
    borderColor: colors.dark.light,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.dark.dark,
    padding: 20,
  },
  header: {
    justifyContent: 'center',
    paddingVertical: 20,
    // alignItems: 'center',
    // paddingHorizontal: 20,
  },
  inputContainer: {
    height: 130,
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  buttonContainer: {
    marginVertical: 20,
  }
});

export default LoginScreen;