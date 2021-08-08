import * as React from 'react';
import {Text, View, StyleSheet, Share} from 'react-native';

import Colors from '../config/colors';
import Fonts from '../config/fonts';
import CustomButton from '../components/CustomButton';
import ReportAction from '../components/ReportAction';
import BlockUser from '../components/BlockUser';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    minWidth: 40,
    minHeight: 40,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 24,
    backgroundColor: Colors.secondary,
  },
  iconContainer: {
    marginVertical: 5,
  },
  title: {
    ...Fonts.N_400_9,
    textAlign: 'center',
    color: Colors.white,
  },
});

// HANDLERS ---------------------------------------------------------
const handleShoutout = async profileDataInfo => {
  const {title, url} = profileDataInfo;

  const shareOptions = {
    message: title,
    url: url,
  };

  try {
    const result = await Share.share(shareOptions);
    console.log(result.activityType);
    console.log(result.action);
    if (result.action === Share.sharedAction) {
      console.log(Share.sharedAction);
    } else if (result.action === Share.dismissedAction) {
      console.log(Share.dismissedAction);
    }
  } catch (error) {
    alert(error.message);
  }
};

// SERVERS ---------------------------------------------------------
const ServeReportAction = ({
  navigation,
  setReportAction,
  setBlockAction,
  profileDataInfo,
}) => {
  return (
    <ReportAction
      navigation={navigation}
      setReportAction={setReportAction}
      setBlockAction={setBlockAction}
      profileDataInfo={profileDataInfo}
    />
  );
};

const ServeBlockUser = ({setBlockAction, profileDataInfo}) => {
  return (
    <BlockUser
      setBlockAction={setBlockAction}
      profileDataInfo={profileDataInfo}
    />
  );
};

// RETURN ---------------------------------------------------------
const AppActions = ({
  navigation,
  Settings,
  Commend,
  Applaud,
  Shoutout,
  Comment,
  profileDataInfo,
  More,
}) => {
  const [reportAction, setReportAction] = React.useState(false);
  const [blockAction, setBlockAction] = React.useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        {Settings && (
          <View style={styles.iconContainer}>
            <CustomButton
              iconLeft="Settings"
              iconWidth={24}
              iconHeight={24}
              iconFill={Colors.white}
              onPress={() =>
                navigation.navigate('ProfileStack', {
                  screen: 'Settings',
                  params: {profileDataInfo: profileDataInfo},
                })
              }
              style={{backgroundColor: Colors.transparent}}
            />
          </View>
        )}
        {Commend && (
          <View style={styles.iconContainer}>
            <CustomButton
              iconLeft="Commend"
              iconWidth={24}
              iconHeight={24}
              iconFill={Colors.white}
              onPress={() =>
                navigation.navigate('ProjectStack', {
                  screen: 'Commend',
                  params: {profileDataInfo: profileDataInfo},
                })
              }
              style={{backgroundColor: Colors.transparent}}
            />
            <Text style={styles.title}>1346</Text>
          </View>
        )}
        {Applaud && (
          <View style={styles.iconContainer}>
            <CustomButton
              iconLeft="Applaud"
              iconWidth={24}
              iconHeight={24}
              iconFill={Colors.white}
              onPress={() => alert('Applaud')}
              style={{backgroundColor: Colors.transparent}}
            />
            <Text style={styles.title}>346</Text>
          </View>
        )}
        {Shoutout && (
          <View style={styles.iconContainer}>
            <CustomButton
              iconLeft="Shoutout"
              iconWidth={24}
              iconHeight={20}
              iconFill={Colors.white}
              style={{backgroundColor: Colors.transparent}}
              onPress={() => handleShoutout(profileDataInfo)}
            />
            <Text style={styles.title}>346</Text>
          </View>
        )}
        {Comment && (
          <View style={styles.iconContainer}>
            <CustomButton
              iconLeft="Comment"
              iconWidth={24}
              iconHeight={20}
              iconFill={Colors.white}
              onPress={() =>
                navigation.navigate('HomeStack', {
                  screen: 'Commenting',
                  params: {profileDataInfo: profileDataInfo},
                })
              }
              style={{backgroundColor: Colors.transparent}}
            />
            <Text style={styles.title}>346</Text>
          </View>
        )}
        {More && (
          <View style={styles.iconContainer}>
            <CustomButton
              iconLeft="ThreeDots"
              iconWidth={19}
              iconHeight={5}
              iconFill={Colors.white}
              style={{backgroundColor: Colors.transparent}}
              onPress={() => setReportAction(true)}
            />
          </View>
        )}

        {reportAction && (
          <ServeReportAction
            navigation={navigation}
            setReportAction={setReportAction}
            setBlockAction={setBlockAction}
            profileDataInfo={profileDataInfo}
          />
        )}
        {blockAction && (
          <ServeBlockUser
            setBlockAction={setBlockAction}
            profileDataInfo={profileDataInfo}
          />
        )}
      </View>
    </View>
  );
};

export default AppActions;
