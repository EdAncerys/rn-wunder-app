import * as React from 'react';
import {useAuthState, useAuthDispatch, logIn} from '../../context/auth';
import {useApiDispatch} from '../../context/api';

import {View, TextInput, StyleSheet, Text} from 'react-native';

import ScreenWrapper from '../../components/ScreenWrapper';
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
    borderRadius: 5,
    padding: 15,
    marginBottom: 20,
    backgroundColor: Colors.white,
  },
  infoText: {
    ...Fonts.N_700_12,
    color: Colors.white,
    textAlign: 'center',
    marginVertical: 10,
  },
});

const Login = ({navigation}) => {
  const dispatchAuth = useAuthDispatch();
  const dispatchApi = useApiDispatch();
  const {jwt} = useAuthState();

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
    if (jwt) navigation.navigate('AppStack', {screen: 'HomeStack'});
  }, [jwt]);

  return (
    <ScreenWrapper filter={Colors.lightBlack}>
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
    </ScreenWrapper>
  );
};

export default Login;
