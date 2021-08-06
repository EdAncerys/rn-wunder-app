import * as React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import {NOTIFICATION_DATA} from '../../config/data';

import ScreenWrapper from '../../components/ScreenWrapper';
import Colors from '../../config/colors';
import Fonts from '../../config/fonts';
import * as Icons from '../../config/icons';
import NavigateAction from '../../components/NavigateAction';
import CustomButton from '../../components/CustomButton';

const styles = StyleSheet.create({
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
  },
  createdAt: {
    marginLeft: '2%',
  },
  notificationMsg: {
    ...Fonts.N_400_10,
    color: Colors.lightSilver,
  },
});

// SERVERS ---------------------------------------------------------
const renderFlatList = ({item, index}) => {
  const {action, url, coins} = item;
  const placeDivider = (index + 1) % 4 === 0;
  let interaction;
  if (
    action === 'donate' ||
    action === 'applaud' ||
    action === 'comment' ||
    action === 'QRCode'
  )
    interaction = true;
  const donate = action === 'donate';
  const following = action === 'following';

  const ServeNotification = ({}) => {
    let actionIcon = 'Comment';
    if (action === 'applaud') actionIcon = 'Applaud';
    if (action === 'QRCode') actionIcon = 'QRCode';
    const SvgIcon = Icons[actionIcon];

    return (
      <ImageBackground source={url} style={styles.imgContainerBackground}>
        <View style={styles.imgWrapper}>
          {donate && <Text style={styles.msgCoins}>{coins}</Text>}
          {!donate && <SvgIcon width={19} fill={Colors.white} />}
        </View>
      </ImageBackground>
    );
  };

  const ServeFollowAction = ({onPress}) => {
    return (
      <CustomButton
        title={item.action}
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

  return (
    <TouchableOpacity
      style={styles.notificationContainer}
      onPress={() => alert('profile')}>
      <View>
        <Image
          source={{uri: item.profileImageUrl}}
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
          }}
        />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          marginHorizontal: 8,
          marginVertical: 10,
        }}>
        <View style={styles.notificationContainer}>
          <Text style={{...Fonts.N_400_14}}>{item.name}</Text>
          <Text style={{...styles.notificationMsg, ...styles.createdAt}}>
            {item.createdAt}
          </Text>
        </View>
        <Text style={styles.notificationMsg}>{item.notificationBody}</Text>
      </View>
      {interaction && <ServeNotification />}
      {!interaction && <ServeFollowAction onPress={() => alert(item.action)} />}
      {placeDivider && <View style={styles.divider}></View>}
    </TouchableOpacity>
  );
};

const ServeNavigation = ({navigation, filter, setFilter}) => {
  const allAction = filter === 'All' ? Fonts.N_700_12 : Fonts.N_400_12;
  const userInteractions =
    filter === 'userInteractions' ? Fonts.N_700_12 : Fonts.N_400_12;
  const QRCode = filter === 'QRCode' ? Fonts.N_700_12 : Fonts.N_400_12;

  return (
    <View>
      <View style={{marginHorizontal: '5%'}}>
        <NavigateAction
          iconFill={Colors.lightBlack}
          title="Notifications"
          titleStyling={{...Fonts.N_700_16, color: Colors.lightBlack}}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.divider}></View>
      <View style={{marginHorizontal: '5%'}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <CustomButton
            title="All"
            titleStyling={{...allAction, color: Colors.lightBlack}}
            style={{
              backgroundColor: Colors.transparent,
            }}
            onPress={() => setFilter('All')}
          />
          <CustomButton
            title="User Interactions"
            titleStyling={{...userInteractions, color: Colors.lightBlack}}
            style={{
              backgroundColor: Colors.transparent,
            }}
            onPress={() => setFilter('userInteractions')}
          />
          <CustomButton
            title="QR Codes"
            titleStyling={{...QRCode, color: Colors.lightBlack}}
            style={{
              backgroundColor: Colors.transparent,
            }}
            onPress={() => setFilter('QRCode')}
          />
        </View>
      </View>
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
        renderItem={renderFlatList}
      />
    </View>
  );
};

// RETURN ---------------------------------------------------------
const UserNotification = ({navigation}) => {
  const [notifications, setNotifications] = React.useState(NOTIFICATION_DATA);
  const [filteredData, setFilteredData] = React.useState(notifications);
  const [filter, setFilter] = React.useState('All');

  const mostReascent = filteredData.sort(() => 0.5 - Math.random()).slice(0, 2);
  const thisWeek = filteredData.sort(() => 0.5 - Math.random()).slice(0, 6);

  React.useEffect(() => {
    if (filter === 'QRCode') {
      const data = notifications.filter(item => item.action === 'QRCode');
      setFilteredData(data);
      return;
    }
    if (filter === 'userInteractions') {
      const data = notifications.filter(item => item.action !== 'QRCode');
      setFilteredData(data);
      return;
    }
    setFilteredData(notifications);
  }, [filter]);

  return (
    <ScreenWrapper>
      <ServeNavigation
        navigation={navigation}
        filter={filter}
        setFilter={setFilter}
      />
      <ScrollView>
        <ServeData data={mostReascent} title="most recent" />
        <ServeData data={thisWeek} title="this week" divider />
        <ServeData data={filteredData} title="earlier" divider />
      </ScrollView>
    </ScreenWrapper>
  );
};

export default UserNotification;
