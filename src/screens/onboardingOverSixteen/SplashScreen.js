import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';

import Colors from '../../config/colors';
import Background from '../../assets/images/onboardingOverSixteen/splash-screen-background.png';
import Logo from '../../assets/images/onboardingOverSixteen/splash-screen-logo.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    color: Colors.white,
    fontFamily: 'Sailec',
    fontSize: 16,
  },
});

const SplashScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={Background} style={styles.imgBackground}>
        <View style={styles.logoContainer}>
          <Image source={Logo} />
        </View>
        <View style={styles.actionsContainer}>
          <TouchableOpacity onPress={() => alert('path')}>
            <Text
              style={styles.startActionText}
              onPress={() => navigation.navigate('Visual')}>
              Tap to Start
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SplashScreen;
