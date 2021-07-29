import * as React from 'react';
import {View, StyleSheet, Image} from 'react-native';

import ScreenWrapper from '../../components/ScreenWrapper';
import Colors from '../../config/colors';
import Fonts from '../../config/fonts';
import CustomButton from '../../components/CustomButton';
import Background from '../../assets/images/onboardingOverSixteen/splash-screen-background.png';
import Logo from '../../assets/images/onboardingOverSixteen/logo.png';

const styles = StyleSheet.create({
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
  },
  actionsContainer: {
    alignItems: 'center',
    marginBottom: '8%',
  },
  startActionText: {
    ...Fonts.N_700_16,
    color: Colors.white,
  },
});

const SplashScreen = ({navigation}) => {
  return (
    <ScreenWrapper image={Background} filter={Colors.screenFilter}>
      <View
        style={{
          position: 'absolute',
          top: '5%',
          left: '5%',
        }}>
        <CustomButton
          iconLeft="Create"
          iconFill={Colors.primary}
          onPress={() => navigation.navigate('AppStack', {screen: 'Home'})}
          style={{backgroundColor: Colors.transparent}}
        />
      </View>
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
