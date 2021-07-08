import React, {useEffect} from 'react';
import {useAuthState, useAuthDispatch, logOut} from '../../context/auth';
import {useApiDispatch} from '../../context/api';
import {View, StyleSheet, ImageBackground, Image} from 'react-native';

import Colors from '../../config/colors';
import CustomButton from '../../components/CustomButton';
import Background from '../../assets/images/home/home-background.png';
import PostSnapshot from '../../components/PostSnapshot';
import Wunder from '../../assets/icons/wunder.png';
import HeaderActions from '../../components/HeaderActions';
import AppActions from '../../components/AppActions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.screenFilter,
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

const Home = ({navigation}) => {
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
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <HeaderActions />
        </View>

        <View style={styles.appActions}>
          <AppActions />
        </View>

        <View style={styles.postContainer}>
          <PostSnapshot
            profileIcon={<Image source={Wunder} />}
            profileName="@greatormondst"
            verified={true}
            title="Healthy Eating"
            post="It’s recommended that you eat at least 5 portions of a variety"
            postTag="planet"
          />
          <CustomButton title="Logout" onPress={() => handleLogOut()} />
        </View>
      </View>
    </ImageBackground>
  );
};

export default Home;
