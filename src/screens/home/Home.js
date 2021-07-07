import React, {useEffect} from 'react';
import {useAuthState, useAuthDispatch, logOut} from '../../context/auth';
import {useApiDispatch} from '../../context/api';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';

import Colors from '../../config/colors';
import CustomButton from '../../components/CustomButton';
import Background from '../../assets/images/home/home-background.png';
import Wunder from '../../assets/icons/wunder.png';
import VerifiedBadge from '../../assets/icons/verified-badge.png';
import PlanetBadge from '../../assets/icons/planet-badge.png';
import HeaderActions from '../../components/HeaderActions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '5%',
  },
  actionsContainer: {
    flex: 2,
    justifyContent: 'center',
  },
  footerContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerActions: {
    width: '90%',
    justifyContent: 'flex-start',
  },
  rowComponent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textStyleOne: {
    color: Colors.white,
    fontFamily: 'Sailec',
    fontSize: 16,
    paddingHorizontal: 10,
  },
  textStyleTwo: {
    color: Colors.white,
    fontFamily: 'Sailec',
    fontSize: 24,
    paddingVertical: 10,
  },
  textStyleThree: {
    color: Colors.planet,
    fontFamily: 'Sailec',
    fontSize: 16,
  },
  planetBadge: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
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
    <View style={styles.container}>
      <ImageBackground source={Background} style={styles.imgBackground}>
        <View style={styles.headerContainer}>
          <HeaderActions />
        </View>
        <View style={styles.actionsContainer}>
          <Text style={styles.textStyleOne}>Side Actions</Text>
        </View>
        <View style={styles.footerContainer}>
          <View style={styles.footerActions}>
            <View style={styles.rowComponent}>
              <Image source={Wunder} />
              <Text style={styles.textStyleOne}>@wünder</Text>
              <Image source={VerifiedBadge} />
            </View>
            <View>
              <Text style={styles.textStyleTwo}>Healthy Eating</Text>
            </View>
            <View style={styles.rowComponent}>
              <TouchableOpacity>
                <View>
                  <Text style={styles.textStyleThree}>
                    It’s recommended that you eat at
                  </Text>
                  <Text style={styles.textStyleThree}>
                    least 5 portions of a variety… more
                  </Text>
                </View>
              </TouchableOpacity>
              <View style={styles.planetBadge}>
                <TouchableOpacity>
                  <Image source={PlanetBadge} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <CustomButton title="Logout" onPress={() => handleLogOut()} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Home;
