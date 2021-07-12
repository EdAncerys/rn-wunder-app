import * as React from 'react';
import {useAuthState, useAuthDispatch, logIn} from '../../context/auth';
import {useApiDispatch} from '../../context/api';

import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import Colors from '../../config/colors';
import CustomButton from '../../components/CustomButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightBlack,
  },
  contentWrapper: {
    flex: 1,
    padding: 24,
  },
  headerContainer: {
    marginVertical: '20%',
  },
  headerText: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 36,
    fontFamily: 'Sailec',
    color: Colors.white,
  },
  textInput: {
    borderColor: '#000000',
    borderBottomWidth: 1,
    padding: 15,
    marginBottom: 40,
    backgroundColor: Colors.white,
  },
  infoText: {
    textAlign: 'center',
    marginVertical: 10,
    color: Colors.white,
    fontFamily: 'Sailec',
    fontSize: 12,
  },
});

const UploadIdentity = ({navigation}) => {
  const dispatchAuth = useAuthDispatch();
  const dispatchApi = useApiDispatch();
  const {jwt, user} = useAuthState();
  console.log(user);

  const [logInEmail, setLogInEmail] = React.useState('');
  const [logInPassword, setLogInPassword] = React.useState('');

  // HANDLERS ---------------------------------------------------------
  const handleLogIn = () => {
    if (!logInEmail && !logInPassword) {
      alert('No credentials provided!');
      return;
    }

    const logInData = {identifier: logInEmail, password: logInPassword};
    logIn({dispatchAuth, dispatchApi, logInData});
    setLogInEmail('');
    setLogInPassword('');
  };

  React.useEffect(() => {
    navigation.navigate('Home');
  }, [user]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.contentWrapper}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Login Screen</Text>
            <Text style={styles.headerText}>Layout TBC</Text>
            <View style={styles.infoTextContainer}>
              <Text style={styles.infoText}>
                * login screen & process to be confirmed
              </Text>
            </View>
          </View>
          <TextInput
            placeholder="email"
            onChangeText={setLogInEmail}
            autoCapitalize="none"
            value={logInEmail}
            style={styles.textInput}
          />
          <TextInput
            placeholder="password"
            onChangeText={setLogInPassword}
            secureTextEntry={true}
            value={logInPassword}
            style={styles.textInput}
          />
          <View>
            <CustomButton title="Login" onPress={handleLogIn} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default UploadIdentity;
