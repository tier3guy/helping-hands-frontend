// Internal Libraries
import React, { useState } from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';

// Components
import { InterText, Input, PrimaryButton } from '../../components';

// Contexts
import { useAuth } from '../../context/authContext';

// Api Services
import { SignupFunction } from '../../api';

// Styles
import colors from '../../assets/themes/colors';

const SignupScreen = ({navigation}) => {

  const [errorMessages, setErrorMessages] = React.useState(null);
  const { user, setUser, setLoader } = useAuth();

  // user data
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const SignupHandler = () => {

    if(fullName === ''){
      setErrorMessages('Full Name is required');
      return;
    }

    if(phone === ''){
      setErrorMessages('Phone is required');
      return;
    }

    const phoneRegex = /^[0-9]{10}$/;

    if(!phoneRegex.test(phone)){
      setErrorMessages('Phone is invalid');
      return;
    }

    if(password === ''){
      setErrorMessages('Password is required');
      return;
    }

    if(confirmPassword === ''){
      setErrorMessages('Confirm Password is required');
      return;
    }

    if(password !== confirmPassword){
      setErrorMessages('Password and Confirm Password does not match');
      return;
    }

    SignupFunction({ fullName, email, phone, password }, setErrorMessages, setUser, setLoader);
    
  };

  const goToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={[styles.w100, styles.container]}>

      <View style={[styles.header, styles.w100]}>
        <InterText style={{ fontSize: 30, marginBottom: 5 }}>Welcome to CreditWizard,</InterText>
        <InterText style={{ lineHeight: 26 }}>Get your free account in a minutes</InterText>
      </View>

      <View style={[styles.w100, styles.inputContainer]}>
        <Input 
          placeholder="Full Name *" 
          icon="person" 
          value={fullName}
          onChangeText={(text) => setFullName(text)}
        />
        <Input 
          placeholder="Email" 
          icon="alternate-email" 
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input 
          placeholder="Phone *" 
          icon="phone" 
          value={phone}
          onChangeText={(text) => setPhone(text)}
        />
        <Input 
          placeholder="Password *" 
          icon="lock" 
          value={password}
          onChangeText={(text) => setPassword(text)}
          eye
        />
        <Input 
          placeholder="Confirm Password *" 
          icon="lock" 
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
          eye
        />
      </View>

      <TouchableOpacity 
        style={[styles.w100]}
        onPress={goToLogin} 
      >
        <InterText size={14}>Log into an Existing Account</InterText>
      </TouchableOpacity>

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

      <View style={[styles.w100, styles.buttonContainer, styles.bottomButton]}>
        <PrimaryButton
          label="Sign Up"
          icon="paper-plane"
          onPress={SignupHandler}
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
    height: 330,
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


export default SignupScreen;