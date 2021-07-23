import * as React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import ScreenWrapper from '../../components/ScreenWrapper';
import Colors from '../../config/colors';
import Fonts from '../../config/fonts';
import Background from '../../assets/images/onboardingOverSixteen/splash-screen-background.png';
import Logo from '../../assets/images/onboardingOverSixteen/create-account-screen-logo.png';
import CustomButton from '../../components/CustomButton';

const styles = StyleSheet.create({
  logoContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '35%',
  },
  actionsContainer: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionWrapper: {
    width: '90%',
    marginBottom: '5%',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: '2%',
  },
  textDivider: {
    ...Fonts.N_700_12,
    color: Colors.white,
  },
  dash: {
    borderBottomColor: Colors.matFilter,
    width: 16,
    borderBottomWidth: 2.5,
    marginHorizontal: 8,
  },
});

const CreateAccountScreen = ({navigation}) => {
  return (
    <ScreenWrapper image={Background} filter={Colors.screenFilter}>
      <View style={styles.logoContainer}>
        <Image source={Logo} />
      </View>

      <View style={styles.actionsContainer}>
        <View style={styles.actionWrapper}>
          <CustomButton
            title="Create An Account"
            onPress={() => navigation.navigate('AgeQuestion')}
          />
        </View>
        <View style={styles.dividerContainer}>
          <View style={styles.dash}></View>
          <Text style={styles.textDivider}>Or</Text>
          <View style={styles.dash}></View>
        </View>
        <CustomButton
          onPress={() => navigation.navigate('Login')}
          title="Login to your account"
          style={{backgroundColor: Colors.transparent}}
        />
      </View>
    </ScreenWrapper>
  );
};

export default CreateAccountScreen;
