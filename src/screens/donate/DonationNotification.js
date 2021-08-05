import * as React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  ScrollView,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import ScreenWrapper from '../../components/ScreenWrapper';
import Colors from '../../config/colors';
import Fonts from '../../config/fonts';
import * as Icons from '../../config/icons';
import CustomButton from '../../components/CustomButton';
import ProfileBeth from '../../assets/dummyAssets/profile-beth.png';
import ProfileSarah from '../../assets/dummyAssets/profile-sarah.png';
import ProfileYvonne from '../../assets/dummyAssets/profile-yvonne.png';
import ProfileSusanna from '../../assets/dummyAssets/profile-susanna.png';
import ProfileMatt from '../../assets/dummyAssets/profile-matt.png';
import ProfileFiona from '../../assets/dummyAssets/profile-fiona.png';
import ProfileKim from '../../assets/dummyAssets/profile-kim.png';
import ProfileJoseph from '../../assets/dummyAssets/profile-joseph.png';
import NotificationsImgOne from '../../assets/dummyAssets/notification-img-one.png';
import NotificationsImgTwo from '../../assets/dummyAssets/notification-img-two.png';
import NotificationsImgThree from '../../assets/dummyAssets/notification-img-three.png';
import NotificationsImgFour from '../../assets/dummyAssets/notification-img-four.png';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  navigationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '5%',
    marginVertical: '3%',
  },
  navigationTitleContainer: {
    flex: 1,
  },
  navigationTitle: {
    ...Fonts.N_700_16,
    textAlign: 'center',
  },
  divider: {
    borderColor: Colors.silver,
    borderBottomWidth: 1,
    marginVertical: '3%',
  },
  contentContainer: {
    paddingHorizontal: '8%',
    marginVertical: '2%',
  },
  notificationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: '2%',
  },
  avatarContainer: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
  msgContainer: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 8,
  },
  imgContainerBackground: {
    width: 32,
    height: 40,
    borderRadius: 5,
    marginLeft: 10,
    overflow: 'hidden',
  },
  imgWrapper: {
    flex: 1,
    backgroundColor: Colors.screenFilter,
    justifyContent: 'center',
    alignItems: 'center',
  },
  msgCoins: {
    ...Fonts.N_400_14,
    color: Colors.white,
  },
  title: {
    ...Fonts.N_400_14,
    marginVertical: '2%',
  },
  name: {
    ...Fonts.N_400_14,
  },
  createdAt: {
    marginLeft: '2%',
  },
  notificationMsg: {
    ...Fonts.N_400_10,
    color: Colors.lightSilver,
  },
  actionIcon: {
    width: 16,
    height: 14.7,
  },
  multipleAvatar: {
    width: 26,
    height: 26,
  },
});

const DATA_MOST_RECENT = [
  {
    name: 'Beth Hall',
    createdAt: '34m',
    notificationMsg: 'Donated 30 coins to: Community Food Con...',
    avatar: ProfileBeth,
    notificationImg: NotificationsImgOne,
    action: 'donate',
    coins: '30',
  },
  {
    name: 'Sarah Alderidge',
    createdAt: '1h',
    notificationMsg: 'Donated 5 coins to: Daily meditation for a...',
    avatar: ProfileSarah,
    notificationImg: NotificationsImgTwo,
    action: 'donate',
    coins: '5',
  },
];

const DATA_THIS_WEEK = [
  {
    multiple: true,
    name: 'Joe Gardner & 10 others',
    createdAt: '1d',
    notificationMsg: 'Applauded your post: Daily meditation for...',
    avatar: ProfileYvonne,
    avatarSecondary: ProfileJoseph,
    notificationImg: NotificationsImgTwo,
    action: 'apploud',
    actionIcon: 'Applaud',
  },
  {
    name: 'Yvonne Chin',
    createdAt: '1d',
    notificationMsg: 'Applauded your post: Morning Beach Clean...',
    avatar: ProfileYvonne,
    notificationImg: NotificationsImgThree,
    action: 'apploud',
    actionIcon: 'Applaud',
  },
  {
    name: 'Susanna Fontè',
    createdAt: '2d',
    notificationMsg: 'Started following you!',
    avatar: ProfileSusanna,
    action: 'following',
  },
  {
    name: 'Matt Williams',
    createdAt: '3d',
    notificationMsg: 'Donated 10 coins to: Daily meditation for...',
    avatar: ProfileMatt,
    notificationImg: NotificationsImgOne,
    action: 'donate',
    coins: '10',
  },
  {
    name: 'Fiona Piscek',
    createdAt: '1w',
    notificationMsg: 'Started following you!',
    avatar: ProfileFiona,
    action: 'follow',
  },
  {
    name: 'Kim Smith',
    createdAt: '1w',
    notificationMsg: 'Commented on your post: Wow!',
    avatar: ProfileKim,
    notificationImg: NotificationsImgFour,
    action: 'comment',
    actionIcon: 'Comment',
  },
  {
    name: 'Joseph Gonzalez',
    createdAt: '1w',
    notificationMsg: 'Applauded your post: Treeplanting with the...',
    avatar: ProfileJoseph,
    notificationImg: NotificationsImgFour,
    action: 'apploud',
    actionIcon: 'Applaud',
  },
];

