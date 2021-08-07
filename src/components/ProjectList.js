import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  FlatList,
  ScrollView,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Colors from '../config/colors';
import Fonts from '../config/fonts';
import {Planet, People} from '../config/icons';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  imgIconBackground: {
    width: 16,
    height: 16,
    borderRadius: 16 / 2,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textOverlay: {
    ...Fonts.N_400_10,
    color: Colors.white,
  },
});

const ProjectList = ({navigation, projects}) => {
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

  let countItemWidth = 0;
  let countItemHeight = 0;
  const renderFlatListItem = ({item, index}) => {
    const {url, title, category, time, dummy} = item;
    const projectsArrayLength = projects.length;

    const handlePictureWidth = () => {
      let picWidth = width / 3;

      if (dummy) picWidth = 0;
      if (countItemWidth === 3 || countItemWidth === 4) picWidth = width / 2;

      if (projectsArrayLength <= 2) picWidth = width / 2;
      if (projectsArrayLength % 3 === 1 && index === projectsArrayLength - 1)
        picWidth = width;

      if (projectsArrayLength % 5 === 3 && index === projectsArrayLength - 2)
        picWidth = width / 2;
      if (projectsArrayLength % 5 === 3 && index === projectsArrayLength - 1)
        picWidth = width / 2;

      countItemWidth += 1;
      if (countItemWidth === 6 || index === projectsArrayLength - 1)
        countItemWidth = 0;
      return picWidth;
    };

    const handlePictureHeight = () => {
      let picHeight = height / 4;

      if (countItemHeight === 3 || countItemHeight === 4)
        picHeight = height / 3;
      if (dummy) picHeight = 0;
      countItemHeight += 1;
      if (countItemHeight === 6 || index === projectsArrayLength - 1)
        countItemHeight = 0;

      return picHeight;
    };

    return (
      <TouchableOpacity
        style={{flexDirection: 'row'}}
        onPress={() =>
          navigation.navigate('ProjectStack', {
            screen: 'Post',
            params: {profileDataInfo: item},
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
                <Text style={styles.textOverlay}>{title}</Text>
                <View
                  style={{
                    paddingVertical: 5,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.textOverlay}>{time}</Text>
                  {category === 'people' && <ServePeopleIcon />}
                  {category !== 'people' && <ServePlanetIcon />}
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
    <ScrollView showsVerticalScrollIndicator={false} horizontal={false}>
      <FlatList
        keyExtractor={(_, index) => String(index)}
        showsVerticalScrollIndicator={false}
        numColumns={3}
        data={projects}
        renderItem={renderFlatListItem}
        nestedScrollEnabled={true}
      />
    </ScrollView>
  );
};

export default ProjectList;
