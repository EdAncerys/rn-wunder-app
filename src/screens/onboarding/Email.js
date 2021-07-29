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

const Email = ({navigation}) => {
  const dispatchAuth = useAuthDispatch();
  const dispatchApi = useApiDispatch();
  const {tempData} = useAuthState();

  const [email, setEmail] = React.useState('');
  const [btnInactive, setBtnInactive] = React.useState(true);
  const [backPath, setBackPath] = React.useState(false);

  React.useEffect(() => {
    setBtnInactive(true);
    if (!!email) setBtnInactive(false);
  }, [email]);

  React.useEffect(() => {
    setBtnInactive(true);
    if (!tempData.overSixteen) setBackPath('Yay');
  }, [tempData]);

  // HANDLERS ---------------------------------------------------------
  const handleContinue = data => {
    const tempData = {...data, ...{email: email}};
    tempDataStorage({dispatchAuth, dispatchApi, tempData});
    setEmail('');
    navigation.navigate('VerifyEmail');
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
            <Text style={styles.title}>What’s your email address?</Text>
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="Email address"
              placeholderTextColor={Colors.lightSilver}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
              value={email}
              style={styles.inputContainer}
            />
          </View>
          <CustomButton
            title="Use your mobile number"
            iconLeft="Handset"
            iconFill={Colors.primary}
            style={{backgroundColor: Colors.transparent}}
            titleStyling={{...Fonts.N_700_12, color: Colors.gray}}
            onPress={() => navigation.navigate('Mobile')}
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

export default Email;
