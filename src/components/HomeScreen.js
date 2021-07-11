import React from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

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
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  headerContainer: {
    flex: 1.5,
    justifyContent: 'center',
    marginHorizontal: '5%',
  },
  appActions: {
    flex: 3,
    alignItems: 'flex-start',
    marginHorizontal: '5%',
    marginTop: '5%',
  },
  postContainer: {
    flex: 3,
    marginHorizontal: '5%',
  },
});

const HomeScreen = ({
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
    ? {marginBottom: '55%'}
    : {marginBottom: '5%'};
  const applyMarginActions =
    donateActions || navigateActions ? {marginTop: '5%'} : {marginTop: '50%'};

  // SERVERS ---------------------------------------------------------
  const ServeDonate = props => {
    return (
      <View style={styles.headerContainer}>
        <DonateActions />
      </View>
    );
  };

  const ServeAppNavigate = props => {
    return (
      <View style={styles.headerContainer}>
        <AppNavigateActions />
      </View>
    );
  };

  // RETURN ---------------------------------------------------------
  return (
    <ImageBackground source={background} style={styles.background}>
      <LinearGradient
        colors={[Colors.gradientFilterTop, Colors.gradientFilterBottom]}
        start={{x: 0.4, y: 0.4}}
        style={styles.container}>
        {donateActions && <ServeDonate />}
        {navigateActions && <ServeAppNavigate />}
        <View style={{...styles.appActions, ...applyMarginActions}}>
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
      </LinearGradient>
    </ImageBackground>
  );
};

export default HomeScreen;
