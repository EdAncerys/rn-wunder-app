import * as React from 'react';
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
    marginTop: '30%',
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
    ? {marginBottom: '55%'}
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
    <ImageBackground source={background} style={styles.background}>
      <LinearGradient
        colors={[Colors.gradientFilterTop, Colors.gradientFilterBottom]}
        start={{x: 0.4, y: 0.4}}
        style={styles.container}>
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
      </LinearGradient>
      {donateActions && <ServeDonate navigation={navigation} />}
      {navigateActions && <ServeAppNavigate navigation={navigation} />}
    </ImageBackground>
  );
};

export default HomeScreen;
