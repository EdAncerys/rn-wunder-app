import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Animated,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ScreenFilter from '../../components/ScreenFilter';
import Colors from '../../config/colors';
import Fonts from '../../config/fonts';
import CustomButton from '../../components/CustomButton';
import UserProfileHeaderActions from '../../components/UserProfileHeaderActions';
import {PROFESSIONAL_PROFILE_DATA, PROFILE_DATA_ONE} from '../../config/data';
import AppActionsHorizontal from '../../components/AppActionsHorizontal';
import CommendActions from '../../components/commendActions/CommendActions';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  post: {
    ...Fonts.N_700_16,
    color: Colors.white,
  },
  info: {
    ...Fonts.N_400_13,
    color: Colors.white,
    marginVertical: 3,
  },
  container: {
    flex: 1,
    marginVertical: '10%',
  },
  wrapper: {
    marginHorizontal: '5%',
  },
  divider: {
    borderColor: Colors.silver,
    borderBottomWidth: 1,
  },
  imgTitle: {
    ...Fonts.N_700_12,
    color: Colors.white,
  },
});

const Commending = ({navigation, route}) => {
  // const {profileDataInfo} = route.params;
  const [profile, setProfile] = React.useState(PROFESSIONAL_PROFILE_DATA);
  const [donateReason, setDonateReason] = React.useState(false);
  const [projectImages, setProjectImages] = React.useState(PROFILE_DATA_ONE);
  const [aboutProfile, setAboutProfile] = React.useState(true);
  const [projectsProfile, setProjectsProfile] = React.useState(false);
  const [screenFilter, setScreenFilter] = React.useState(false);
  const [colorFill, setColorFill] = React.useState(Colors.white);

  const {url, about, name, followers, post, profileImageUrl} = profile;
  const imgArrayLength = projectImages.length;
  const headerHeight = height / 10;

  React.useEffect(() => {
    console.log(donateReason);
    if (donateReason) {
      setScreenFilter(true);
      return;
    }
    setScreenFilter(false);
  }, [donateReason]);

  // ANIMATION ---------------------------------------------------------
  const scrollY = React.useRef(new Animated.Value(0)).current;

  const handleScroll = React.useCallback(event => {
    const scrollPosition = event.nativeEvent.contentOffset.y;
    scrollY.setValue(scrollPosition);
    const colorFlipPoint = 365;
    if (scrollPosition > colorFlipPoint) setColorFill(Colors.lightBlack);
    if (scrollPosition < colorFlipPoint) setColorFill(Colors.white);
  });

  // HELPERS ---------------------------------------------------------
  const renderFlatListItem = ({item, index}) => (
    <TouchableOpacity
      key={index}
      style={{flexDirection: 'row'}}
      onPress={() =>
        navigation.navigate('ProjectStack', {
          screen: 'FullScreenImage',
          params: {profileDataInfo: item},
        })
      }>
      <View style={{flex: 1}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: imgArrayLength - 1 === index ? 0 : 15,
            overflow: 'hidden',
          }}>
          <ImageBackground
            source={item.url}
            style={{
              height: height / 8,
              width: width / 2,
              resizeMode: 'cover',
            }}>
            <LinearGradient
              colors={[Colors.gradientFilterTop, Colors.gradientFilterBottom]}
              start={{x: 0.4, y: 0.4}}
              style={{flex: 1}}>
              <View
                style={{
                  zIndex: 1,
                  position: 'absolute',
                  bottom: 10,
                  paddingHorizontal: 10,
                }}>
                <Text style={styles.imgTitle}>{item.title}</Text>
                <View
                  style={{
                    paddingVertical: 5,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.imgTitle}>{item.time}</Text>
                </View>
              </View>
            </LinearGradient>
          </ImageBackground>
        </View>
      </View>
    </TouchableOpacity>
  );

  // SERVERS ---------------------------------------------------------
  const ServeProfileActions = ({}) => (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: '5%',
      }}>
      <View
        style={{
          flex: 1,
        }}>
        <AppActionsHorizontal
          navigation={navigation}
          profileDataInfo={profile}
          applaud
          shoutout
        />
      </View>

      <View style={{flex: 1, marginHorizontal: '5%'}}>
        <CustomButton title="commend" onPress={() => setDonateReason(true)} />
      </View>
    </View>
  );

  const ServeProfileInfo = () => {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <View style={{flex: 1}}>
          <Image
            source={profileImageUrl}
            style={{
              width: 96,
              height: 96,
              borderRadius: 100,
              borderWidth: 1,
              borderColor: Colors.lightSilver,
            }}
          />
        </View>
        <View style={{flex: 2}}>
          <View style={{flex: 1}}>
            <View style={{flex: 1}}>
              <Text style={{...Fonts.N_700_12, color: Colors.lightBlack}}>
                About Charity
              </Text>
            </View>
            <View>
              <Text style={{...Fonts.N_700_24, color: Colors.lightBlack}}>
                {about}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const ServeProfileHeader = ({}) => {
    return (
      <View style={{height: height / 2}}>
        <ImageBackground
          source={url}
          style={{
            flex: 1,
            resizeMode: 'cover',
            justifyContent: 'center',
          }}>
          <LinearGradient
            colors={[Colors.gradientProfile, Colors.transparent]}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 0.5}}
            style={{flex: 1}}>
            <View
              style={{
                flex: 1,
                alignSelf: 'flex-end',
                justifyContent: 'flex-end',
                margin: '5%',
              }}>
              <CustomButton
                iconRight="SoundOff"
                iconWidth={16}
                iconHeight={16}
                iconFill={Colors.white}
                style={{
                  backgroundColor: Colors.lightBlack,
                  paddingHorizontal: 5,
                  paddingVertical: 5,
                  borderRadius: 20,
                }}
              />
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>
    );
  };

  const ServeAbout = ({}) => {
    return (
      <View>
        <View style={{marginVertical: '5%'}}>
          <Text style={{...Fonts.N_400_14, color: Colors.lightBlack}}>
            {post}
          </Text>
        </View>
        <View>
          <Text style={{...Fonts.N_700_14, color: Colors.lightBlack}}>
            We are commited to:
          </Text>
        </View>
        <View style={{marginVertical: '5%'}}>
          <View>
            <Text style={{...Fonts.N_400_14, color: Colors.lightBlack}}>
              • a peaceful and sustainable world based on societies living in
              harmony with nature.
            </Text>
          </View>
          <View>
            <Text style={{...Fonts.N_400_14, color: Colors.lightBlack}}>
              • each generation enjoying an environment that’s getting better; a
              safer climate, abundant nature, healthy air, water and food.
            </Text>
          </View>
          <View>
            <Text style={{...Fonts.N_400_14, color: Colors.lightBlack}}>
              • a growing and diverse network of people coming together to
              transform our environment into one which is flourishing,
              sustainable, and socially just.
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const ServePageNavigation = () => {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: '5%',
            marginTop: 10,
          }}>
          <View style={{flex: 1}}>
            <CustomButton
              title="About"
              titleStyling={{...Fonts.N_700_12, color: Colors.lightBlack}}
              style={{backgroundColor: Colors.transparent}}
              onPress={() => setAboutProfile(true)}
            />
          </View>
          <View style={{flex: 1}}>
            <CustomButton
              title="Projects"
              titleStyling={{...Fonts.N_700_12, color: Colors.lightBlack}}
              style={{backgroundColor: Colors.transparent}}
              onPress={() => setAboutProfile(true)}
            />
          </View>
        </View>
        <View style={styles.divider} />
      </View>
    );
  };

  const ServeTopBar = () => {
    return (
      <Animated.View
        style={{
          position: 'absolute',
          zIndex: 4,
        }}>
        <View
          style={{
            marginHorizontal: '5%',
            paddingTop: '10%',
            paddingBottom: 20,
          }}>
          <UserProfileHeaderActions
            navigation={navigation}
            profileDataInfo={profile}
            color={colorFill}
            walletOnPress={() => setDonateReason(true)}
            onPress={() => navigation.goBack()}
          />
        </View>
      </Animated.View>
    );
  };

  // RETURN ---------------------------------------------------------
  return (
    <View style={{flex: 1}}>
      <StatusBar hidden />
      {screenFilter && <ScreenFilter />}
      {donateReason && (
        <CommendActions
          donateReason={donateReason}
          setDonateReason={setDonateReason}
        />
      )}

      <ServeTopBar />
      <ScrollView
        onScroll={handleScroll}
        scrollEventThrottle={16}
        stickyHeaderIndices={[2]}
        showsVerticalScrollIndicator={false}
        style={{paddingVertical: headerHeight}}>
        <View style={{marginTop: -headerHeight}}>
          <ServeProfileHeader />
        </View>
        <Animated.View
          style={[
            {
              height: scrollY.interpolate({
                inputRange: [0, height],
                outputRange: [0, 200],
              }),
            },
          ]}
        />
        <ServePageNavigation />
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <ServeProfileInfo />
            <ServeProfileActions />
            <View style={{marginVertical: '5%'}}>
              <Text style={{...Fonts.N_400_14, color: Colors.lightBlack}}>
                {post}
              </Text>
            </View>
          </View>
          <View>
            <FlatList
              keyExtractor={(_, index) => String(index)}
              horizontal={true}
              data={projectImages}
              renderItem={renderFlatListItem}
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <View style={styles.wrapper}>
            <ServeAbout />
            <View style={{marginBottom: headerHeight}} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Commending;
