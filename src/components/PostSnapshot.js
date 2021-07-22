import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import Colors from '../config/colors';
import Fonts from '../config/fonts';
import {Verified} from '../config/icons';
import CustomButton from '../components/CustomButton';
const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  rowWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  profile: {
    ...Fonts.N_400_16,
    color: Colors.white,
    paddingHorizontal: 8,
  },
  title: {
    ...Fonts.N_700_34,
    color: Colors.white,
    paddingVertical: 5,
    width: width * 0.7,
  },
  post: {
    ...Fonts.N_400_16,
    color: Colors.planet,
    width: width * 0.7,
  },
  postTagIcon: {
    width: 40,
    height: 40,
  },
  postAction: {
    opacity: 0.8,
  },
  badge: {
    flex: 1,
  },
});

// SERVERS ---------------------------------------------------------
const ServeProfileInfo = ({props}) => {
  return (
    <View style={styles.rowWrapper}>
      <View>
        <Image source={props.profileIcon} />
      </View>
      <Text style={styles.profile}>{props.profileName}</Text>
      {props.verified && (
        <View>
          <Verified />
        </View>
      )}
    </View>
  );
};
const ServePostTitle = ({props}) => {
  return <Text style={styles.title}>{props.title}</Text>;
};
const ServePost = ({props}) => {
  const postTagIcon = props.postTag === 'planet' ? 'Planet' : 'People';

  return (
    <View style={styles.rowWrapper}>
      <TouchableOpacity onPress={props.onPress}>
        <View>
          <Text style={styles.post}>
            {props.post}
            <Text style={styles.postAction}>... more</Text>
          </Text>
        </View>
      </TouchableOpacity>
      <View style={styles.badge}>
        <CustomButton
          iconLeft={postTagIcon}
          iconStyling={styles.postTagIcon}
          style={{backgroundColor: Colors.transparent}}
          onPress={() => alert('path')}
        />
      </View>
    </View>
  );
};

// RETURN ---------------------------------------------------------
const PostPreview = props => {
  return (
    <View style={styles.container}>
      {<ServeProfileInfo props={props} />}
      {props.title && <ServePostTitle props={props} />}
      {props.post && <ServePost props={props} />}
    </View>
  );
};

export default PostPreview;
