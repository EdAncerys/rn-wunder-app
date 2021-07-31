import * as React from 'react';
import {View, Text, StyleSheet, Image, Switch} from 'react-native';

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
  rowWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  logoContainer: {
    flex: 3,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginVertical: '5%',
  },
});

const Settings = ({navigation}) => {
  const [climate, setClimate] = React.useState(false);

  // RETURN ---------------------------------------------------------
  return (
    <ScreenWrapper filter={Colors.white}>
      <View style={styles.wrapper}>
        <View style={styles.navigateActionContainer}>
          <NavigateAction
            title="Privacy and Security"
            titleStyling={{color: Colors.lightBlack}}
            iconFill={Colors.lightBlack}
            onPress={() => navigation.goBack()}
          />
        </View>
        <View style={styles.divider} />
        <View style={styles.content}>
          <View style={styles.btnWrapper}>
            <View style={styles.rowWrapper}>
              <View style={{flex: 1}}>
                <CustomButton
                  noFeedback
                  title="Private Account"
                  titleStyling={styles.btnTitleStyling}
                  style={styles.btnStyling}
                />
              </View>
              <View>
                <Switch
                  trackColor={{false: Colors.matFilter, true: Colors.primary}}
                  thumbColor={Colors.white}
                  ios_backgroundColor={Colors.matFilter}
                  onValueChange={() => setClimate(!climate)}
                  value={climate}
                />
              </View>
            </View>
          </View>
          <View style={styles.btnWrapper}>
            <CustomButton
              title="Interactions"
              iconRight="ChevronRight"
              iconWidth={12}
              iconHeight={16}
              titleStyling={styles.btnTitleStyling}
              style={styles.btnStyling}
              onPress={() => alert('Notifications')}
            />
          </View>
          <View style={styles.btnWrapper}>
            <CustomButton
              title="Mentions"
              iconRight="ChevronRight"
              iconWidth={12}
              iconHeight={16}
              titleStyling={styles.btnTitleStyling}
              style={styles.btnStyling}
              onPress={() => alert('Mentions')}
            />
          </View>
          <View style={styles.btnWrapper}>
            <CustomButton
              title="Restricted Accounts"
              iconRight="ChevronRight"
              iconWidth={12}
              iconHeight={16}
              titleStyling={styles.btnTitleStyling}
              style={styles.btnStyling}
              onPress={() => alert('Restricted Accounts')}
            />
          </View>
          <View style={styles.btnWrapper}>
            <CustomButton
              title="Blocked Accounts"
              iconRight="ChevronRight"
              iconWidth={12}
              iconHeight={16}
              titleStyling={styles.btnTitleStyling}
              style={styles.btnStyling}
              onPress={() => alert('Blocked Accounts')}
            />
          </View>
          <View style={styles.btnWrapper}>
            <CustomButton
              title="Muted Accounts"
              iconRight="ChevronRight"
              iconWidth={12}
              iconHeight={16}
              titleStyling={styles.btnTitleStyling}
              style={styles.btnStyling}
              onPress={() => alert('Muted Accounts')}
            />
          </View>
          <View style={styles.btnWrapper}>
            <CustomButton
              title="Accounts you Follow"
              iconRight="ChevronRight"
              iconWidth={12}
              iconHeight={16}
              titleStyling={styles.btnTitleStyling}
              style={styles.btnStyling}
              onPress={() => alert('Accounts you Follow')}
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
