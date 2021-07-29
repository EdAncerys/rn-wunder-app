import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useAuthState} from '../../context/auth';

import ScreenWrapper from '../../components/ScreenWrapper';
import Colors from '../../config/colors';
import Fonts from '../../config/fonts';
import CustomButton from '../../components/CustomButton';
import NavigateAction from '../../components/NavigateAction';

const styles = StyleSheet.create({
  titleContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
  },
  actionsContainer: {
    flex: 1,
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
    textAlign: 'center',
    marginHorizontal: '20%',
    color: Colors.white,
  },
  infoText: {
    ...Fonts.N_500_12,
    color: Colors.white,
  },
  navigateActionContainer: {
    flex: 1,
    marginTop: '5%',
    marginHorizontal: '5%',
  },
});

const UploadIdentity = ({navigation}) => {
  const {tempData} = useAuthState();

  return (
    <ScreenWrapper filter={Colors.lightBlack}>
      <View style={styles.navigateActionContainer}>
        <NavigateAction
          title="Step 1 of 7"
          onPress={() => navigation.navigate('AgeQuestion')}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          Choose your form of ID to verify yourself
        </Text>
        <View style={styles.infoTextContainer}>
          <Text style={styles.infoText}>
            You wont be able to create an account until we have
          </Text>
          <Text style={styles.infoText}>
            verified your identification as a real user
          </Text>
        </View>
      </View>

      <View style={styles.actionsContainer}>
        <View style={styles.overSixteenContainer}>
          <CustomButton
            title="Driving Licence"
            onPress={() => navigation.navigate('UploadLicenceFront')}
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
            title="Passport"
            onPress={() => navigation.navigate('UploadPassport')}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default UploadIdentity;
