import * as React from 'react';
import {View, StyleSheet} from 'react-native';

import ScreenWrapper from './ScreenWrapper';
import Colors from '../config/colors';
import CustomButton from './CustomButton';
import PostSnapshot from './PostSnapshot';
import AppActions from './AppActions';
import DonateActions from './DonateActions';
import AppNavigateActions from './AppNavigateActions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    marginHorizontal: '5%',
  },
  donateContainer: {
    flex: 1,
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

const HomeScreen = ({
  navigation,
  background,
  profileIcon,
  profileName,
  verified,
  title,
  post,
  postTag,
  getInvolved,
  donateActions,
  navigateActions,
}) => {
  const applyMarginPost = getInvolved
    ? {marginBottom: '50%'}
    : {marginBottom: '25%'};
  const applyMarginAppActions =
    donateActions || navigateActions ? {marginTop: '0%'} : {marginTop: '40%'};

  // SERVERS ---------------------------------------------------------
  const ServeDonate = ({navigation}) => {
    return (
      <View style={styles.donateContainer}>
        <DonateActions navigation={navigation} />
      </View>
    );
  };

  const ServeAppNavigate = ({navigation}) => {
    return (
      <View style={styles.appNavigateContainer}>
        <AppNavigateActions navigation={navigation} />
      </View>
    );
  };

  // RETURN ---------------------------------------------------------
  return (
    <ScreenWrapper
      image={background}
      gradient={[Colors.gradientFilterTop, Colors.gradientFilterBottom]}>
      <View style={styles.wrapper}>
        {donateActions && <ServeDonate navigation={navigation} />}
        {navigateActions && <ServeAppNavigate navigation={navigation} />}
        <View style={{...styles.appActions, ...applyMarginAppActions}}>
          <AppActions />
        </View>
        <View style={{...styles.postContainer, ...applyMarginPost}}>
          <PostSnapshot
            profileIcon={profileIcon}
            profileName={profileName}
            verified={verified}
            title={title}
            post={post}
            postTag={postTag}
          />
          {getInvolved && (
            <CustomButton title="get involved" onPress={() => alert('path')} />
          )}
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default HomeScreen;
