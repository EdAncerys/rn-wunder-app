import * as React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import ScreenWrapper from '../../components/ScreenWrapper';
import Colors from '../../config/colors';
import Fonts from '../../config/fonts';
import Background from '../../assets/images/onboardingUnderSixteen/account-created-background.png';
import IconConfirmed from '../../assets/icons/app/confirmed.png';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginHorizontal: '5%',
  },
  contentContainer: {
    flex: 4,
    alignItems: 'center',
    paddingTop: '45%',
  },
  iconContainer: {
    marginVertical: '5%',
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '10%',
    marginVertical: '5%',
  },
  title: {
    ...Fonts.N_700_28,
    color: Colors.white,
    textAlign: 'center',
  },
  msgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '12%',
    marginVertical: '2%',
  },
  msg: {
    ...Fonts.N_500_12,
    color: Colors.white,
    textAlign: 'center',
  },
});

const AccountCreated = ({navigation}) => {
  return (
    <ScreenWrapper image={Background} filter={Colors.screenFilter}>
      <View style={styles.wrapper}>
        <View style={styles.contentContainer}>
          <View style={styles.iconContainer}>
            <Image source={IconConfirmed} />
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Account Created!</Text>
          </View>
          <View style={styles.msgContainer}>
            <Text style={styles.msg}>
              We are checking your information and will get back to you as soon
              as possible allowing you to progress to the app.
            </Text>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default AccountCreated;
