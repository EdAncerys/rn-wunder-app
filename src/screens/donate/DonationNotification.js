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
} from 'react-native';

import Colors from '../../config/colors';
import Fonts from '../../config/fonts';
import CustomButton from '../../components/CustomButton';
import LeftBlack from '../../assets/icons/app/left-black.png';
import ProfileBeth from '../../assets/icons/content/profile-beth.png';
import NotificationsImgOne from '../../assets/icons/content/notification-img-one.png';
import ProfileSarah from '../../assets/icons/content/profile-sarah.png';
import NotificationsImgTwo from '../../assets/icons/content/notification-img-two.png';

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
    marginVertical: '2%',
  },
  contentContainer: {
    paddingHorizontal: '8%',
    marginVertical: '2%',
  },
  notificationContainer: {
    flexDirection: 'row',
    marginVertical: '3%',
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
    marginVertical: '3.5%',
  },
  name: {
    ...Fonts.N_400_14,
  },
  notificationMsg: {
    ...Fonts.N_400_10,
    color: Colors.lightSilver,
  },
});

const DATA_MOST_RECENT = [
  {
    name: 'Beth Hall',
    createdAt: 'Nov 17th, 2020',
    notificationMsg: 'Donated 30 coins to: Community Food Con...',
    avatar: ProfileBeth,
    notificationImg: NotificationsImgOne,
    action: 'donate',
    coins: '30',
  },
  {
    name: 'Sarah Alderidge',
    createdAt: 'Nov 17th, 2020',
    notificationMsg: 'Donated 5 coins to: Daily meditation for a...',
    avatar: ProfileSarah,
    notificationImg: NotificationsImgTwo,
    action: 'donate',
    coins: '5',
  },
];

// SERVERS ---------------------------------------------------------
const renderMostRecent = ({item, index}) => {
  return (
    <ScrollView>
      <View style={styles.notificationContainer}>
        <View style={styles.avatarContainer}>
          <Image source={item.avatar} />
        </View>
        <View style={styles.msgContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.notificationMsg}>{item.notificationMsg}</Text>
        </View>
        <View style={styles.imgContainer}>
          <ImageBackground
            source={item.notificationImg}
            style={styles.imgContainerBackground}>
            <View style={styles.imgWrapper}>
              <Text style={styles.msgCoins}>{item.coins}</Text>
            </View>
          </ImageBackground>
        </View>
      </View>
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
        renderItem={renderMostRecent}
      />
      <View style={styles.divider}></View>
    </View>
  );
};

// RETURN ---------------------------------------------------------
const DonationNotification = ({navigation}) => {
  const [dataMostRecent, setDataMostRecent] = React.useState(DATA_MOST_RECENT);

  return (
    <View>
      <StatusBar hidden />
      <ServeNavigation />
      <ServeData data={dataMostRecent} title="most recent" />
    </View>
  );
};

export default DonationNotification;
