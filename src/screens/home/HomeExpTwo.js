import React from 'react';
import {View, StyleSheet, ImageBackground, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Colors from '../../config/colors';
import Background from '../../assets/images/home/home-exp-two-background.png';
import PostSnapshot from '../../components/PostSnapshot';
import Profile from '../../assets/icons/profile-ormand.png';
import AppNavigateActions from '../../components/AppNavigateActions';
import AppActions from '../../components/AppActions';

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
    flex: 1,
    justifyContent: 'center',
    paddingTop: '10%',
    marginHorizontal: '5%',
  },
  appActions: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginHorizontal: '5%',
  },
  postContainer: {
    flex: 3,
    marginTop: '25%',
    marginHorizontal: '5%',
  },
});

const HomeExpTwo = () => {
  return (
    <ImageBackground source={Background} style={styles.background}>
      <LinearGradient
        colors={[Colors.gradientFilterTop, Colors.gradientFilterBottom]}
        start={{x: 0.4, y: 0.4}}
        style={styles.container}>
        <View style={styles.headerContainer}>
          <AppNavigateActions />
        </View>

        <View style={styles.appActions}>
          <AppActions />
        </View>

        <View style={styles.postContainer}>
          <PostSnapshot
            profileIcon={<Image source={Profile} />}
            profileName="@greatormondst"
            verified={true}
            title="The difference we make, together"
            post="Helps us to transform the lives of seriously ill children. Every d"
          />
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

export default HomeExpTwo;
