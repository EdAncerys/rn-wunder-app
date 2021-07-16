import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';

import Colors from '../../config/colors';
import Fonts from '../../config/fonts';
import CustomButton from '../../components/CustomButton';
import NavigateAction from '../../components/NavigateAction';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightBlack,
  },
  wrapper: {
    flex: 1,
    marginHorizontal: '5%',
  },
  imgBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  formContainer: {
    flex: 4,
    alignItems: 'center',
    paddingTop: '15%',
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '10%',
    marginVertical: '8%',
  },
  title: {
    ...Fonts.N_700_16,
    textAlign: 'center',
    marginVertical: '4%',
    color: Colors.white,
  },
  info: {
    ...Fonts.N_500_12,
    textAlign: 'center',
    color: Colors.lightSilver,
  },
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  inputContainer: {
    ...Fonts.N_700_24,
    textAlign: 'center',
    width: 56,
    marginVertical: '2%',
    padding: 13,
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
    justifyContent: 'center',
  },
});

const VerifyOTPEmail = ({navigation}) => {
  const [codeOne, setCodeOne] = React.useState('');
  const [codeTwo, setCodeTwo] = React.useState('');
  const [codeThree, setCodeThree] = React.useState('');
  const [codeFour, setCodeFour] = React.useState('');
  const [btnInactive, setBtnInactive] = React.useState(true);

  console.log(codeOne, codeTwo, codeThree, codeFour, btnInactive);

  React.useEffect(() => {
    setBtnInactive(true);
    if (!!codeOne && !!codeTwo && !!codeThree && !!codeFour)
      setBtnInactive(false);
  }, [codeOne, codeTwo, codeThree, codeFour]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <StatusBar hidden />
        <View style={styles.wrapper}>
          <View style={styles.navigateActionContainer}>
            <NavigateAction
              title="Step 3 of 7"
              onPress={() => navigation.navigate('Email')}
            />
          </View>
          <View style={styles.formContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Input Access Code</Text>
              <Text style={styles.info}>
                Please input the access code provided from your parent or
                guardian
              </Text>
            </View>
            <View style={styles.inputWrapper}>
              <TextInput
                placeholderTextColor={Colors.lightSilver}
                onChangeText={setCodeOne}
                value={codeOne}
                style={styles.inputContainer}
                autoCapitalize="none"
                keyboardType="numeric"
                maxLength={1}
              />
              <TextInput
                placeholderTextColor={Colors.lightSilver}
                onChangeText={setCodeTwo}
                value={codeTwo}
                style={styles.inputContainer}
                autoCapitalize="none"
                keyboardType="numeric"
                maxLength={1}
              />
              <TextInput
                placeholderTextColor={Colors.lightSilver}
                onChangeText={setCodeThree}
                value={codeThree}
                style={styles.inputContainer}
                autoCapitalize="none"
                keyboardType="numeric"
                maxLength={1}
              />
              <TextInput
                placeholderTextColor={Colors.lightSilver}
                onChangeText={setCodeFour}
                value={codeFour}
                style={styles.inputContainer}
                autoCapitalize="none"
                keyboardType="numeric"
                maxLength={1}
              />
            </View>
          </View>
          <View style={styles.actionsContainer}>
            <View style={styles.actionsWrapper}>
              <CustomButton
                title="Continue"
                inactive={btnInactive}
                onPress={() => navigation.navigate('')}
              />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default VerifyOTPEmail;
