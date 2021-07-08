import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

import Colors from '../config/colors';
import IconActions from './IconActions';
import HomeBlack from '../assets/icons/home-black.png';
import SearchBlack from '../assets/icons/search-black.png';
import ProjectsBlack from '../assets/icons/projects-black.png';
import Profile from '../assets/icons/profile.png';
import Create from '../assets/icons/create.png';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 26,
    borderRadius: 20,
    backgroundColor: Colors.white,
  },
  icon: {
    width: 24,
    height: 24,
  },
  searchIcon: {
    width: 40,
    height: 40,
  },
});

const AppNavigateActions = props => {
  return (
    <View style={styles.container}>
      <View>
        <IconActions
          actionImage={<Image source={HomeBlack} style={styles.icon} />}
          actionTitle="home"
          actionTitleStyle={{color: Colors.black}}
          onPress={() => alert('path')}
        />
      </View>
      <View>
        <IconActions
          actionImage={<Image source={SearchBlack} style={styles.icon} />}
          actionTitle="search"
          actionTitleStyle={{color: Colors.black}}
          onPress={() => alert('path')}
        />
      </View>
      <View>
        <IconActions
          actionImage={<Image source={Create} style={styles.searchIcon} />}
          onPress={() => alert('path')}
        />
      </View>
      <View>
        <IconActions
          actionImage={<Image source={ProjectsBlack} style={styles.icon} />}
          actionTitle="projects"
          actionTitleStyle={{color: Colors.black}}
          onPress={() => alert('path')}
        />
      </View>
      <View>
        <IconActions
          actionImage={<Image source={Profile} style={styles.icon} />}
          actionTitle="profile"
          actionTitleStyle={{color: Colors.black}}
          onPress={() => alert('path')}
        />
      </View>
    </View>
  );
};

export default AppNavigateActions;
