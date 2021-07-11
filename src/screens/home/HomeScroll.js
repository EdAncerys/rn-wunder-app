import React from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

import Colors from '../../config/colors';
import HomeExpOne from './HomeExpOne';
import HomeExpTwo from './HomeExpTwo';
import HomeExpThree from './HomeExpThree';
import HomeExpFour from './HomeExpFour';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: Colors.screenFilter,
  },
  home: {
    height: height,
    marginBottom: height * 2.45,
  },
  screen: {
    position: 'absolute',
    width: width,
    height: height,
    overflow: 'hidden',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});

const Home = ({navigation}) => {
  // RETURN ---------------------------------------------------------
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.home}>
          <HomeExpOne navigation={navigation} />
        </View>
        <View style={{...styles.screen, marginTop: height * 0.8}}>
          <HomeExpTwo navigation={navigation} />
        </View>
        <View style={{...styles.screen, marginTop: height * 1.65}}>
          <HomeExpThree navigation={navigation} />
        </View>
        <View style={{...styles.screen, marginTop: height * 2.55}}>
          <HomeExpFour navigation={navigation} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
