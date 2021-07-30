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
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '5%',
  },
  title: {
    ...Fonts.N_400_16,
    color: Colors.lightBlack,
    textAlign: 'justify',
    marginHorizontal: '5%',
  },
  navigateActionContainer: {
    marginTop: '5%',
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
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightSilver,
  },
});

const SelectingReport = ({navigation}) => {
  // RETURN ---------------------------------------------------------
  return (
    <ScreenWrapper filter={Colors.white}>
      <View style={styles.wrapper}>
        <View style={styles.navigateActionContainer}>
          <NavigateAction
            title="Report an Issue"
            titleStyling={{color: Colors.lightBlack}}
            iconFill={Colors.lightBlack}
            onPress={() => navigation.goBack()}
          />
        </View>
        <View style={styles.divider} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            Please help us understand the problem of this comment. Select one of
            the following.
          </Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.navigateActionContainer}>
          <CustomButton
            title="It’s suspicious or spam."
            iconRight="ChevronRight"
            iconWidth={12}
            iconHeight={16}
            titleStyling={styles.btnTitleStyling}
            style={styles.btnStyling}
            onPress={() => alert('It’s suspicious or spam.')}
          />
          <CustomButton
            title="It’s abusive or harmful."
            iconRight="ChevronRight"
            iconWidth={12}
            iconHeight={16}
            titleStyling={styles.btnTitleStyling}
            style={styles.btnStyling}
            onPress={() => alert('It’s abusive or harmful.')}
          />
          <CustomButton
            title="It expresses intentions of self harm."
            iconRight="ChevronRight"
            iconWidth={12}
            iconHeight={16}
            titleStyling={styles.btnTitleStyling}
            style={styles.btnStyling}
            onPress={() => alert('It expresses intentions of self harm.')}
          />
          <CustomButton
            title="It displays a sensitive photo or video."
            iconRight="ChevronRight"
            iconWidth={12}
            iconHeight={16}
            titleStyling={styles.btnTitleStyling}
            style={styles.btnStyling}
            onPress={() => alert('It displays a sensitive photo or video.')}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default SelectingReport;
