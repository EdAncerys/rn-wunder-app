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
  title: {
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
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightSilver,
  },
  msgContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: '5%',
  },
  msg: {
    ...Fonts.N_400_12,
    textAlign: 'center',
    color: Colors.silver,
    width: 150,
  },
});

const SelectInterests = ({navigation}) => {
  const [zeroHunger, setZeroHunger] = React.useState(false);
  const [health, setHealth] = React.useState(true);
  const [education, setEducation] = React.useState(false);
  const [genderEquality, setGenderEquality] = React.useState(false);
  const [cleanWater, setCleanWater] = React.useState(false);
  const [climate, setClimate] = React.useState(true);
  const [lifeOnLand, setLifeOnLand] = React.useState(true);
  const [lgbtq, setLgbtq] = React.useState(false);

  // RETURN ---------------------------------------------------------
  return (
    <ScreenWrapper filter={Colors.white}>
      <View style={styles.wrapper}>
        <View style={styles.navigateActionContainer}>
          <NavigateAction
            title="Select Interests"
            titleStyling={{color: Colors.lightBlack}}
            iconFill={Colors.lightBlack}
            onPress={() => navigation.goBack()}
          />
        </View>
        <View style={styles.divider} />
        <View style={styles.content}>
          <View style={styles.btnWrapper}>
            <View style={{flex: 1}}>
              <CustomButton
                noFeedback
                iconLeft="ZeroHunger"
                iconLeftWidth={20}
                iconLeftHeight={20}
                title="Zero Hunger"
                titleStyling={styles.btnTitleStyling}
                style={styles.btnStyling}
              />
            </View>
            <View>
              <Switch
                trackColor={{false: Colors.matFilter, true: Colors.primary}}
                thumbColor={Colors.white}
                ios_backgroundColor={Colors.matFilter}
                onValueChange={() => setZeroHunger(!zeroHunger)}
                value={zeroHunger}
              />
            </View>
          </View>
          <View style={styles.btnWrapper}>
            <View style={{flex: 1}}>
              <CustomButton
                noFeedback
                iconLeft="Health"
                iconLeftWidth={20}
                iconLeftHeight={20}
                title="Good Health & Wellbeing"
                titleStyling={styles.btnTitleStyling}
                style={styles.btnStyling}
              />
            </View>
            <View>
              <Switch
                trackColor={{false: Colors.matFilter, true: Colors.primary}}
                thumbColor={Colors.white}
                ios_backgroundColor={Colors.matFilter}
                onValueChange={() => setHealth(!health)}
                value={health}
              />
            </View>
          </View>
          <View style={styles.btnWrapper}>
            <View style={{flex: 1}}>
              <CustomButton
                noFeedback
                iconLeft="Education"
                iconLeftWidth={20}
                iconLeftHeight={20}
                title="Quality Education"
                titleStyling={styles.btnTitleStyling}
                style={styles.btnStyling}
              />
            </View>
            <View>
              <Switch
                trackColor={{false: Colors.matFilter, true: Colors.primary}}
                thumbColor={Colors.white}
                ios_backgroundColor={Colors.matFilter}
                onValueChange={() => setEducation(!education)}
                value={education}
              />
            </View>
          </View>
          <View style={styles.btnWrapper}>
            <View style={{flex: 1}}>
              <CustomButton
                noFeedback
                iconLeft="GenderEquality"
                iconLeftWidth={20}
                iconLeftHeight={20}
                title="Gender Equality"
                titleStyling={styles.btnTitleStyling}
                style={styles.btnStyling}
              />
            </View>
            <View>
              <Switch
                trackColor={{false: Colors.matFilter, true: Colors.primary}}
                thumbColor={Colors.white}
                ios_backgroundColor={Colors.matFilter}
                onValueChange={() => setGenderEquality(!genderEquality)}
                value={genderEquality}
              />
            </View>
          </View>
          <View style={styles.btnWrapper}>
            <View style={{flex: 1}}>
              <CustomButton
                noFeedback
                iconLeft="CleanWater"
                iconLeftWidth={20}
                iconLeftHeight={20}
                title="Clean Water & Sanitation"
                titleStyling={styles.btnTitleStyling}
                style={styles.btnStyling}
              />
            </View>
            <View>
              <Switch
                trackColor={{false: Colors.matFilter, true: Colors.primary}}
                thumbColor={Colors.white}
                ios_backgroundColor={Colors.matFilter}
                onValueChange={() => setCleanWater(!cleanWater)}
                value={cleanWater}
              />
            </View>
          </View>
          <View style={styles.btnWrapper}>
            <View style={{flex: 1}}>
              <CustomButton
                noFeedback
                iconLeft="Climate"
                iconLeftWidth={20}
                iconLeftHeight={20}
                title="Climate Action"
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
          <View style={styles.btnWrapper}>
            <View style={{flex: 1}}>
              <CustomButton
                noFeedback
                iconLeft="LifeOnLand"
                iconLeftWidth={20}
                iconLeftHeight={20}
                title="Life on Land"
                titleStyling={styles.btnTitleStyling}
                style={styles.btnStyling}
              />
            </View>
            <View>
              <Switch
                trackColor={{false: Colors.matFilter, true: Colors.primary}}
                thumbColor={Colors.white}
                ios_backgroundColor={Colors.matFilter}
                onValueChange={() => setLifeOnLand(!lifeOnLand)}
                value={lifeOnLand}
              />
            </View>
          </View>
          <View style={styles.btnWrapper}>
            <View style={{flex: 1}}>
              <CustomButton
                noFeedback
                iconLeft="Rainbow"
                iconLeftWidth={20}
                iconLeftHeight={20}
                title="LGBTQ+"
                titleStyling={styles.btnTitleStyling}
                style={styles.btnStyling}
              />
            </View>
            <View>
              <Switch
                trackColor={{false: Colors.matFilter, true: Colors.primary}}
                thumbColor={Colors.white}
                ios_backgroundColor={Colors.matFilter}
                onValueChange={() => setLgbtq(!lgbtq)}
                value={lgbtq}
              />
            </View>
          </View>
        </View>
        <View style={styles.msgContainer}>
          <Text style={styles.msg}>
            (You may only select a maximum of 3 interests).
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <Text style={styles.title}>
            © Copyright 2021 • All Rights Reserved
          </Text>
          <Text style={styles.title}>Terms & Conditions Privacy Policy</Text>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default SelectInterests;
