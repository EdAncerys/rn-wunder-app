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

import {NOTIFICATION_DATA, PROFILE_DATA} from '../../config/data';

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

const UserNotification = ({navigation}) => {
  const [comment, setComment] = React.useState(PROFILE_DATA);
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

      const handleIconOnPress = () => {
        if (action === 'QRCode') {
          navigation.navigate('ProjectStack', {
            screen: 'QRCode',
            params: {profileDataInfo: item},
          });
          return;
        }
        alert('take to action');
      };

      return (
        <TouchableOpacity onPress={handleIconOnPress}>
          <ImageBackground source={url} style={styles.imgContainerBackground}>
            <View style={styles.imgWrapper}>
              {donate && <Text style={styles.msgCoins}>{coins}</Text>}
              {!donate && <SvgIcon width={19} fill={Colors.white} />}
            </View>
          </ImageBackground>
        </TouchableOpacity>
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
        {!interaction && (
          <ServeFollowAction onPress={() => alert(item.action)} />
        )}
        {placeDivider && <View style={styles.divider}></View>}
      </TouchableOpacity>
    );
  };

  const ServeComment = ({filter, setFilter}) => {
    const {profileImageUrl, name, postTitle, tags, post, isVerified} = comment;

    return (
      <View>
        <View style={{alignSelf: 'flex-end'}}>
          <CustomButton
            style={{backgroundColor: Colors.transparent}}
            iconLeft="Cross"
            iconWidth={16}
            iconHeight={16}
            // onPress={() => setSponsorAction(false)}
          />
        </View>
        <View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View>
              <Image
                source={{uri: profileImageUrl}}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                }}
              />
            </View>
            <View>
              <Text>@{name}</Text>
            </View>
            {isVerified && (
              <CustomButton
                iconLeft="Verified"
                iconFill={Colors.primary}
                iconWidth={20}
                iconHeight={20}
                style={{backgroundColor: Colors.transparent}}
              />
            )}
          </View>
        </View>
        <View style={{marginVertical: 20}}>
          <Text style={{...Fonts.N_700_28}}>{postTitle}</Text>
        </View>
        <View style={{}}>
          <Text style={{...Fonts.N_400_16}}>{post}</Text>
        </View>
        <View style={{marginVertical: 20}}>
          <Text style={{...Fonts.N_400_16}}>{tags}</Text>
        </View>
        <View style={styles.divider} />
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
  return (
    <ScreenWrapper>
      <ServeComment filter={filter} setFilter={setFilter} />
      <ScrollView>
        <ServeData data={mostReascent} title="most recent" />
       </ScrollView>
    </ScreenWrapper>
  );
};

export default UserNotification;
