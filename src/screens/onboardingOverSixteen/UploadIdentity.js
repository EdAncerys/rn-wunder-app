import * as React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';

import Colors from '../../config/colors';
import Fonts from '../../config/fonts';
import CustomButton from '../../components/CustomButton';
import NavigateAction from '../../components/NavigateAction';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightBlack,
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
    paddingTop: '30%',
  },
  infoTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '5%',
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
  infoText: {
    ...Fonts.N_500_12,
    color: Colors.white,
  },
  navigateActionContainer: {
    paddingTop: '20%',
    marginHorizontal: '5%',
  },
});

const UploadIdentity = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.navigateActionContainer}>
        <NavigateAction
          title="Step 1 of 7"
          onPress={() => navigation.navigate('AgeQuestion')}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Choose your form</Text>
        <Text style={styles.titleText}>of ID to verify</Text>
        <Text style={styles.titleText}>yourself</Text>
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
    </View>
  );
};

export default UploadIdentity;
