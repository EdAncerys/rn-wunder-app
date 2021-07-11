import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import Colors from '../config/colors';
import CustomButton from '../components/CustomButton';
import VerifiedBadge from '../assets/icons/verified-badge.png';
import PeopleBadge from '../assets/icons/people-badge.png';
import PlanetBadge from '../assets/icons/planet-badge.png';
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
    color: Colors.white,
    fontFamily: 'Sailec',
    fontSize: 16,
    paddingHorizontal: 8,
  },
  title: {
    color: Colors.white,
    fontFamily: 'Sailec-Bold',
    fontSize: 26,
    lineHeight: 34,
    paddingVertical: 5,
    width: width * 0.7,
  },
  post: {
    color: Colors.planet,
    fontFamily: 'Sailec',
    fontSize: 16,
    lineHeight: 24,
    paddingVertical: 5,
    width: width * 0.7,
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
          <Image source={VerifiedBadge} />
        </View>
      )}
    </View>
  );
};
const ServePostTitle = ({props}) => {
  return <Text style={styles.title}>{props.title}</Text>;
};
const ServePost = ({props}) => {
  const postTagIcon = props.postTag === 'planet' ? PlanetBadge : PeopleBadge;

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
          image={<Image source={postTagIcon} />}
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
