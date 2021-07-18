import * as React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  StatusBar,
} from 'react-native';

import ScreenWrapper from '../../components/ScreenWrapper';
import Colors from '../../config/colors';
import Fonts from '../../config/fonts';
import CustomButton from '../../components/CustomButton';
import Background from '../../assets/images/onboardingOverSixteen/splash-screen-background.png';
import Logo from '../../assets/images/onboardingOverSixteen/splash-screen-logo.png';

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
  },
  actionsContainer: {
    alignItems: 'center',
    paddingBottom: 72,
  },
  startActionText: {
    ...Fonts.N_700_16,
    color: Colors.white,
  },
});

const SplashScreen = ({navigation}) => {
  return (
    <ScreenWrapper image={Background} filter={Colors.screenFilter}>
      <View style={styles.logoContainer}>
        <Image source={Logo} />
      </View>
      <View style={styles.actionsContainer}>
        <CustomButton
          onPress={() => navigation.navigate('Visual')}
          title="Tap to Start"
          style={{backgroundColor: Colors.transparent}}
        />
      </View>
    </ScreenWrapper>
  );
};

export default SplashScreen;
