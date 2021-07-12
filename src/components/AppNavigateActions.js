import * as React from 'react';
import {View, StyleSheet} from 'react-native';

import Colors from '../config/colors';
import IconActions from './IconActions';
import HomeBlack from '../assets/icons/app/home-black.png';
import SearchBlack from '../assets/icons/app/search-black.png';
import ProjectsBlack from '../assets/icons/app/projects-black.png';
import Profile from '../assets/icons/content/profile-general.png';
import Create from '../assets/icons/app/create.png';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 4,
    borderRadius: 20,
    backgroundColor: Colors.white,
    marginTop: '10%',
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
          image={HomeBlack}
          actionTitle="home"
          actionTitleStyle={{color: Colors.black}}
          onPress={() => alert('path')}
        />
      </View>
      <View>
        <IconActions
          image={SearchBlack}
          actionTitle="search"
          actionTitleStyle={{color: Colors.black}}
          onPress={() => alert('path')}
        />
      </View>
      <View>
        <IconActions
          image={Create}
          imageStyling={styles.searchIcon}
          onPress={() => alert('path')}
        />
      </View>
      <View>
        <IconActions
          image={ProjectsBlack}
          actionTitle="projects"
          actionTitleStyle={{color: Colors.black}}
          onPress={() => alert('path')}
        />
      </View>
      <View>
        <IconActions
          image={Profile}
          actionTitle="profile"
          actionTitleStyle={{color: Colors.black}}
          onPress={() => alert('path')}
        />
      </View>
    </View>
  );
};

export default AppNavigateActions;
