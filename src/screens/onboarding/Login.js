import * as React from 'react';
import {
  useAuthState,
  useAuthDispatch,
  logIn,
  getAllUsers,
} from '../../context/auth';
import {useApiDispatch, useApiState} from '../../context/api';
import {LOGIN_EMAIL, LOGIN_PASSWORD} from '@env';

import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';

import ScreenWrapper from '../../components/ScreenWrapper';
import Colors from '../../config/colors';
import Fonts from '../../config/fonts';
import CustomButton from '../../components/CustomButton';
import Loading from '../../components/Loading';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lightBlack,
  },
  contentWrapper: {
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
  const {jwt, allUsers} = useAuthState();
  const {error, loading} = useApiState();

  const [logInEmail, setLogInEmail] = React.useState('');
  const [logInPassword, setLogInPassword] = React.useState('');

  // SERVERS ---------------------------------------------------------
  const User = ({item}) => {
    const {email} = item;

    return (
      <TouchableOpacity
        style={{marginVertical: 5}}
        onPress={() => {
          setLogInEmail(email);
          setLogInPassword('12345');
        }}>
        <Text style={{...Fonts.N_400_12, color: Colors.white}}>{email}</Text>
      </TouchableOpacity>
    );
  };

  const renderFlatListItem = ({item, index}) => <User item={item} />;

  const RenderUsersList = () => {
    return (
      <View style={{marginVertical: 20}}>
        <View>
          <Text
            style={{
              ...Fonts.N_700_16,
              textAlign: 'center',
              color: Colors.primary,
            }}>
            * available user accounts
          </Text>
          <Text
            style={{
              ...Fonts.N_700_16,
              textAlign: 'center',
              color: Colors.primary,
            }}>
            Password 12345
          </Text>
        </View>

        <ScrollView>
          <ScrollView>
            <FlatList
              style={{flex: 1}}
              keyExtractor={(_, index) => String(index)}
              showsVerticalScrollIndicator={false}
              data={Object.values(allUsers)}
              renderItem={renderFlatListItem}
              nestedScrollEnabled={true}
            />
          </ScrollView>
        </ScrollView>
      </View>
    );
  };

  // HANDLERS ---------------------------------------------------------
  const handleLogIn = () => {
    if (!logInEmail && !logInPassword) {
      alert('Please fill all the required fields!');
      return;
    }
    const logInData = {
      identifier: !!logInEmail ? logInEmail : LOGIN_EMAIL,
      password: !!logInPassword ? logInPassword : LOGIN_PASSWORD,
    };
    logIn({dispatchAuth, dispatchApi, logInData});
    setLogInEmail('');
    setLogInPassword('');
  };

  React.useEffect(() => {
    if (!allUsers) getAllUsers({dispatchAuth});
    if (error) alert(error);
    if (jwt) navigation.navigate('TabStack', {screen: 'Home'});
  }, [error, jwt]);

  if (loading) return <Loading />;

  // RETURN ---------------------------------------------------------
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
        {allUsers && <RenderUsersList />}
        {!allUsers && (
          <Text
            style={{
              ...Fonts.N_700_16,
              marginVertical: '20%',
              textAlign: 'center',
              color: Colors.primary,
            }}>
            Loading...
          </Text>
        )}
      </View>
    </ScreenWrapper>
  );
};

export default Login;
