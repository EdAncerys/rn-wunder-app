import * as React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

import Colors from '../config/colors';
import IconActions from './IconActions';
import Profile from '../assets/dummyAssets/profile-general.png';
const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 4,
    borderRadius: 20,
    backgroundColor: Colors.white,
    width: width - width / 10,
  },
  searchIcon: {
    width: 40,
    height: 40,
  },
});

const AppNavigateActions = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
        <IconActions
          icon="Home"
          actionTitle="home"
          actionTitleStyle={{color: Colors.black}}
          onPress={() => navigation.navigate('Home')}
        />
      </View>
      <View>
        <IconActions
          icon="Search"
          actionTitle="search"
          actionTitleStyle={{color: Colors.black}}
          onPress={() => alert('search')}
        />
      </View>
      <View>
        <IconActions
          icon="Create"
          iconStyling={styles.searchIcon}
          onPress={() => alert('expand')}
        />
      </View>
      <View>
        <IconActions
          icon="Projects"
          actionTitle="projects"
          actionTitleStyle={{color: Colors.black}}
          onPress={() => alert('projects')}
        />
      </View>
      <View>
        <IconActions
          icon="Profile"
          actionTitle="profile"
          actionTitleStyle={{color: Colors.black}}
          onPress={() => navigation.navigate('Profile')}
        />
      </View>
    </View>
  );
};

export default AppNavigateActions;
