// Internal Libraries
import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

// Components
import { 
  InterText,
  Input,
  PrimaryButton,
  Loader
} from '../../components';

// Styles
import colors from '../../assets/themes/colors';

// Api Services
import { LoginFunction } from '../../api';

// Contexts
import { useAuth } from '../../context/authContext';

const LoginScreen = ({navigation}) => {

  const [errorMessages, setErrorMessages] = React.useState(null);
  const [emailOrPhone, setEmailOrPhone] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { setUser, loader, setLoader } = useAuth();

  const LoginHandler = () => {

    if(emailOrPhone === ''){
      setErrorMessages('Email or Phone is required');
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const phoneRegex = /^[0-9]{10}$/;

    if(!emailRegex.test(emailOrPhone) && !phoneRegex.test(emailOrPhone)){
      setErrorMessages('Email or Phone is invalid');
      return;
    }

    if(password === ''){
      setErrorMessages('Password is required');
      return;
    }
    
    LoginFunction({ emailOrPhone, password }, setErrorMessages, setUser, setLoader);
  };

  const goToSignup = () => {
    navigation.navigate('Signup');
  };

  return (
    <View style={styles.container}>
      
      <View style={[styles.header, styles.w100]}>
        <InterText style={{ fontSize: 30, marginBottom: 5 }}>Hello Again,</InterText>
        <InterText style={{ lineHeight: 26 }}>Wellcome back, You've been missed !</InterText>
      </View>

      <View style={[styles.w100, styles.inputContainer]}>
        <Input 
          placeholder="Email / Phone" 
          icon="alternate-email" 
          value={emailOrPhone}
          onChangeText={(text) => setEmailOrPhone(text)}
          />
        <Input 
          placeholder="Password" 
          icon="lock" 
          value={password}
          onChangeText={(text) => setPassword(text)}
          eye 
        />
      </View>

      <TouchableOpacity style={[styles.w100]}>
        <InterText size={14}>Recovery Password</InterText>
      </TouchableOpacity>

      <View style={[styles.w100, styles.buttonContainer]}>
        <PrimaryButton
          label="Login"
          icon="paper-plane"
          onPress={LoginHandler}
        />
      </View>

      <View style={[styles.w100, styles.errorBox]}>
        {
          errorMessages && 
          <InterText 
            size={14} 
            style={{ color: colors.dark.danger }}
          >
            {errorMessages}
          </InterText>
        }
      </View>

      <TouchableOpacity 
        style={[styles.w100, styles.bottomButton]}
        onPress={goToSignup}
      >
        <InterText size={14}>Don't have an account ?</InterText>
      </TouchableOpacity>

      <Loader loading={loader} />
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
  },
  bottomButton: {
    position: 'absolute',
    bottom: 20,
  },
  errorBox: {
    height: 30,
    alignItems: 'center',
    // justifyContent: 'center',
  }
});

export default LoginScreen;