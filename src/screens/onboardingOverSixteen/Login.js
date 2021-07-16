import * as React from 'react';
import {
  useAuthState,
  useAuthDispatch,
  logIn,
  StatusBar,
} from '../../context/auth';
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
import Fonts from '../../config/fonts';
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
    ...Fonts.N_700_34,
    color: Colors.white,
    textAlign: 'center',
    marginVertical: 10,
  },
  textInput: {
    borderColor: '#000000',
    borderBottomWidth: 1,
    padding: 15,
    marginBottom: 40,
    backgroundColor: Colors.white,
  },
  infoText: {
    ...Fonts.N_700_12,
    color: Colors.white,
    textAlign: 'center',
    marginVertical: 10,
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
      <StatusBar hidden />
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
