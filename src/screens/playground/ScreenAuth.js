import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
} from 'react-native';
import {
  useAuthState,
  useAuthDispatch,
  logIn,
  logOut,
  signUp,
} from '../../context/auth';
import {useApiDispatch} from '../../context/api';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
  },
  screenTitle: {
    textAlign: 'center',
    paddingVertical: 5,
    fontWeight: 'bold',
  },
  containerMessage: {
    backgroundColor: 'lightyellow',
    padding: 5,
    display: 'flex',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontFamily: 'Sailec',
    fontSize: 15,
    paddingVertical: 5,
  },
  containerForm: {
    backgroundColor: 'lightgreen',
    margin: 20,
  },
});

const ScreenAuth = ({navigation}) => {
  const dispatchAuth = useAuthDispatch();
  const dispatchApi = useApiDispatch();
  const {jwt, user} = useAuthState();

  const [logInEmail, setLogInEmail] = useState('');
  const [logInPassword, setLogInPassword] = useState('');

  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');

  // HANDLERS ---------------------------------------------------------
  const handleLogIn = () => {
    const logInData = {identifier: logInEmail, password: logInPassword};
    logIn({dispatchAuth, dispatchApi, logInData});
    setLogInEmail('');
    setLogInPassword('');
  };

  const handleSignUp = () => {
    const newUserData = {
      username: signUpEmail,
      email: signUpEmail,
      password: signUpPassword,
    };
    signUp({dispatchApi, dispatchAuth, newUserData});
    setSignUpEmail('');
    setSignUpPassword('');
  };

  const handleLogOut = () => {
    logOut({dispatchAuth});
  };

  // SERVERS ---------------------------------------------------------
  const ServeUserInfo = ({user}) => {
    if (user.role.type === 'authenticated') {
      return (
        <View style={styles.containerMessage}>
          <Text>Logged in as: {user.username}</Text>
          <Text>Token: {jwt}</Text>
          <Button title="Log Out" onPress={handleLogOut} />
        </View>
      );
    }
    return (
      <View style={styles.containerMessage}>
        <Text>Not logged in.</Text>
      </View>
    );
  };

  // RETURN ---------------------------------------------------------
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.screenTitle}>Auth Screen</Text>
      {<ServeUserInfo props={props} />}
      <View style={styles.containerForm}>
        <Text style={styles.title}>Log In</Text>
        <TextInput
          placeholder="email"
          onChangeText={setLogInEmail}
          autoCapitalize="none"
          value={logInEmail}
        />
        <TextInput
          placeholder="password"
          onChangeText={setLogInPassword}
          secureTextEntry={true}
          value={logInPassword}
        />
        <Button title="Log In" onPress={handleLogIn} />
      </View>
      <View style={styles.containerForm}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput
          placeholder="email"
          onChangeText={setSignUpEmail}
          autoCapitalize="none"
          value={signUpEmail}
        />
        <TextInput
          placeholder="password"
          onChangeText={setSignUpPassword}
          secureTextEntry={true}
          value={signUpPassword}
        />
        <Button title="Sign Up" onPress={handleSignUp} />
      </View>
    </SafeAreaView>
  );
};

export default ScreenAuth;
