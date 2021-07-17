import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  ImageBackground,
} from 'react-native';

import Colors from '../../config/colors';
import Fonts from '../../config/fonts';
import Background from '../../assets/images/onboardingUnderSixteen/location-background.png';
import CustomButton from '../../components/CustomButton';
import NavigateAction from '../../components/NavigateAction';
import IconLocation from '../../assets/icons/app/location.png';

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
  wrapper: {
    flex: 1,
    marginHorizontal: '5%',
  },
  contentContainer: {
    flex: 4,
    alignItems: 'center',
    paddingTop: '15%',
  },
  iconContainer: {
    marginVertical: '10%',
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '10%',
    marginVertical: '8%',
  },
  title: {
    ...Fonts.N_700_28,
    color: Colors.white,
    textAlign: 'center',
  },
  msg: {
    ...Fonts.N_500_12,
    color: Colors.white,
    textAlign: 'center',
  },
  actionsContainer: {
    flex: 1.5,
    alignItems: 'center',
  },
  btnContainer: {
    marginVertical: '2%',
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

const Location = ({navigation}) => {
  // HANDLERS ---------------------------------------------------------
  const handleContinue = () => {
    navigation.navigate('AccountCreated');
  };

  return (
    <ImageBackground source={Background} style={styles.imgBackground}>
      <StatusBar hidden />
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.navigateActionContainer}>
            <NavigateAction
              title="Step 7 of 7"
              onPress={() => navigation.navigate('VerifyEmail')}
            />
          </View>
          <View style={styles.contentContainer}>
            <View style={styles.iconContainer}>
              <Image source={IconLocation} />
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Enable Location Services</Text>
            </View>
            <View>
              <Text style={styles.msg}>
                Enabling location services will allow Wünder to gather and use
                data indicating your approximate location
              </Text>
            </View>
          </View>
          <View style={styles.actionsContainer}>
            <View style={styles.actionsWrapper}>
              <View style={styles.btnContainer}>
                <CustomButton title="Enable" onPress={() => handleContinue()} />
              </View>
              <View style={styles.btnContainer}>
                <CustomButton
                  title="Not Now"
                  style={{backgroundColor: Colors.transparent}}
                  onPress={() => handleContinue()}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Location;
