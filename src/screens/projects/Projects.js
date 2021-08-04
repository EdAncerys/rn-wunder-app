import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {useAuthState} from '../../context/auth';
import AddPostAction from '../../components/AddPostAction';
import LinearGradient from 'react-native-linear-gradient';
import {PROJECTS_DATA} from '../../config/data';

import ScreenWrapper from '../../components/ScreenWrapper';
import Colors from '../../config/colors';
import Fonts from '../../config/fonts';
import {Planet, People} from '../../config/icons';
import CustomButton from '../../components/CustomButton';
import DonateActions from '../../components/DonateActions';

import DummyBackground from '../../assets/images/profile/profile-background.png';
const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  donateContainer: {
    justifyContent: 'center',
    marginHorizontal: '5%',
  },
  actionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '5%',
    marginVertical: '5%',
  },
  imgIconBackground: {
    width: 16,
    height: 16,
    borderRadius: 16 / 2,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: height / 4 + 50,
    width: width / 2 - 30,
    resizeMode: 'cover',
  },
  imageStyle: {
    resizeMode: 'cover',
    height: height / 3,
    width: width / 3,
  },
  actionTitle: {
    ...Fonts.N_700_12,
    color: Colors.lightBlack,
  },
  imgInfoOverlay: {},
  textOverlay: {
    ...Fonts.N_400_10,
    color: Colors.white,
  },
});

const Projects = ({navigation}) => {
  const {addAction} = useAuthState();
  const [addPostPopUp, setAddPostPopUp] = React.useState(null);
  const [data, setData] = React.useState(PROJECTS_DATA);
  const [mutatedData, setMutatedData] = React.useState(false);
  const [filter, setFilter] = React.useState('');

  React.useEffect(() => {
    if (!filter) {
      setData(PROJECTS_DATA);
      return;
    }
    const filteredData = PROJECTS_DATA.filter(item => item.category == filter);
    setData(filteredData);
  }, [filter]);

  React.useEffect(() => {
    let mutatedArray = [];
    data.map((item, index) => {
      let dummy = {
        url: DummyBackground,
        dummy: true,
      };

      if (index % 4 === 0) item.halfWidth = true;
      if (index % 5 === 0 && index !== 0)
        mutatedArray = [...mutatedArray, dummy];
      mutatedArray = [...mutatedArray, item];
    });
    setMutatedData(mutatedArray);
  }, [data]);

  React.useEffect(() => {
    if (addAction) setAddPostPopUp(addAction.addAction);
  }, [addAction]);

  // SERVERS ---------------------------------------------------------
  const ServePeopleIcon = () => {
    return (
      <View
        style={{
          ...styles.imgIconBackground,
          backgroundColor: Colors.primary,
        }}>
        <People width={10} height={10} fill={Colors.white} />
      </View>
    );
  };

  const ServePlanetIcon = () => {
    return (
      <View
        style={{
          ...styles.imgIconBackground,
          backgroundColor: Colors.planet,
        }}>
        <Planet width={10} height={10} fill={Colors.white} />
      </View>
    );
  };

  const ServeActions = ({navigation}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <CustomButton
          style={{
            backgroundColor: Colors.transparent,
          }}
          title="All"
          titleStyling={styles.actionTitle}
          onPress={() => setFilter('')}
        />
        <CustomButton
          style={{
            backgroundColor: Colors.transparent,
          }}
          title="People"
          titleStyling={styles.actionTitle}
          onPress={() => setFilter('people')}
        />
        <CustomButton
          style={{
            backgroundColor: Colors.transparent,
          }}
          title="Planet"
          titleStyling={styles.actionTitle}
          onPress={() => setFilter('planet')}
        />
        <CustomButton
          style={{
            backgroundColor: Colors.transparent,
          }}
          title="Near Me"
          titleStyling={styles.actionTitle}
          onPress={() => setFilter('')}
        />
      </View>
    );
  };

  let countWidth = 0;
  let countHeight = 0;
  const dataLength = mutatedData.length;
  const renderFlatListItem = ({item, index}) => {
    const {url, dummy} = item;

    const handlePictureWidth = () => {
      let picWidth = width / 3;

      if (countWidth === 3 || countWidth === 4) picWidth = width / 2;
      if (dummy) picWidth = 100;
      countWidth += 1;
      if (countWidth === 6 || index === dataLength - 1) countWidth = 0;
      return picWidth;
    };

    const handlePictureHeight = () => {
      let picHeight = 200;

      if (countHeight === 3 || countHeight === 4) picHeight = 300;
      if (dummy) picHeight = 0;
      countHeight += 1;
      if (countHeight === 6 || index === dataLength - 1) countHeight = 0;

      return picHeight;
    };

    return (
      <TouchableOpacity
        style={{flexDirection: 'row'}}
        onPress={() =>
          navigation.navigate('ProjectStack', {
            screen: 'Post',
            params: {item: item},
          })
        }>
        <View style={styles.imageContainer}>
          <ImageBackground
            source={url}
            style={{
              resizeMode: 'cover',
              height: handlePictureHeight(),
              width: handlePictureWidth(),
              marginLeft: index % 3 !== 0 ? 2 : 0,
              marginBottom: 2,
            }}>
            <LinearGradient
              colors={[Colors.gradientFilterTop, Colors.gradientFilterBottom]}
              start={{x: 0.4, y: 0.4}}
              style={{flex: 1}}>
              <View
                style={{
                  zIndex: 1,
                  position: 'absolute',
                  width: '100%',
                  bottom: 10,
                  paddingHorizontal: 10,
                }}>
                <Text style={styles.textOverlay}>{item.title}</Text>
                <View
                  style={{
                    paddingVertical: 5,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.textOverlay}>{item.time}</Text>
                  {item.category === 'people' && <ServePeopleIcon />}
                  {item.category !== 'people' && <ServePlanetIcon />}
                </View>
              </View>
            </LinearGradient>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    );
  };

  // RETURN ---------------------------------------------------------
  return (
    <ScreenWrapper>
      {addPostPopUp && <AddPostAction navigation={navigation} />}
      <View style={styles.wrapper}>
        <View style={styles.donateContainer}>
          <DonateActions navigation={navigation} projects />
        </View>
        <View style={styles.actionContainer}>
          <ServeActions navigation={navigation} />
        </View>

        <ScrollView showsVerticalScrollIndicator={false} horizontal={false}>
          <View style={{marginBottom: 60}}>
            <FlatList
              keyExtractor={(_, index) => String(index)}
              showsVerticalScrollIndicator={false}
              numColumns={3}
              data={mutatedData}
              renderItem={renderFlatListItem}
              nestedScrollEnabled={true}
            />
          </View>
        </ScrollView>
      </View>
    </ScreenWrapper>
  );
};

export default Projects;
