import * as React from 'react';
import {View, StyleSheet} from 'react-native';

import Colors from '../config/colors';
import IconActions from './IconActions';
import Settings from '../assets/icons/app/settings.png';
import Inbox from '../assets/icons/app/inbox.png';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    minWidth: 40,
    minHeight: 40,
    borderWidth: 2,
    borderRadius: 24,
    borderColor: Colors.white,
    backgroundColor: Colors.blurFilter,
  },
});

const actions = [
  {
    image: Settings,
    count: 'settings',
    onPress: () => alert('settings'),
    id: 1,
  },
  {
    image: Inbox,
    count: 'inbox',
    onPress: () => alert('inbox'),
    id: 2,
    imageStyling: {width: 24, height: 16},
  },
];

const ProfileActions = props => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        {actions.map(action => {
          return (
            <IconActions
              key={action.id}
              image={action.image}
              actionTitle={action.count}
              onPress={action.onPress}
              imageStyling={action.imageStyling}
            />
          );
        })}
      </View>
    </View>
  );
};

export default ProfileActions;
