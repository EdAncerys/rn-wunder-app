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

  // HANDLERS ---------------------------------------------------------
  const handleContinue = () => {
    navigation.navigate('VerifyOTPU16');
    setMobile('');
  };

  // RETURN ---------------------------------------------------------
  return (
    <ScreenWrapper filter={Colors.lightBlack}>
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
              keyboardType="phone-pad"
            />
          </View>
          <CustomButton
            title="Use their email address"
            iconLeft="Email"
            iconWidth={22}
            iconFill={Colors.primary}
            style={{backgroundColor: Colors.transparent}}
            titleStyling={{...Fonts.N_700_12, color: Colors.gray}}
            iconStyling={{width: 24, height: 17.6}}
            onPress={() => navigation.navigate('EmailOTP')}
          />
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

export default MobileOTP;
