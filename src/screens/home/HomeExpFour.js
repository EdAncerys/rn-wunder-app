import React from 'react';
import {View, StyleSheet, ImageBackground, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Colors from '../../config/colors';
import Background from '../../assets/images/home/home-exp-four-background.png';
import PostSnapshot from '../../components/PostSnapshot';
import Profile from '../../assets/icons/profile-vic.png';
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
    marginHorizontal: '5%',
  },
  appActions: {
    flex: 2,
    alignItems: 'flex-start',
    marginHorizontal: '5%',
    paddingTop: '5%',
  },
  postContainer: {
    flex: 2,
    marginHorizontal: '5%',
  },
});

const HomeExpFour = ({navigation}) => {
  return (
    <ImageBackground source={Background} style={styles.background}>
      <LinearGradient
        colors={[Colors.gradientFilterTop, Colors.gradientFilterBottom]}
        start={{x: 0.4, y: 0.4}}
        style={styles.container}>
        <View style={styles.headerContainer}></View>

        <View style={styles.appActions}>
          <AppActions />
        </View>

        <View style={styles.postContainer}>
          <PostSnapshot
            profileIcon={<Image source={Profile} />}
            profileName="@vic_azerrenca"
            verified={true}
            title="Peaceful Walk this Morning"
            post="The Pembury Children’s Community is a partnership led by the Co"
            postTag="planet"
          />
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

export default HomeExpFour;
