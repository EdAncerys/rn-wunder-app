import * as React from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';

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
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightSilver,
  },
});

const Notifications = ({navigation}) => {
  const [pause, setPause] = React.useState(false);
  const [coinsReceived, setCoinsReceived] = React.useState(true);
  const [applauds, setApplauds] = React.useState(true);
  const [comments, setComments] = React.useState(false);
  const [followers, setFollowers] = React.useState(false);

  React.useEffect(() => {
    if (coinsReceived || applauds || comments || followers) setPause(false);
  }, [coinsReceived, applauds, comments, followers]);

  React.useEffect(() => {
    if (pause) {
      setCoinsReceived(false);
      setApplauds(false);
      setComments(false);
      setFollowers(false);
    }
  }, [pause]);

  // RETURN ---------------------------------------------------------
  return (
    <ScreenWrapper filter={Colors.white}>
      <View style={styles.wrapper}>
        <View style={styles.navigateActionContainer}>
          <NavigateAction
            title="Notifications"
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
                title="Pause All"
                titleStyling={styles.btnTitleStyling}
                style={styles.btnStyling}
              />
            </View>
            <View>
              <Switch
                trackColor={{false: Colors.matFilter, true: Colors.primary}}
                thumbColor={Colors.white}
                ios_backgroundColor={Colors.matFilter}
                onValueChange={() => setPause(!pause)}
                value={pause}
              />
            </View>
          </View>
          <View style={styles.btnWrapper}>
            <View style={{flex: 1}}>
              <CustomButton
                noFeedback
                title="Coins Received"
                titleStyling={styles.btnTitleStyling}
                style={styles.btnStyling}
              />
            </View>
            <View>
              <Switch
                trackColor={{false: Colors.matFilter, true: Colors.primary}}
                thumbColor={Colors.white}
                ios_backgroundColor={Colors.matFilter}
                onValueChange={() => setCoinsReceived(!coinsReceived)}
                value={coinsReceived}
              />
            </View>
          </View>
          <View style={styles.btnWrapper}>
            <View style={{flex: 1}}>
              <CustomButton
                noFeedback
                title="Applauds"
                titleStyling={styles.btnTitleStyling}
                style={styles.btnStyling}
              />
            </View>
            <View>
              <Switch
                trackColor={{false: Colors.matFilter, true: Colors.primary}}
                thumbColor={Colors.white}
                ios_backgroundColor={Colors.matFilter}
                onValueChange={() => setApplauds(!applauds)}
                value={applauds}
              />
            </View>
          </View>
          <View style={styles.btnWrapper}>
            <View style={{flex: 1}}>
              <CustomButton
                noFeedback
                title="Comments"
                titleStyling={styles.btnTitleStyling}
                style={styles.btnStyling}
              />
            </View>
            <View>
              <Switch
                trackColor={{false: Colors.matFilter, true: Colors.primary}}
                thumbColor={Colors.white}
                ios_backgroundColor={Colors.matFilter}
                onValueChange={() => setComments(!comments)}
                value={comments}
              />
            </View>
          </View>
          <View style={styles.btnWrapper}>
            <View style={{flex: 1}}>
              <CustomButton
                noFeedback
                title="Followers"
                titleStyling={styles.btnTitleStyling}
                style={styles.btnStyling}
              />
            </View>
            <View>
              <Switch
                trackColor={{false: Colors.matFilter, true: Colors.primary}}
                thumbColor={Colors.white}
                ios_backgroundColor={Colors.matFilter}
                onValueChange={() => setFollowers(!followers)}
                value={followers}
              />
            </View>
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

export default Notifications;
