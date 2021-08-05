import * as React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import ScreenWrapper from '../../components/ScreenWrapper';
import Colors from '../../config/colors';
import Fonts from '../../config/fonts';
import CustomButton from '../../components/CustomButton';
import NavigateAction from '../../components/NavigateAction';
import Logo from '../../assets/images/profile/settings-screen-logo.png';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: '5%',
  },
  footerTitle: {
    ...Fonts.N_400_8,
    color: Colors.lightBlack,
    textAlign: 'justify',
    marginHorizontal: '5%',
  },
  navigateActionContainer: {
    marginTop: '5%',
    marginHorizontal: '5%',
  },
  content: {
    flex: 1,
    marginHorizontal: '5%',
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightSilver,
    marginVertical: '2%',
  },
  btnTitleStyling: {
    flex: 1,
    ...Fonts.N_400_16,
    color: Colors.lightBlack,
  },
  btnStyling: {
    backgroundColor: Colors.transparent,
    marginVertical: 5,
  },
  btnWrapper: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightSilver,
  },
  logoContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginVertical: '5%',
  },
});

const Settings = ({navigation, route}) => {
  const {profileDataInfo} = route.params;

  // RETURN ---------------------------------------------------------
  return (
    <ScreenWrapper filter={Colors.white}>
      <View style={styles.wrapper}>
        <View style={styles.navigateActionContainer}>
          <NavigateAction
            title="Settings"
            titleStyling={{color: Colors.lightBlack}}
            iconFill={Colors.lightBlack}
            onPress={() => navigation.goBack()}
          />
        </View>
        <View style={styles.divider} />
        <View style={styles.content}>
          <View style={styles.btnWrapper}>
            <CustomButton
              iconLeft="UserProfile"
              iconLeftWidth={20}
              iconLeftHeight={20}
              title="Account"
              iconRight="ChevronRight"
              iconWidth={16}
              iconHeight={16}
              titleStyling={styles.btnTitleStyling}
              style={styles.btnStyling}
              onPress={() =>
                navigation.navigate('ProfileStack', {
                  screen: 'Account',
                  params: {profileDataInfo: profileDataInfo},
                })
              }
            />
          </View>
          <View style={styles.btnWrapper}>
            <CustomButton
              iconLeft="NotificationsFill"
              iconLeftWidth={20}
              iconLeftHeight={20}
              title="Notifications"
              iconRight="ChevronRight"
              iconWidth={12}
              iconHeight={16}
              titleStyling={styles.btnTitleStyling}
              style={styles.btnStyling}
              onPress={() =>
                navigation.navigate('ProfileStack', {
                  screen: 'Notifications',
                })
              }
            />
          </View>
          <View style={styles.btnWrapper}>
            <CustomButton
              iconLeft="Password"
              iconLeftWidth={20}
              iconLeftHeight={20}
              title="Privacy and Security"
              iconRight="ChevronRight"
              iconWidth={12}
              iconHeight={16}
              titleStyling={styles.btnTitleStyling}
              style={styles.btnStyling}
              onPress={() =>
                navigation.navigate('ProfileStack', {
                  screen: 'PrivacyAndSecurity',
                })
              }
            />
          </View>
          <View style={styles.btnWrapper}>
            <CustomButton
              iconLeft="Payments"
              iconLeftWidth={20}
              iconLeftHeight={20}
              title="Manage Payments"
              iconRight="ChevronRight"
              iconWidth={12}
              iconHeight={16}
              titleStyling={styles.btnTitleStyling}
              style={styles.btnStyling}
              onPress={() =>
                navigation.navigate('ProfileStack', {
                  screen: 'ManagePayments',
                })
              }
            />
          </View>
          <View style={styles.btnWrapper}>
            <CustomButton
              iconLeft="ContentToSocials"
              iconLeftWidth={20}
              iconLeftHeight={20}
              title="Content to Socials"
              iconRight="ChevronRight"
              iconWidth={12}
              iconHeight={16}
              titleStyling={styles.btnTitleStyling}
              style={styles.btnStyling}
              onPress={() =>
                navigation.navigate('ProfileStack', {
                  screen: 'ContentToSocials',
                })
              }
            />
          </View>
          <View style={styles.btnWrapper}>
            <CustomButton
              iconLeft="HelpSupport"
              iconLeftWidth={20}
              iconLeftHeight={20}
              title="Help and Support"
              iconRight="ChevronRight"
              iconWidth={12}
              iconHeight={16}
              titleStyling={styles.btnTitleStyling}
              style={styles.btnStyling}
              onPress={() =>
                navigation.navigate('ProfileStack', {
                  screen: 'HelpAndSupport',
                })
              }
            />
          </View>
          <View style={styles.btnWrapper}>
            <CustomButton
              iconLeft="QuestionMark"
              iconLeftWidth={20}
              iconLeftHeight={20}
              title="About"
              iconRight="ChevronRight"
              iconWidth={12}
              iconHeight={16}
              titleStyling={styles.btnTitleStyling}
              style={styles.btnStyling}
              onPress={() =>
                navigation.navigate('ProfileStack', {
                  screen: 'About',
                })
              }
            />
          </View>
        </View>
        <View style={styles.logoContainer}>
          <Image source={Logo} />
        </View>
        <View style={styles.footerContainer}>
          <Text style={styles.footerTitle}>
            © Copyright 2021 • All Rights Reserved
          </Text>
          <Text style={styles.footerTitle}>
            Terms & Conditions Privacy Policy
          </Text>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Settings;
