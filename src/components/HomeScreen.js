import React from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Colors from '../config/colors';
import CustomButton from './CustomButton';
import PostSnapshot from './PostSnapshot';
import AppActions from './AppActions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  appActions: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    marginHorizontal: '5%',
    marginBottom: '2%',
  },
  postContainer: {
    flex: 1,
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
}) => {
  return (
    <ImageBackground source={background} style={styles.background}>
      <LinearGradient
        colors={[Colors.gradientFilterTop, Colors.gradientFilterBottom]}
        start={{x: 0.4, y: 0.4}}
        style={styles.container}>
        <View style={styles.appActions}>
          <AppActions />
        </View>

        <View style={styles.postContainer}>
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
