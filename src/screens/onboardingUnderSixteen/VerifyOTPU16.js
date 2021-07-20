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

const VerifyOTPU16 = ({navigation}) => {
  const [codeOne, setCodeOne] = React.useState('');
  const [codeTwo, setCodeTwo] = React.useState('');
  const [codeThree, setCodeThree] = React.useState('');
  const [codeFour, setCodeFour] = React.useState('');
  const [btnInactive, setBtnInactive] = React.useState(true);

  const refCodeTwo = React.useRef();
  const refCodeThree = React.useRef();
  const refCodeFour = React.useRef();

  React.useEffect(() => {
    setBtnInactive(true);
    if (!!codeOne && !!codeTwo && !!codeThree && !!codeFour)
      setBtnInactive(false);
  }, [codeOne, codeTwo, codeThree, codeFour]);

  // HANDLERS ---------------------------------------------------------
  const handleContinue = () => {
    navigation.navigate('Yay');
  };

  // RETURN ---------------------------------------------------------
  return (
    <ScreenWrapper filter={Colors.lightBlack}>
      <View style={styles.wrapper}>
        <View style={styles.navigateActionContainer}>
          <NavigateAction
            title="Step 3 of 7"
            onPress={() => navigation.navigate('EmailOTP')}
          />
        </View>
        <View style={styles.formContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Input Access Code</Text>
            <Text style={styles.info}>
              Please input the access code provided from your parent or guardian
            </Text>
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              onChangeText={value => {
                setCodeOne(value);
                if (value.length === 1) {
                  refCodeTwo.current.focus();
                }
              }}
              returnKeyType="next"
              blurOnSubmit={false}
              placeholderTextColor={Colors.lightSilver}
              value={codeOne}
              style={styles.inputContainer}
              autoCapitalize="none"
              keyboardType="numeric"
              maxLength={1}
              autoFocus={true}
            />
            <TextInput
              onChangeText={value => {
                setCodeTwo(value);
                if (value.length === 1) {
                  refCodeThree.current.focus();
                }
              }}
              returnKeyType="next"
              blurOnSubmit={false}
              ref={refCodeTwo}
              placeholderTextColor={Colors.lightSilver}
              value={codeTwo}
              style={styles.inputContainer}
              autoCapitalize="none"
              keyboardType="numeric"
              maxLength={1}
            />
            <TextInput
              onChangeText={value => {
                setCodeThree(value);
                if (value.length === 1) {
                  refCodeFour.current.focus();
                }
              }}
              returnKeyType="next"
              blurOnSubmit={false}
              ref={refCodeThree}
              placeholderTextColor={Colors.lightSilver}
              value={codeThree}
              style={styles.inputContainer}
              autoCapitalize="none"
              keyboardType="numeric"
              maxLength={1}
            />
            <TextInput
              onChangeText={setCodeFour}
              ref={refCodeFour}
              placeholderTextColor={Colors.lightSilver}
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
      </View>
    </ScreenWrapper>
  );
};

export default VerifyOTPU16;
