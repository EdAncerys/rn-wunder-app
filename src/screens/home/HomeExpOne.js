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
import Background from '../../assets/images/home/home-exp-one-background.png';
import GreatOrmand from '../../assets/icons/great-ormand.png';
import VerifiedBadge from '../../assets/icons/verified-badge.png';
import PeopleBadge from '../../assets/icons/people-badge.png';
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
  footerContainer: {
    flex: 3,
    marginHorizontal: '5%',
  },
  footerActions: {
    justifyContent: 'flex-start',
    paddingTop: '35%',
  },
  rowComponent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
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
    fontSize: 26,
    paddingVertical: 8,
  },
  textStyleThree: {
    color: Colors.planet,
    fontFamily: 'Sailec',
    fontSize: 16,
    paddingVertical: 8,
  },
  planetBadge: {
    flex: 1,
    alignItems: 'center',
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
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <HeaderActions />
        </View>

        <View style={styles.appActions}>
          <AppActions />
        </View>

        <View style={styles.footerContainer}>
          <View style={styles.footerActions}>
            <View style={styles.rowComponent}>
              <Image source={GreatOrmand} />
              <Text style={styles.textStyleOne}>@greatormondst</Text>
              <Image source={VerifiedBadge} />
            </View>
            <View>
              <Text style={styles.textStyleTwo}>The difference we</Text>
              <Text style={styles.textStyleTwo}>make, together</Text>
            </View>

            <View style={styles.rowComponent}>
              <TouchableOpacity>
                <View>
                  <Text style={styles.textStyleThree}>
                    Helps us to transform the lives of
                  </Text>
                  <Text style={styles.textStyleThree}>
                    seriously ill children. Every d... more
                  </Text>
                </View>
              </TouchableOpacity>
              <View style={styles.planetBadge}>
                <CustomButton
                  image={<Image source={PeopleBadge} />}
                  style={{backgroundColor: Colors.transparent}}
                  onPress={() => alert('path')}
                />
              </View>
            </View>
          </View>
        </View>
        <CustomButton title="Logout" onPress={() => handleLogOut()} />
      </View>
    </ImageBackground>
  );
};

export default HomeExpOne;
