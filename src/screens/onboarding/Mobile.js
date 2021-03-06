import * as React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {
  useAuthDispatch,
  useAuthState,
  tempDataStorage,
} from '../../context/auth';
import {useApiDispatch} from '../../context/api';

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

const Mobile = ({navigation}) => {
  const dispatchAuth = useAuthDispatch();
  const dispatchApi = useApiDispatch();
  const {tempData} = useAuthState();

  const [mobile, setMobile] = React.useState('');
  const [btnInactive, setBtnInactive] = React.useState(true);
  const [backPath, setBackPath] = React.useState(false);

  React.useEffect(() => {
    setBtnInactive(true);
    if (!!mobile) setBtnInactive(false);
  }, [mobile]);

  React.useEffect(() => {
    setBtnInactive(true);
    if (!tempData.overSixteen) setBackPath('Yay');
  }, [tempData]);

  // HANDLERS ---------------------------------------------------------
  const handleContinue = data => {
    const tempData = {...data, ...{mobile: mobile}};
    tempDataStorage({dispatchAuth, dispatchApi, tempData});
    setMobile('');
    navigation.navigate('VerifyMobile');
  };

  // RETURN ---------------------------------------------------------
  return (
    <ScreenWrapper filter={Colors.lightBlack}>
      <View style={styles.wrapper}>
        <View style={styles.navigateActionContainer}>
          <NavigateAction
            title="Step 4 of 7"
            onPress={() =>
              navigation.navigate(backPath || 'UploadPictureOfYourself')
            }
          />
        </View>
        <View style={styles.formContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>What???s your mobile number?</Text>
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
            title="Use your email address"
            iconLeft="Email"
            iconWidth={22}
            iconFill={Colors.primary}
            style={{backgroundColor: Colors.transparent}}
            titleStyling={{...Fonts.N_700_12, color: Colors.gray}}
            iconStyling={{width: 24, height: 17.6}}
            onPress={() => navigation.navigate('Email')}
          />
        </View>
        <View style={styles.actionsContainer}>
          <View style={styles.actionsWrapper}>
            <CustomButton
              title="Continue"
              inactive={btnInactive}
              onPress={() => handleContinue((data = tempData))}
            />
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Mobile;
