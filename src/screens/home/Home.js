import * as React from 'react';
import {
  StatusBar,
  FlatList,
  Dimensions,
  Animated,
  View,
  StyleSheet,
} from 'react-native';
import {
  FlingGestureHandler,
  Directions,
  State,
} from 'react-native-gesture-handler';
const {width, height} = Dimensions.get('screen');

import HomeScreen from '../../components/HomeScreen';
import BackgroundExpOne from '../../assets/images/home/home-exp-one-background.png';
import ProfileIconOne from '../../assets/icons/content/profile-wunder.png';
import BackgroundExpTwo from '../../assets/images/home/home-exp-two-background.png';
import ProfileIconTwo from '../../assets/icons/content/profile-ormand.png';
import BackgroundExpThree from '../../assets/images/home/home-exp-three-background.png';
import ProfileIconThree from '../../assets/icons/content/profile-friends.png';
import BackgroundExpFour from '../../assets/images/home/home-exp-four-background.png';
import ProfileIconFour from '../../assets/icons/content/profile-vic.png';
import BackgroundExpFive from '../../assets/images/home/home-exp-five-background.png';
import ProfileIconFive from '../../assets/icons/content/profile-tesco.png';
import BackgroundExpSix from '../../assets/images/home/home-exp-six-background.png';
import ProfileIconSix from '../../assets/icons/content/profile-sam.png';
import BackgroundExpSeven from '../../assets/images/home/home-exp-seven-background.png';
import ProfileIconSeven from '../../assets/icons/content/profile-milli.png';
import BackgroundExpEight from '../../assets/images/home/home-exp-eight-background.png';
import ProfileIconEight from '../../assets/icons/content/profile-nora.png';
import BackgroundExpNine from '../../assets/images/home/home-exp-nine-background.png';
import ProfileIconNine from '../../assets/icons/content/profile-nora.png';

const ITEM_WIDTH = width;
const ITEM_HEIGHT = height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screenContainer: {
    width: width,
    height: height,
    borderTopLeftRadius: ITEM_WIDTH / 10,
    borderTopRightRadius: ITEM_WIDTH / 10,
    overflow: 'hidden',
  },
});

const DATA = [
  {
    background: BackgroundExpOne,
    profileIcon: ProfileIconOne,
    profileName: '@wunder',
    verified: true,
    title: 'Healthy Eating',
    post: 'It’s recommended that you eat at least 5 portions of a variety',
    postTag: 'planet',
    getInvolved: false,
    donateActions: true,
    navigateActions: false,
  },
  {
    background: BackgroundExpTwo,
    profileIcon: ProfileIconTwo,
    profileName: '@greatormondst',
    verified: true,
    title: 'The difference we make, together',
    post: 'Helps us to transform the lives of seriously ill children. Every d',
    postTag: false,
    getInvolved: false,
    donateActions: false,
    navigateActions: true,
  },
  {
    background: BackgroundExpThree,
    profileIcon: ProfileIconThree,
    profileName: '@friendsoftheearth',
    verified: false,
    title: 'Pembury Children’s Community',
    post: 'The Pembury Children’s Community is a partnership led by the Co',
    postTag: 'planet',
    getInvolved: true,
    donateActions: false,
    navigateActions: false,
  },
  {
    background: BackgroundExpFour,
    profileIcon: ProfileIconFour,
    profileName: '@vic_azerrenca',
    verified: false,
    title: 'Peaceful Walk this Morning',
    post: 'The Pembury Children’s Community is a partnership led by the Co',
    postTag: 'planet',
    getInvolved: false,
    donateActions: false,
    navigateActions: false,
  },
  {
    background: BackgroundExpFive,
    profileIcon: ProfileIconFive,
    profileName: '@friendsoftheearth',
    verified: true,
    title: 'Community Food Connection Scheme',
    post: 'We’re working with FareShare, a leading food redistribution c',
    postTag: 'planet',
    getInvolved: true,
    donateActions: false,
    navigateActions: false,
  },
  {
    background: BackgroundExpSix,
    profileIcon: ProfileIconSix,
    profileName: '@sam_williams',
    verified: false,
    title: 'Morning Central Park Run',
    post: 'Every Wednesday me and the group go for a morning run through',
    postTag: 'planet',
    getInvolved: false,
    donateActions: false,
    navigateActions: false,
  },
  {
    background: BackgroundExpSeven,
    profileIcon: ProfileIconSeven,
    profileName: '@millissaharris10',
    verified: false,
    title: 'Cooking for the homeless in my n...',
    post: 'Today I will be cooking the homeless people in my area in an att',
    postTag: false,
    getInvolved: false,
    donateActions: false,
    navigateActions: false,
  },
  {
    background: BackgroundExpEight,
    profileIcon: ProfileIconEight,
    profileName: '@nora_osborn',
    verified: false,
    title: 'Self care day',
    post: 'Self care day with this new charcoal mask I received this morning',
    postTag: false,
    getInvolved: false,
    donateActions: false,
    navigateActions: false,
  },
  {
    background: BackgroundExpNine,
    profileIcon: ProfileIconNine,
    profileName: '@nora_osborn',
    verified: false,
    title: 'Working On Body Positivity',
    post: 'Working on myself and helping others with body positivity',
    postTag: false,
    getInvolved: false,
    donateActions: false,
    navigateActions: false,
  },
];

