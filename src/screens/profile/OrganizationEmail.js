import * as React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

import ScreenWrapper from '../../components/ScreenWrapper';
import Colors from '../../config/colors';
import Fonts from '../../config/fonts';
import CustomButton from '../../components/CustomButton';
import NavigateAction from '../../components/NavigateAction';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginHorizontal: '5%',
  },
  formContainer: {
    flex: 4,
    alignItems: 'center',
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '8%',
  },
  title: {
    ...Fonts.N_700_16,
    color: Colors.white,
    textAlign: 'center',
    marginHorizontal: '15%',
  },
  inputWrapper: {
    width: '100%',
  },
  inputContainer: {
    ...Fonts.N_400_12,
    marginVertical: '2%',
    padding: 15,
    borderRadius: 4,
    backgroundColor: Colors.white,
  },
  info: {
    ...Fonts.N_400_10,
    marginVertical: '2%',
    color: Colors.lightSilver,
  },
  actionsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionsWrapper: {
    width: '100%',
  },
  navigateActionContainer: {
    flex: 1,
    marginTop: '5%',
  },
});

const OrganizationEmail = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [btnInactive, setBtnInactive] = React.useState(true);

  React.useEffect(() => {
    setBtnInactive(true);
    if (!!email) setBtnInactive(false);
  }, [email]);

  // HANDLERS ---------------------------------------------------------
  const handleContinue = () => {
    navigation.navigate('ConfirmedProAccount');
    setEmail('');
  };

  // RETURN ---------------------------------------------------------
  return (
    <ScreenWrapper filter={Colors.lightBlack}>
      <View style={styles.wrapper}>
        <View style={styles.navigateActionContainer}>
          <NavigateAction
            title="Step 1 of 6"
            onPress={() => navigation.navigate('OrganizationRegNumber')}
          />
        </View>
        <View style={styles.formContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              What’s your organisation email address?
            </Text>
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="Email address"
              placeholderTextColor={Colors.lightSilver}
              onChangeText={setEmail}
              autoCapitalize="none"
              value={email}
              style={styles.inputContainer}
              keyboardType="email-address"
            />
          </View>
          <View>
            <Text style={styles.info}>
              Email must be a registered domain to be accepted
            </Text>
          </View>
        </View>
        <View style={styles.actionsContainer}>
          <View style={styles.actionsWrapper}>
            <CustomButton
              title="Continue"
              inactive={btnInactive}
              onPress={() => handleContinue()}
            />
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default OrganizationEmail;
