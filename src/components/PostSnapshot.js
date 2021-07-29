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
    marginVertical: 8,
  },
  profile: {
    ...Fonts.N_400_16,
    color: Colors.white,
    paddingHorizontal: 8,
  },
  title: {
    ...Fonts.N_700_34,
    color: Colors.white,
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  verified: {
    justifyContent: 'center',
    alignItems: 'center',
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
        <View style={styles.verified}>
          <View>
            <Verified width={20} height={20} fill={Colors.primary} />
          </View>
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
  const iconColor = props.postTag === 'planet' ? Colors.planet : Colors.primary;

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
        <View
          style={{
            backgroundColor: iconColor,
            padding: 8.75,
            borderRadius: 100,
          }}>
          <CustomButton
            iconLeft={postTagIcon}
            iconFill={Colors.white}
            iconWidth={25}
            iconHeight={25}
            iconStyling={styles.postTagIcon}
            style={{
              backgroundColor: Colors.transparent,
            }}
            onPress={() => alert(postTagIcon)}
          />
        </View>
      </View>
    </View>
  );
};

// RETURN ---------------------------------------------------------
const PostPreview = props => {
  return (
    <View style={styles.container}>
      <ServeProfileInfo props={props} />
      {props.title && <ServePostTitle props={props} />}
      {props.post && <ServePost props={props} />}
    </View>
  );
};

export default PostPreview;