const Home = ({navigation}) => {
  const [data, setData] = React.useState(DATA);
  const scrollYIndex = React.useRef(new Animated.Value(0)).current;
  const scrollYAnimated = React.useRef(new Animated.Value(0)).current;
  const [index, setIndex] = React.useState(0);
  const setActiveIndex = React.useCallback(activeIndex => {
    scrollYIndex.setValue(activeIndex);
    setIndex(activeIndex);
  });

  React.useEffect(() => {
    if (index === data.length - 1) {
      const newData = [...data, ...data]; // Apply looping to render components
      setData(newData);
    }
  });

  React.useEffect(() => {
    Animated.spring(scrollYAnimated, {
      toValue: scrollYIndex,
      useNativeDriver: true,
      stiffness: 45,
    }).start();
  });

  // SERVERS ---------------------------------------------------------
  const ServeScreen = ({item}) => {
    return (
      <View style={styles.screenContainer}>
        <HomeScreen
          navigation={navigation}
          background={item.background}
          profileIcon={item.profileIcon}
          profileName={item.profileName}
          verified={item.verified}
          title={item.title}
          post={item.post}
          postTag={item.postTag}
          getInvolved={item.getInvolved}
          donateActions={item.donateActions}
          navigateActions={item.navigateActions}
        />
      </View>
    );
  };

  const renderItem = ({item, index}) => {
    const inputRange = [index - 1, index, index + 1];
    const translateY = scrollYAnimated.interpolate({
      inputRange,
      outputRange: [ITEM_HEIGHT - ITEM_WIDTH / 2.6, 0, 0],
    });
    const scale = scrollYAnimated.interpolate({
      inputRange,
      outputRange: [1, 1, 0],
    });
    const opacity = scrollYAnimated.interpolate({
      inputRange,
      outputRange: [1, 1, 0],
    });

    return (
      <Animated.View
        style={{
          position: 'absolute',
          left: -ITEM_WIDTH / 2,
          opacity,
          transform: [
            {
              translateY,
            },
            {scale},
          ],
        }}>
        <ServeScreen item={item} />
      </Animated.View>
    );
  };

  // RETURN ---------------------------------------------------------
  return (
    <FlingGestureHandler
      key="up"
      direction={Directions.UP}
      onHandlerStateChange={ev => {
        if (ev.nativeEvent.state === State.END) {
          if (index === data.length - 1) {
            return;
          }
          setActiveIndex(index + 1);
        }
      }}>
      <FlingGestureHandler
        key="down"
        direction={Directions.DOWN}
        onHandlerStateChange={ev => {
          if (ev.nativeEvent.state === State.END) {
            if (index === 0) {
              return;
            }
            setActiveIndex(index - 1);
          }
        }}>
        <View style={styles.container}>
          <StatusBar hidden />
          <FlatList
            data={data}
            keyExtractor={(_, index) => String(index)}
            horizontal
            inverted
            contentContainerStyle={{
              flex: 1,
              justifyContent: 'center',
            }}
            scrollEnabled={false}
            removeClippedSubviews={false}
            renderItem={renderItem}
          />
        </View>
      </FlingGestureHandler>
    </FlingGestureHandler>
  );
};

export default Home;
