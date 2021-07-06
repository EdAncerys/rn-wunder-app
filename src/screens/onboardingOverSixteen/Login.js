import React, { useState, useEffect } from 'react';
import { useAuthState, useAuthDispatch, logIn } from '../../context/auth';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import Colors from '../../config/colors';
import CustomButton from '../../components/CustomButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightBlack,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '20%',
  },
  infoTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '5%',
  },
  actionsContainer: {
    alignItems: 'center',
    marginHorizontal: '5%',
    paddingBottom: '40%',
  },
  overSixteenContainer: {
    width: '100%',
    marginBottom: 15,
  },
  titleText: {
    color: Colors.white,
    // fontFamily: 'Sailec-Bold',
    fontSize: 28,
  },
  infoText: {
    color: Colors.white,
    // fontFamily: 'Sailec-Bold',
    fontSize: 12,
  },
  loginContainer: {
    marginBottom: '20%',
    marginHorizontal: '5%',
  },
  textImputeContainer: {
    backgroundColor: Colors.white,
    padding: 15,
    marginVertical: 15,
  },
});

const platform = Platform.OS;
const UploadIdentity = ({ navigation }) => {
  const dispatchAuth = useAuthDispatch();
  const { jwt, user } = useAuthState();

  const [logInEmail, setLogInEmail] = useState('');
  const [logInPassword, setLogInPassword] = useState('');

  // HANDLERS ---------------------------------------------------------
  const handleLogIn = () => {
    const logInData = { identifier: logInEmail, password: logInPassword };
    logIn({ dispatchAuth, logInData });
    setLogInEmail('');
    setLogInPassword('');
  };

  useEffect(() => {
    navigation.navigate('Home');
  }, [user]);

  return (
    <KeyboardAvoidingView
      behavior={platform === 'ios' ? 'padding' : null}
      style={styles.container}
    >
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Login Screen</Text>
        <Text style={styles.titleText}>Layout TBC</Text>
        <View style={styles.infoTextContainer}>
          <Text style={styles.infoText}>
            * login screen & process to be confirmed
          </Text>
        </View>
      </View>
      <View style={styles.loginContainer}>
        <TextInput
          placeholder="email"
          onChangeText={setLogInEmail}
          autoCapitalize="none"
          value={logInEmail}
          style={styles.textImputeContainer}
        />
        <TextInput
          placeholder="password"
          onChangeText={setLogInPassword}
          secureTextEntry={true}
          value={logInPassword}
          style={styles.textImputeContainer}
        />
      </View>

      <View style={styles.actionsContainer}>
        <View style={styles.overSixteenContainer}>
          <CustomButton title="Login" onPress={handleLogIn} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default UploadIdentity;
