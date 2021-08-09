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
import CustomButton from '../components/CustomButton';
import CommendActions from '../components/commendActions/CommendActions';

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

const PostSnapshot = ({navigation, profileDataInfo}) => {
  const {getInvolved} = profileDataInfo;
  const [donateReason, setDonateReason] = React.useState(false);

  // SERVERS ---------------------------------------------------------
  const ServeProfileInfo = ({}) => {
    const {profileImageUrl, name, isVerified} = profileDataInfo;

    const navStack = isVerified ? 'ProfileStack' : 'AppStack';
    const navScreen = isVerified ? 'ProProfile' : 'Profile';

    return (
      <TouchableOpacity
        style={styles.rowWrapper}
        onPress={() =>
          navigation.navigate(navStack, {
            screen: navScreen,
            params: {
              profileDataInfo: profileDataInfo,
            },
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
            <CustomButton
              iconLeft="Verified"
              iconFill={Colors.primary}
              iconWidth={20}
              iconHeight={20}
              style={{backgroundColor: Colors.transparent}}
              noFeedback
            />
          </View>
        )}
      </TouchableOpacity>
    );
  };
  const ServePostTitle = ({}) => {
    return <Text style={styles.title}>{profileDataInfo.title}</Text>;
  };
  const ServePost = ({}) => {
    const {post, category} = profileDataInfo;
    const postTagIcon = category === 'planet' ? 'Planet' : 'People';
    const iconColor = category === 'planet' ? Colors.planet : Colors.primary;

    return (
      <View style={styles.rowWrapper}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('ProjectStack', {
              screen: 'Post',
              params: {profileDataInfo: profileDataInfo},
            })
          }>
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

  // RETURN ---------------------------------------------------------
  return (
    <View style={styles.container}>
      <ServeProfileInfo />
      <ServePostTitle />
      <ServePost />

      {getInvolved && (
        <View style={styles.getInvolvedActions}>
          <CustomButton
            title="get involved"
            onPress={() => setDonateReason(true)}
          />
        </View>
      )}
      {donateReason && (
        <CommendActions
          donateReason={donateReason}
          setDonateReason={setDonateReason}
        />
      )}
    </View>
  );
};

export default PostSnapshot;
