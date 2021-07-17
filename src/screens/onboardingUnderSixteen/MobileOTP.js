import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';

import Colors from '../../config/colors';
import Fonts from '../../config/fonts';
import CustomButton from '../../components/CustomButton';
import NavigateAction from '../../components/NavigateAction';
import EmailRed from '../../assets/icons/app/email-red.png';

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
    color: Colors.white,
    textAlign: 'center',
  },
  inputWrapper: {
    width: '100%',
  },
  inputContainer: {
    ...Fonts.N_400_12,
    marginVertical: 10,
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
    justifyContent: 'center',
    marginTop: '5%',
  },
});

const MobileOTP = ({navigation}) => {
  const [mobile, setMobile] = React.useState('');
  const [btnInactive, setBtnInactive] = React.useState(true);

  React.useEffect(() => {
    setBtnInactive(true);
    if (!!mobile) setBtnInactive(false);
  }, [mobile]);

  // RETURN ---------------------------------------------------------
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <StatusBar hidden />
        <View style={styles.wrapper}>
          <View style={styles.navigateActionContainer}>
            <NavigateAction
              title="Step 2 of 7"
              onPress={() => navigation.navigate('Name')}
            />
          </View>
          <View style={styles.formContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>
                Please input your parent or guardians contact info
              </Text>
            </View>
            <View style={styles.inputWrapper}>
              <TextInput
                placeholder="Mobile number"
                placeholderTextColor={Colors.lightSilver}
                onChangeText={setMobile}
                autoCapitalize="none"
                value={mobile}
                style={styles.inputContainer}
                keyboardType="numeric"
              />
            </View>
            <CustomButton
              title="Use their email address"
              imageRight={EmailRed}
              style={{backgroundColor: Colors.transparent}}
              titleStyling={{...Fonts.N_700_12, color: Colors.gray}}
              imageStyling={{width: 24, height: 17.6}}
              onPress={() => navigation.navigate('EmailOTP')}
            />
          </View>
          <View style={styles.actionsContainer}>
            <View style={styles.actionsWrapper}>
              <CustomButton
                title="Continue"
                inactive={btnInactive}
                onPress={() => navigation.navigate('VerifyOTPEmail')}
              />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default MobileOTP;
