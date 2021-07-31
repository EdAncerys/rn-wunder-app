import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import ScreenWrapper from '../../components/ScreenWrapper';
import Colors from '../../config/colors';
import Fonts from '../../config/fonts';
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
});

const Settings = ({navigation}) => {
  // RETURN ---------------------------------------------------------
  return (
    <ScreenWrapper filter={Colors.white}>
      <View style={styles.wrapper}>
        <View style={styles.navigateActionContainer}>
          <NavigateAction
            title="Manage Payments"
            titleStyling={{color: Colors.lightBlack}}
            iconFill={Colors.lightBlack}
            onPress={() => navigation.goBack()}
          />
        </View>
        <View style={styles.divider} />
        <View style={styles.content}></View>

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
