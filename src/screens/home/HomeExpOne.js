import React, {useEffect} from 'react';
import {useAuthState, useAuthDispatch, logOut} from '../../context/auth';
import {useApiDispatch} from '../../context/api';
import {View, StyleSheet, ImageBackground, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Colors from '../../config/colors';
import CustomButton from '../../components/CustomButton';
import Background from '../../assets/images/home/home-exp-one-background.png';
import PostSnapshot from '../../components/PostSnapshot';
import Profile from '../../assets/icons/wunder.png';
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

const HomeExpOne = ({navigation}) => {
  const dispatchAuth = useAuthDispatch();
  const dispatchApi = useApiDispatch();
  const {jwt, user} = useAuthState();

  // HANDLERS ---------------------------------------------------------
  const handleLogOut = () => {
    logOut({dispatchAuth, dispatchApi});
  };

  useEffect(() => {
    if (!jwt) navigation.navigate('Login');
  }, [user]);

  return (
    <ImageBackground source={Background} style={styles.background}>
      <LinearGradient
        colors={[Colors.gradientFilterTop, Colors.gradientFilterBottom]}
        start={{x: 0.4, y: 0.4}}
        style={styles.container}>
        <View style={styles.headerContainer}>
          <HeaderActions />
        </View>

        <View style={styles.appActions}>
          <AppActions />
        </View>

        <View style={styles.postContainer}>
          <PostSnapshot
            profileIcon={<Image source={Profile} />}
            profileName="@greatormondst"
            verified={true}
            title="Healthy Eating"
            post="It’s recommended that you eat at least 5 portions of a variety"
            postTag="planet"
          />
          <CustomButton title="Logout" onPress={() => handleLogOut()} />
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

export default HomeExpOne;
