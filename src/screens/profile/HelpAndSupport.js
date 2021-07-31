import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import ScreenWrapper from '../../components/ScreenWrapper';
import Colors from '../../config/colors';
import Fonts from '../../config/fonts';
import CustomButton from '../../components/CustomButton';
import NavigateAction from '../../components/NavigateAction';

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
    flex: 3,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginVertical: '5%',
  },
});

const Settings = ({navigation}) => {
  // RETURN ---------------------------------------------------------
  return (
    <ScreenWrapper filter={Colors.white}>
      <View style={styles.wrapper}>
        <View style={styles.navigateActionContainer}>
          <NavigateAction
            title="Help and Support"
            titleStyling={{color: Colors.lightBlack}}
            iconFill={Colors.lightBlack}
            onPress={() => navigation.goBack()}
          />
        </View>
        <View style={styles.divider} />
        <View style={styles.content}>
          <View style={styles.btnWrapper}>
            <CustomButton
              title="Report a Problem"
              iconRight="ChevronRight"
              iconWidth={12}
              iconHeight={16}
              titleStyling={styles.btnTitleStyling}
              style={styles.btnStyling}
              onPress={() => alert('Report a Problem')}
            />
          </View>
          <View style={styles.btnWrapper}>
            <CustomButton
              title="Help Center"
              iconRight="ChevronRight"
              iconWidth={12}
              iconHeight={16}
              titleStyling={styles.btnTitleStyling}
              style={styles.btnStyling}
              onPress={() => alert('Help Center')}
            />
          </View>
          <View style={styles.btnWrapper}>
            <CustomButton
              title="Support Requests"
              iconRight="ChevronRight"
              iconWidth={12}
              iconHeight={16}
              titleStyling={styles.btnTitleStyling}
              style={styles.btnStyling}
              onPress={() => alert('Support Requests')}
            />
          </View>
          <View style={styles.btnWrapper}>
            <CustomButton
              title="Privacy and Security Help"
              iconRight="ChevronRight"
              iconWidth={12}
              iconHeight={16}
              titleStyling={styles.btnTitleStyling}
              style={styles.btnStyling}
              onPress={() => alert('Privacy and Security Help')}
            />
          </View>
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
