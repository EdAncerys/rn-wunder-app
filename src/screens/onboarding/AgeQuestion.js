import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useAuthDispatch, tempDataStorage} from '../../context/auth';
import {useApiDispatch} from '../../context/api';

import ScreenWrapper from '../../components/ScreenWrapper';
import Colors from '../../config/colors';
import Background from '../../assets/images/onboardingOverSixteen/age-question-background.png';
import CustomButton from '../../components/CustomButton';
import NavigateAction from '../../components/NavigateAction';
import Fonts from '../../config/fonts';

const styles = StyleSheet.create({
  titleContainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionsContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
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
    borderBottomColor: Colors.matFilter,
    width: 16,
    borderBottomWidth: 2.5,
    marginHorizontal: 8,
  },
  title: {
    ...Fonts.N_700_28,
    color: Colors.white,
  },
  navigateActionContainer: {
    flex: 1,
    marginTop: '5%',
    marginHorizontal: '5%',
  },
});

const AgeQuestion = ({navigation}) => {
  const dispatchAuth = useAuthDispatch();
  const dispatchApi = useApiDispatch();

  // HANDLERS ---------------------------------------------------------
  const handleAccountOverSixteen = () => {
    const tempData = {overSixteen: true};
    tempDataStorage({dispatchAuth, dispatchApi, tempData});
    navigation.navigate('UploadIdentity');
  };

  const handleAccountUnderSixteen = () => {
    const tempData = {overSixteen: false};
    tempDataStorage({dispatchAuth, dispatchApi, tempData});
    navigation.navigate('Name');
  };

  // RETURN ---------------------------------------------------------
  return (
    <ScreenWrapper image={Background} filter={Colors.screenFilter}>
      <View style={styles.navigateActionContainer}>
        <NavigateAction
          onPress={() => navigation.navigate('CreateAccountScreen')}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What best</Text>
        <Text style={styles.title}>describes you?</Text>
      </View>

      <View style={styles.actionsContainer}>
        <View style={styles.overSixteenContainer}>
          <CustomButton
            title="Over 16"
            onPress={() => handleAccountOverSixteen()}
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
            onPress={() => handleAccountUnderSixteen()}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default AgeQuestion;
