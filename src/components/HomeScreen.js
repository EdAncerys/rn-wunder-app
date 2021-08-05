import * as React from 'react';
import {View, StyleSheet} from 'react-native';

import ScreenWrapper from './ScreenWrapper';
import Colors from '../config/colors';

import PostSnapshot from './PostSnapshot';
import AppActions from './AppActions';
import DonateActions from './DonateActions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    marginHorizontal: '5%',
  },
  donateContainer: {
    flex: 0.8,
    justifyContent: 'center',
  },
  appNavigateContainer: {
    flex: 2,
    justifyContent: 'center',
  },
  appActions: {
    flex: 4,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  postContainer: {
    flex: 3,
    justifyContent: 'flex-start',
  },
});

const HomeScreen = ({navigation, dataProfile}) => {
  const {url, getInvolved, donateAction} = dataProfile;

  let applyMarginPost = {marginBottom: '15%'};
  if (donateAction) applyMarginPost = {marginBottom: '5%'};
  if (getInvolved) applyMarginPost = {marginBottom: '40%'};

  const applyMarginActions = donateAction
    ? {marginTop: '0%'}
    : {marginTop: '30%'};

  // SERVERS ---------------------------------------------------------
  const ServeDonate = () => {
    return (
      <View style={styles.donateContainer}>
        <DonateActions navigation={navigation} />
      </View>
    );
  };

  // RETURN ---------------------------------------------------------
  return (
    <ScreenWrapper
      image={url}
      gradient={[Colors.gradientFilterTop, Colors.gradientFilterBottom]}>
      <View style={styles.wrapper}>
        {donateAction && <ServeDonate />}
        <View style={{...styles.appActions, ...applyMarginActions}}>
          <AppActions Commend Applaud Shoutout Comment dataProfile={dataProfile} />
        </View>
        <View style={{...styles.postContainer, ...applyMarginPost}}>
          <PostSnapshot dataProfile={dataProfile} />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default HomeScreen;
