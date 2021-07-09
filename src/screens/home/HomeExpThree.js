import React, {useEffect} from 'react';
import {useAuthState, useAuthDispatch, logOut} from '../../context/auth';
import {useApiDispatch} from '../../context/api';
import {View, StyleSheet, ImageBackground, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Colors from '../../config/colors';
import CustomButton from '../../components/CustomButton';
import Background from '../../assets/images/home/home-exp-three-background.png';
import PostSnapshot from '../../components/PostSnapshot';
import FoTe from '../../assets/icons/fote.png';
import HeaderActions from '../../components/HeaderActions';
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

const HomeExpThree = ({navigation}) => {
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
            profileIcon={<Image source={FoTe} />}
            profileName="@friendsoftheearth"
            verified={true}
            title="Pembury Children’s Community"
            post="The Pembury Children’s Community is a partnership led by the Co"
            postTag="planet"
          />
          <CustomButton title="get involved" onPress={() => alert('path')} />
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

export default HomeExpThree;
