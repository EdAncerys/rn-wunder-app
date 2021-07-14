import * as React from 'react';
import {View, Text, StyleSheet, ImageBackground, Image} from 'react-native';

import Colors from '../../config/colors';
import Fonts from '../../config/fonts';
import Background from '../../assets/images/onboardingOverSixteen/splash-screen-background.png';
import Logo from '../../assets/images/onboardingOverSixteen/splash-screen-logo.png';
import CustomButton from '../../components/CustomButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.screenFilter,
  },
  imgBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '30%',
  },
  actionsContainer: {
    alignItems: 'center',
    paddingBottom: '18%',
  },
  createAccountContainer: {
    width: '90%',
    marginBottom: 23,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  textDivider: {
    ...Fonts.N_700_12,
    color: Colors.white,
  },
  dash: {
    borderBottomColor: Colors.white,
    width: 16,
    borderBottomWidth: 1,
    marginHorizontal: 8,
  },
});

const CreateAccountScreen = ({navigation}) => {
  return (
    <ImageBackground source={Background} style={styles.imgBackground}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={Logo} />
        </View>

        <View style={styles.actionsContainer}>
          <View style={styles.createAccountContainer}>
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
      </View>
    </ImageBackground>
  );
};

export default CreateAccountScreen;
