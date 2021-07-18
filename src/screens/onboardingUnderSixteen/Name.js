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

const Name = ({navigation}) => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [btnInactive, setBtnInactive] = React.useState(true);

  React.useEffect(() => {
    setBtnInactive(true);
    if (!!firstName && !!lastName) setBtnInactive(false);
  }, [firstName, lastName]);

  // RETURN ---------------------------------------------------------
  return (
    <ScreenWrapper filter={Colors.lightBlack}>
      <View style={styles.wrapper}>
        <View style={styles.navigateActionContainer}>
          <NavigateAction
            title="Step 1 of 7"
            onPress={() => navigation.navigate('AgeQuestion')}
          />
        </View>
        <View style={styles.formContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>What is your name?</Text>
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="First Name"
              placeholderTextColor={Colors.lightSilver}
              onChangeText={setFirstName}
              autoCapitalize="none"
              value={firstName}
              style={styles.inputContainer}
            />
            <TextInput
              placeholder="Last Name"
              placeholderTextColor={Colors.lightSilver}
              onChangeText={setLastName}
              secureTextEntry={true}
              value={lastName}
              style={styles.inputContainer}
            />
          </View>
        </View>
        <View style={styles.actionsContainer}>
          <View style={styles.actionsWrapper}>
            <CustomButton
              title="Continue"
              inactive={btnInactive}
              onPress={() => navigation.navigate('EmailOTP')}
            />
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Name;
