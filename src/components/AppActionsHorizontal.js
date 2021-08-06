import * as React from 'react';
import {Text, View, StyleSheet, Share, Dimensions} from 'react-native';

import Colors from '../config/colors';
import Fonts from '../config/fonts';
import CustomButton from './CustomButton';
import ReportAction from './ReportAction';
import BlockUser from './BlockUser';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  title: {
    ...Fonts.N_400_9,
    textAlign: 'center',
    color: Colors.lightBlack,
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
const AppActionsHorizontal = ({navigation, profileDataInfo}) => {
  const [reportAction, setReportAction] = React.useState(false);
  const [blockAction, setBlockAction] = React.useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.iconContainer}>
          <CustomButton
            iconLeft="Commend"
            iconWidth={28}
            iconHeight={28}
            iconFill={Colors.lightBlack}
            onPress={() => alert('Commend')}
            style={{backgroundColor: Colors.transparent}}
          />
          <Text style={styles.title}>1346</Text>
        </View>
        <View style={styles.iconContainer}>
          <CustomButton
            iconLeft="Applaud"
            iconWidth={28}
            iconHeight={28}
            iconFill={Colors.lightBlack}
            onPress={() => alert('Applaud')}
            style={{backgroundColor: Colors.transparent}}
          />
          <Text style={styles.title}>346</Text>
        </View>
        <View style={styles.iconContainer}>
          <CustomButton
            iconLeft="Shoutout"
            iconWidth={28}
            iconHeight={24}
            iconFill={Colors.lightBlack}
            style={{backgroundColor: Colors.transparent}}
            onPress={() => handleShoutout(profileDataInfo)}
          />
          <Text style={styles.title}>346</Text>
        </View>
        <View style={styles.iconContainer}>
          <CustomButton
            iconLeft="Comment"
            iconWidth={28}
            iconHeight={24}
            iconFill={Colors.lightBlack}
            onPress={() => alert('Comment')}
            style={{backgroundColor: Colors.transparent}}
          />
          <Text style={styles.title}>346</Text>
        </View>

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

export default AppActionsHorizontal;
