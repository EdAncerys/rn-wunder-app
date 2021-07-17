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
  SafeAreaView,
} from 'react-native';
import {useAuthState} from '../../context/auth';

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
    marginTop: '5%',
  },
});

const VerifyMobile = ({navigation}) => {
  const {tempData} = useAuthState();
  const mobile = tempData.mobile;

  const [codeOne, setCodeOne] = React.useState('');
  const [codeTwo, setCodeTwo] = React.useState('');
  const [codeThree, setCodeThree] = React.useState('');
  const [codeFour, setCodeFour] = React.useState('');
  const [btnInactive, setBtnInactive] = React.useState(true);

  React.useEffect(() => {
    setBtnInactive(true);
    if (!!codeOne && !!codeTwo && !!codeThree && !!codeFour)
      setBtnInactive(false);
  }, [codeOne, codeTwo, codeThree, codeFour]);

  // HANDLERS ---------------------------------------------------------
  const handleContinue = () => {
    navigation.navigate('Username');
  };

  // RETURN ---------------------------------------------------------
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <StatusBar hidden />
        <SafeAreaView style={styles.wrapper}>
          <View style={styles.navigateActionContainer}>
            <NavigateAction
              title="Step 5 of 7"
              onPress={() => navigation.navigate('Mobile')}
            />
          </View>
          <View style={styles.formContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Verify your account</Text>
              <Text style={styles.info}>
                Please use the one time password sent to
              </Text>
              <Text style={styles.info}>{mobile}</Text>
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
                onPress={() => handleContinue()}
              />
            </View>
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default VerifyMobile;
