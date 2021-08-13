import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import ScreenWrapper from '../../components/ScreenWrapper';
import Colors from '../../config/colors';
import Fonts from '../../config/fonts';
import CustomButton from '../../components/CustomButton';
import AppActions from '../../components/AppActions';
import ProfileHeaderActions from '../../components/PostHeaderActions';
import CommendActions from '../../components/commendActions/CommendActions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    marginHorizontal: '5%',
  },
  donateContainer: {
    justifyContent: 'center',
  },
  appActions: {
    flex: 3,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  postContainer: {
    flex: 2,
    marginVertical: '5%',
  },
  getInvolvedActions: {
    marginVertical: 5,
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
    overflow: 'hidden',
  },
  isVerified: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  postWrapper: {
    flex: 3,
  },
  postTitle: {
    ...Fonts.N_400_16,
    color: Colors.planet,
  },
  badgeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
});

const Post = ({navigation, route}) => {
  const [donateReason, setDonateReason] = React.useState(false);
  const {profileDataInfo} = route.params;
  const {title, body, canVolunteer, people, planet, picture, user} =
    profileDataInfo;
  const isVerified = user.confirmed;
  const profileImage = user.picture[0].url;
  const username = user.username;

  const navStack = isVerified ? 'ProfileStack' : 'AppStack';
  const navScreen = isVerified ? 'ProProfile' : 'Profile';

  // SERVERS ---------------------------------------------------------
  const ServePostHeaderActions = () => {
    return (
      <View style={styles.donateContainer}>
        <ProfileHeaderActions
          navigation={navigation}
          profileDataInfo={profileDataInfo}
        />
      </View>
    );
  };
  const ServeProfileInfo = ({}) => {
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
            source={{uri: profileImage}}
          />
        </View>
        <Text style={styles.profile}>{username}</Text>
        {isVerified && (
          <View style={styles.isVerified}>
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
    return <Text style={styles.title}>{title}</Text>;
  };
  const ServePost = ({}) => {
    const postTagIcon = planet ? 'Planet' : 'People';
    const iconColor = planet ? Colors.planet : Colors.primary;

    return (
      // <View style={styles.rowWrapper}>
      //   <ScrollView showsVerticalScrollIndicator={false} horizontal={false}>
      //     <Text style={styles.postTitle}>{body}</Text>
      //   </ScrollView>
      //   <View style={styles.badgeContainer}>
      //     <View
      //       style={{
      //         backgroundColor: iconColor,
      //         padding: 8.75,
      //         borderRadius: 100,
      //       }}>
      //       <CustomButton
      //         iconLeft={postTagIcon}
      //         iconFill={Colors.white}
      //         iconWidth={25}
      //         iconHeight={25}
      //         iconStyling={styles.postTagIcon}
      //         style={{
      //           backgroundColor: Colors.transparent,
      //         }}
      //         onPress={() => alert(postTagIcon)}
      //       />
      //     </View>
      //   </View>
      // </View>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.msgContainer}>
          <Text style={styles.msg}>{body}</Text>
        </View>
      </ScrollView>
    );
  };

  // RETURN ---------------------------------------------------------
  return (
    <ScreenWrapper
      image={picture.url}
      gradient={[Colors.gradientFilterTop, Colors.gradientFilterBottom]}>
      <View style={styles.wrapper}>
        <ServePostHeaderActions />
        <View style={styles.appActions}>
          <AppActions
            navigation={navigation}
            Commend
            Applaud
            Shoutout
            Comment
            profileDataInfo={profileDataInfo}
          />
        </View>
        <View style={styles.postContainer}>
          <ServeProfileInfo />
          <ServePostTitle />
          <ServePost />
          {canVolunteer && (
            <View style={styles.getInvolvedActions}>
              <CustomButton
                title="get involved"
                onPress={() => setDonateReason(true)}
              />
            </View>
          )}
        </View>
      </View>
      {donateReason && (
        <CommendActions
          donateReason={donateReason}
          setDonateReason={setDonateReason}
        />
      )}
    </ScreenWrapper>
  );
};

export default Post;
