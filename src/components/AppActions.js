import * as React from 'react';
import {View, StyleSheet} from 'react-native';

import Colors from '../config/colors';
import IconActions from './IconActions';
import CommentIcon from '../assets/icons/app/comment-icon.png';
import Apploud from '../assets/icons/app/applaud.png';
import ShoutOut from '../assets/icons/app/shout-out.png';
import Comment from '../assets/icons/app/comment.png';

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
    image: CommentIcon,
    count: 346,
    onPress: () => alert('path'),
    id: 1,
  },
  {
    image: Apploud,
    count: 99,
    onPress: () => alert('path'),
    id: 2,
  },
  {
    image: ShoutOut,
    count: 99,
    onPress: () => alert('path'),
    id: 3,
  },
  {
    image: Comment,
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
              image={action.image}
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
