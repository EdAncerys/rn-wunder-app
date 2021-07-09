import React from 'react';
import {View, StyleSheet, ImageBackground, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Colors from '../../config/colors';
import CustomButton from '../../components/CustomButton';
import Background from '../../assets/images/home/home-exp-five-background.png';
import PostSnapshot from '../../components/PostSnapshot';
import Profile from '../../assets/icons/profile-tesco.png';
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

const HomeExpFive = ({navigation}) => {
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
            profileName="@tescoofficial"
            verified={true}
            title="Community Food Connection Scheme"
            post="We’re working with FareShare, a leading food redistribution c"
            postTag="planet"
          />
          <CustomButton title="get involved" onPress={() => alert('path')} />
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

export default HomeExpFive;
