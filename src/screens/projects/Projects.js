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
  LinearGradient,
} from 'react-native';
import {PROJECTS_DATA} from '../../config/data';

import ScreenWrapper from '../../components/ScreenWrapper';
import Colors from '../../config/colors';
import Fonts from '../../config/fonts';
import CustomButton from '../../components/CustomButton';
import DonateActions from '../../components/DonateActions';

import Background from '../../assets/images/profile/profile-background.png';
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
});

const Projects = ({navigation}) => {
  const [data, setData] = React.useState(PROJECTS_DATA);
  const [mutatedData, setMutatedData] = React.useState(PROJECTS_DATA);
  const everyNth = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);
  console.log(data.length);
  console.log(mutatedData.length);

  // HANDLERS ---------------------------------------------------------

  React.useEffect(() => {
    let mutatedArray = [];
    data.map(async (item, index) => {
      let dummy = {
        url: Background,
        dummy: true,
      };

      if (index % 5 === 0 && index !== 0)
        mutatedArray = [...mutatedArray, dummy];
      mutatedArray = [...mutatedArray, item];
    });
    setMutatedData(mutatedArray);
  }, [data]);

  // SERVERS ---------------------------------------------------------
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
          // onPress={() => navigation.navigate('AppStack', {screen: 'Profile'})}
        />
        <CustomButton
          style={{
            backgroundColor: Colors.transparent,
          }}
          title="People"
          titleStyling={styles.actionTitle}
          // onPress={() => navigation.navigate('AppStack', {screen: 'Profile'})}
        />
        <CustomButton
          style={{
            backgroundColor: Colors.transparent,
          }}
          title="Planet"
          titleStyling={styles.actionTitle}
          // onPress={() => navigation.navigate('AppStack', {screen: 'Profile'})}
        />
        <CustomButton
          style={{
            backgroundColor: Colors.transparent,
          }}
          title="Near Me"
          titleStyling={styles.actionTitle}
          // onPress={() => navigation.navigate('AppStack', {screen: 'Profile'})}
        />
      </View>
    );
  };

  const renderFlatListItem = ({item, index}) => {
    const {url, halfWidth, dummy} = item;
    const everyFourth = everyNth(mutatedData, 4);
    const everyFifth = everyNth(mutatedData, 5);
    console.log(everyFifth.length);

    const handlePictureWidth = () => {
      let picWidth = width / 3;

      // if (everyFourth.includes(item) && index % 3 === 0) picWidth = 20;
      // if (everyFifth.includes(item) && index % 4 === 0) picWidth = 20;

      // if (index % 4 === 0 && index !== 0) picWidth = width / 12;
      // if (dummy) picWidth = 20;

      return picWidth;
    };

    return (
      <TouchableOpacity
        style={{flexDirection: 'row'}}
        onPress={() => alert(index)}>
        <Image
          style={{
            resizeMode: 'cover',
            height: height / 3,
            width: handlePictureWidth(),
            marginLeft: index % 3 !== 0 ? 2 : 0,
            marginBottom: 2,
          }}
          source={url}
        />
      </TouchableOpacity>
    );
  };

  // RETURN ---------------------------------------------------------
  return (
    <ScreenWrapper>
      <View style={styles.wrapper}>
        <View style={styles.donateContainer}>
          <DonateActions navigation={navigation} projects />
        </View>
        <View style={styles.actionContainer}>
          <ServeActions navigation={navigation} />
        </View>

        <ScrollView showsVerticalScrollIndicator={false} horizontal={false}>
          <View style={{marginBottom: 45}}>
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
