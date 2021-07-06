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
import CustomButton from '../../components/CustomButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, .4)',
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
    paddingTop: '25%',
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
  },
  textDivider: {
    color: Colors.white,
    // fontFamily: 'Sailec-Bold',
    fontSize: 12,
  },
  dash: {
    borderBottomColor: Colors.white,
    width: 16,
    borderBottomWidth: 1,
    marginHorizontal: 8,
  },
  loginActionText: {
    color: Colors.white,
    // fontFamily: 'Sailec-Bold',
    fontSize: 16,
  },
});

const CreateAccountScreen = ({ navigation }) => {
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
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={{ alignSelf: 'center', marginTop: 20 }}
          >
            <Text style={styles.loginActionText}>Login to your account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default CreateAccountScreen;