// SERVERS ---------------------------------------------------------
const renderItem = ({profileDataInfo, index}) => {
  const placeDivider = (index + 1) % 4 === 0;
  const notificationImg = profileDataInfo.notificationImg;
  const donate = profileDataInfo.action === 'donate';
  const following = profileDataInfo.action === 'following';

  const ServeNotification = ({props}) => {
    const SvgIcon = Icons[profileDataInfo.actionIcon];

    return (
      <ImageBackground
        source={profileDataInfo.notificationImg}
        style={styles.imgContainerBackground}>
        <View style={styles.imgWrapper}>
          {donate && (
            <Text style={styles.msgCoins}>{profileDataInfo.coins}</Text>
          )}
          {!donate && <SvgIcon width={14} fill={Colors.white} />}
        </View>
      </ImageBackground>
    );
  };

  const ServeFollow = ({onPress}) => {
    return (
      <CustomButton
        title={profileDataInfo.action}
        style={{
          borderRadius: 6,
          minWidth: 80,
          backgroundColor: following ? Colors.success : Colors.primary,
        }}
        shadow={{
          shadowColor: Colors.lightBlack,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3,
          elevation: 2,
        }}
        titleStyling={{
          ...Fonts.N_700_10,
          paddingHorizontal: 16,
          paddingVertical: 5,
        }}
        onPress={onPress}
      />
    );
  };

  const ServeMultipleAvatar = ({profileDataInfo}) => {
    return (
      <View>
        <Image source={profileDataInfo.avatar} style={styles.multipleAvatar} />
        <Image
          source={profileDataInfo.avatarSecondary}
          style={{
            ...styles.multipleAvatar,
            top: -13,
            left: 14,
          }}
        />
      </View>
    );
  };

  return (
    <ScrollView>
      <TouchableOpacity
        style={styles.notificationContainer}
        onPress={() => alert('profile')}>
        <View style={styles.avatarContainer}>
          {!profileDataInfo.multiple && (
            <Image source={profileDataInfo.avatar} />
          )}
          {profileDataInfo.multiple && (
            <ServeMultipleAvatar profileDataInfo={profileDataInfo} />
          )}
        </View>
        <View style={styles.msgContainer}>
          <View style={styles.notificationContainer}>
            <Text style={styles.name}>{profileDataInfo.name}</Text>
            <Text style={{...styles.notificationMsg, ...styles.createdAt}}>
              {profileDataInfo.createdAt}
            </Text>
          </View>
          <Text style={styles.notificationMsg}>
            {profileDataInfo.notificationMsg}
          </Text>
        </View>
        {notificationImg && <ServeNotification />}
        {!notificationImg && (
          <ServeFollow onPress={() => alert(profileDataInfo.action)} />
        )}
      </TouchableOpacity>
      {placeDivider && <View style={styles.divider}></View>}
    </ScrollView>
  );
};

const ServeNavigation = ({onPress}) => {
  return (
    <View>
      <View style={styles.navigationContainer}>
        <CustomButton
          iconLeft="ChevronLeft"
          iconWidth={12}
          iconHeight={20}
          onPress={onPress}
          style={{backgroundColor: Colors.transparent}}
        />
        <View style={styles.navigationTitleContainer}>
          <Text style={styles.navigationTitle}>Notifications</Text>
        </View>
      </View>
      <View style={styles.divider}></View>
    </View>
  );
};

const ServeData = ({data, title, divider}) => {
  return (
    <View style={styles.contentContainer}>
      {divider && <View style={styles.divider}></View>}
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={data}
        keyExtractor={(_, index) => String(index)}
        renderItem={renderItem}
      />
    </View>
  );
};

// RETURN ---------------------------------------------------------
const DonationNotification = ({navigation}) => {
  const [dataMostRecent, setDataMostRecent] = React.useState(DATA_MOST_RECENT);
  const [dataThisWeek, setThisWeek] = React.useState(DATA_THIS_WEEK);

  return (
    <ScreenWrapper>
      <StatusBar hidden />
      <ServeNavigation onPress={() => navigation.goBack()} />
      <ServeData data={dataMostRecent} title="most recent" />
      <ServeData data={dataThisWeek} title="this week" divider />
    </ScreenWrapper>
  );
};

export default DonationNotification;
