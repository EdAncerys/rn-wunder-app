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
  headerContainer: {
    position: 'absolute',
    justifyContent: 'center',
    top: '6%',
    marginHorizontal: '5%',
  },
  appActions: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginHorizontal: '5%',
    marginTop: '35%',
  },
  postContainer: {
    flex: 1,
    marginHorizontal: '5%',
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
    : {marginBottom: '35%'};

  // SERVERS ---------------------------------------------------------
  const ServeDonate = ({navigation}) => {
    return (
      <View style={styles.headerContainer}>
        <DonateActions navigation={navigation} />
      </View>
    );
  };

  const ServeAppNavigate = ({navigation}) => {
    return (
      <View style={styles.headerContainer}>
        <AppNavigateActions navigation={navigation} />
      </View>
    );
  };

  // RETURN ---------------------------------------------------------
  return (
    <ScreenWrapper
      image={background}
      gradient={[Colors.gradientFilterTop, Colors.gradientFilterBottom]}>
      <View style={styles.appActions}>
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
      {donateActions && <ServeDonate navigation={navigation} />}
      {navigateActions && <ServeAppNavigate navigation={navigation} />}
    </ScreenWrapper>
  );
};

export default HomeScreen;
