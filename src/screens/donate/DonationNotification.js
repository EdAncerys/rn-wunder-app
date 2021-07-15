import * as React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  ScrollView,
  FlatList,
} from 'react-native';

import Colors from '../../config/colors';
import Fonts from '../../config/fonts';
import CustomButton from '../../components/CustomButton';
import LeftBlack from '../../assets/icons/app/left-black.png';
import ProfileBeth from '../../assets/icons/content/profile-beth.png';
import NotificationsImgOne from '../../assets/icons/content/notification-img-one.png';

const styles = StyleSheet.create({
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
  profileWrapper: {
    flexDirection: 'row',
    marginVertical: '5%',
  },
  avatarContainer: {
    paddingRight: 10,
  },
  notificationContainer: {
    flex: 1,
  },
  notificationImgContainer: {
    backgroundColor: Colors.screenFilter,
    paddingLeft: 10,
  },
  title: {
    ...Fonts.N_500_14,
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
    avatar: ProfileBeth,
    notificationImg: NotificationsImgOne,
    action: 'donate',
    coins: '30',
  },
];

// SERVERS ---------------------------------------------------------
const renderMostRecent = ({item, index}) => {
  return (
    <ScrollView>
      <View style={styles.profileWrapper}>
        <View style={styles.avatarContainer}>
          <Image source={item.avatar} />
        </View>
        <View style={styles.notificationContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.notificationMsg}>{item.notificationMsg}</Text>
        </View>
        <View style={styles.notificationImgContainer}>
          <Image source={item.notificationImg} />
        </View>
      </View>
    </ScrollView>
  );
};

// RETURN ---------------------------------------------------------
const DonationNotification = ({navigation}) => {
  const [dataMostRecent, setDataMostRecent] = React.useState(DATA_MOST_RECENT);

  return (
    <View>
      <StatusBar hidden />
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
      <View style={styles.contentContainer}>
        <Text style={styles.title}>most recent</Text>
        <FlatList
          data={dataMostRecent}
          keyExtractor={(_, index) => String(index)}
          renderItem={renderMostRecent}
        />
        <View style={styles.divider}></View>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.title}>this week</Text>
        <ScrollView>
          <Text>Content</Text>
        </ScrollView>
        <View style={styles.divider}></View>
      </View>
    </View>
  );
};

export default DonationNotification;
