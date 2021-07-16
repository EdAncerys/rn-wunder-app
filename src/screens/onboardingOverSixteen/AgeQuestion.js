import * as React from 'react';
import {View, Text, StyleSheet, ImageBackground, StatusBar} from 'react-native';

import Colors from '../../config/colors';
import Background from '../../assets/images/onboardingOverSixteen/age-question-background.png';
import CustomButton from '../../components/CustomButton';
import NavigateAction from '../../components/NavigateAction';
import Fonts from '../../config/fonts';

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
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionsContainer: {
    alignItems: 'center',
    paddingBottom: '18%',
  },
  overSixteenContainer: {
    width: '90%',
    marginBottom: 15,
  },
  underSixteenContainer: {
    marginTop: 15,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textDivider: {
    ...Fonts.N_500_12,
    color: Colors.white,
  },
  dash: {
    borderBottomColor: Colors.white,
    width: 16,
    borderBottomWidth: 1,
    marginHorizontal: 8,
  },
  titleText: {
    ...Fonts.N_700_28,
    color: Colors.white,
  },
  navigateActionContainer: {
    paddingTop: '15%',
    marginHorizontal: '5%',
  },
});

const AgeQuestion = ({navigation}) => {
  return (
    <ImageBackground source={Background} style={styles.imgBackground}>
      <StatusBar hidden />
      <View style={styles.container}>
        <View style={styles.navigateActionContainer}>
          <NavigateAction
            onPress={() => navigation.navigate('CreateAccountScreen')}
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>What best</Text>
          <Text style={styles.titleText}>describes you?</Text>
        </View>

        <View style={styles.actionsContainer}>
          <View style={styles.overSixteenContainer}>
            <CustomButton
              title="Over 16"
              onPress={() => navigation.navigate('UploadIdentity')}
            />
          </View>
          <View style={styles.dividerContainer}>
            <View style={styles.dash}></View>
            <Text style={styles.textDivider}>Or</Text>
            <View style={styles.dash}></View>
          </View>
          <View
            style={{
              ...styles.overSixteenContainer,
              ...styles.underSixteenContainer,
            }}>
            <CustomButton
              title="Under 16"
              onPress={() => navigation.navigate('Name')}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default AgeQuestion;
