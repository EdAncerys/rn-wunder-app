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
} from 'react-native';

import Colors from '../../config/colors';
import Fonts from '../../config/fonts';
import CustomButton from '../../components/CustomButton';
import LeftBlack from '../../assets/icons/app/left-black.png';
import Applaud from '../../assets/icons/app/applaud.png';
import ProfileBeth from '../../assets/icons/content/profile-beth.png';
import ProfileSarah from '../../assets/icons/content/profile-sarah.png';
import ProfileYvonne from '../../assets/icons/content/profile-yvonne.png';
import ProfileSusanna from '../../assets/icons/content/profile-susanna.png';
import ProfileMatt from '../../assets/icons/content/profile-matt.png';
import NotificationsImgOne from '../../assets/icons/content/notification-img-one.png';
import NotificationsImgTwo from '../../assets/icons/content/notification-img-two.png';
import NotificationsImgThree from '../../assets/icons/content/notification-img-three.png';
import NotificationsImgFour from '../../assets/icons/content/notification-img-four.png';

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
    marginTop: 50,
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
    marginRight: 10,
  },
  msgContainer: {
    flex: 1,
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
    ...Fonts.N_500_14,
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
  btnContainer: {
    // borderRadius: 6,
    overflow: 'hidden',
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
    name: 'Joe Gardner & 10 others',
    createdAt: '1d',
    notificationMsg: 'Applauded your post: Daily meditation for...',
    avatar: ProfileBeth,
    notificationImg: NotificationsImgTwo,
    action: 'apploud',
    actionIcon: Applaud,
  },
  {
    name: 'Yvonne Chin',
    createdAt: '1d',
    notificationMsg: 'Applauded your post: Morning Beach Clean...',
    avatar: ProfileYvonne,
    notificationImg: NotificationsImgOne,
    action: 'apploud',
    actionIcon: Applaud,
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
];

// SERVERS ---------------------------------------------------------
const renderItem = ({item, index}) => {
  const placeDivider = (index + 1) % 4 === 0;
  const notificationImg = item.notificationImg;
  const donate = item.action === 'donate';
  const apploud = item.action === 'apploud';
  const following = item.action === 'following';

  const ServeNotification = ({props}) => {
    return (
      <ImageBackground
        source={item.notificationImg}
        style={styles.imgContainerBackground}>
        <View style={styles.imgWrapper}>
          {donate && <Text style={styles.msgCoins}>{item.coins}</Text>}
          {apploud && (
            <Image source={item.actionIcon} style={styles.actionIcon} />
          )}
        </View>
      </ImageBackground>
    );
  };

  const ServeFollow = ({onPress}) => {
    return (
      <CustomButton
        title={item.action}
        style={{
          borderRadius: 6,
          backgroundColor: following ? Colors.secondary : Colors.primary,
          shadowColor: Colors.lightBlack,
          shadowOffset: {
            width: 0,
            height: 1,
          },
          elevation: 1,
          shadowOpacity: 0.25,
          shadowRadius: 3,
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

  return (
    <ScrollView>
      <TouchableOpacity style={styles.notificationContainer}>
        <View style={styles.avatarContainer}>
          <Image source={item.avatar} />
        </View>
        <View style={styles.msgContainer}>
          <View style={styles.notificationContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={{...styles.notificationMsg, ...styles.createdAt}}>
              {item.createdAt}
            </Text>
          </View>
          <Text style={styles.notificationMsg}>{item.notificationMsg}</Text>
        </View>
        {notificationImg && <ServeNotification />}
        {!notificationImg && <ServeFollow onPress={() => alert('path')} />}
      </TouchableOpacity>
      {placeDivider && <View style={styles.divider}></View>}
    </ScrollView>
  );
};

const ServeNavigation = ({props}) => {
  return (
    <View>
      <View style={styles.navigationContainer}>
        <CustomButton
          image={LeftBlack}
          onPress={() => navigation.navigate('Home')}
          style={{backgroundColor: Colors.transparent}}
          imageStyling={{width: 12, height: 20}}
        />
        <View style={styles.navigationTitleContainer}>
          <Text style={styles.navigationTitle}>Notifications</Text>
        </View>
      </View>
      <View style={styles.divider}></View>
    </View>
  );
};

const ServeData = ({data, title}) => {
  return (
    <View style={styles.contentContainer}>
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
    <View>
      <StatusBar hidden />
      <ServeNavigation />
      <ServeData data={dataMostRecent} title="most recent" />
      <ServeData data={dataThisWeek} title="this week" />
    </View>
  );
};

export default DonationNotification;
