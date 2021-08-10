import * as React from 'react';
import {useAuthState, useAuthDispatch, logIn} from '../../context/auth';
import {useApiDispatch, useApiState} from '../../context/api';
import {LOGIN_EMAIL, LOGIN_PASSWORD} from '@env';

import {View, TextInput, StyleSheet, Text} from 'react-native';

import ScreenWrapper from '../../components/ScreenWrapper';
import Colors from '../../config/colors';
import Fonts from '../../config/fonts';
import CustomButton from '../../components/CustomButton';
import Loading from '../../components/Loading';

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
  const {user, jwt} = useAuthState();
  const {error} = useApiState();

  const [isLoading, setIsLoading] = React.useState(false);
  const [logInEmail, setLogInEmail] = React.useState('');
  const [logInPassword, setLogInPassword] = React.useState('');

  // HANDLERS ---------------------------------------------------------
  const handleLogIn = () => {
    // if (!logInEmail && !logInPassword) {
    //   alert('Please fill all the required fields!');
    //   return;
    // }
    setIsLoading(true);
    const logInData = {
      identifier: 'vicki.watkins@example.com',
      password: '12345',
    };
    logIn({dispatchAuth, dispatchApi, logInData});
    setLogInEmail('');
    setLogInPassword('');
  };

  React.useEffect(() => {
    if (error) alert(error);
    if (jwt) {
      setIsLoading(false);
      navigation.navigate('AppStack', {screen: 'HomeStack'});
    }
    console.log('hello ', user);
  }, [error, jwt]);

  if (isLoading) return <Loading />;

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
            <Text
              style={{
                ...Fonts.N_700_16,
                textAlign: 'center',
                color: Colors.primary,
              }}>
              * login with any email & password
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
