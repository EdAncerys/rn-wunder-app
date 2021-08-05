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
  getInvolvedActions: {
    marginVertical: 5,
  },
});

// SERVERS ---------------------------------------------------------
const ServeProfileInfo = ({navigation, profileDataInfo}) => {
  const {profileImageUrl, name, isVerified} = profileDataInfo;
  return (
    <TouchableOpacity
      style={styles.rowWrapper}
      onPress={() =>
        navigation.navigate('AppStack', {
          screen: 'Profile',
          params: {profileDataInfo: profileDataInfo},
        })
      }>
      <View>
        <Image
          style={{
            width: 32,
            height: 32,
            borderRadius: 16,
            overflow: 'hidden',
          }}
          source={{uri: profileImageUrl}}
        />
      </View>
      <Text style={styles.profile}>@{name}</Text>
      {isVerified && (
        <View style={styles.verified}>
          <View>
            <Verified width={20} height={20} fill={Colors.primary} />
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
};
const ServePostTitle = ({profileDataInfo}) => {
  return <Text style={styles.title}>{profileDataInfo.title}</Text>;
};
const ServePost = ({profileDataInfo}) => {
  const {post, category} = profileDataInfo;
  const postTagIcon = category === 'planet' ? 'Planet' : 'People';
  const iconColor = category === 'planet' ? Colors.planet : Colors.primary;

  return (
    <View style={styles.rowWrapper}>
      <TouchableOpacity onPress={() => alert('post')}>
        <View>
          <Text style={styles.post}>
            {post}
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

const PostPreview = ({navigation, profileDataInfo}) => {
  const {getInvolved} = profileDataInfo;

  return (
    <View style={styles.container}>
      <ServeProfileInfo
        navigation={navigation}
        profileDataInfo={profileDataInfo}
      />
      <ServePostTitle profileDataInfo={profileDataInfo} />
      <ServePost profileDataInfo={profileDataInfo} />
      {getInvolved && (
        <View style={styles.getInvolvedActions}>
          <CustomButton
            title="get involved"
            onPress={() => alert('get involved')}
          />
        </View>
      )}
    </View>
  );
};

export default PostPreview;
