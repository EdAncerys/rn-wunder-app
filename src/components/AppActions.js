import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

import Colors from '../config/colors';
import IconActions from './IconActions';
import CommentIcon from '../assets/icons/comment-icon.png';
import Apploud from '../assets/icons/applaud.png';
import ShoutOut from '../assets/icons/shout-out.png';
import Comment from '../assets/icons/comment.png';

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
  icon: {
    width: 24,
    height: 24,
  },
});

const actions = [
  {
    image: <Image source={CommentIcon} style={styles.icon} />,
    count: 346,
    onPress: () => alert('path'),
    id: 1,
  },
  {
    image: <Image source={Apploud} />,
    count: 99,
    onPress: () => alert('path'),
    id: 2,
  },
  {
    image: <Image source={ShoutOut} />,
    count: 99,
    onPress: () => alert('path'),
    id: 3,
  },
  {
    image: <Image source={Comment} />,
    count: 99,
    onPress: () => alert('path'),
    id: 4,
  },
];

const AppActions = props => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        {actions.map(action => {
          return (
            <IconActions
              key={action.id}
              actionImage={action.image}
              actionTitle={action.count}
              onPress={action.onPress}
            />
          );
        })}
      </View>
    </View>
  );
};

export default AppActions;
