import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import ScreenWrapper from '../../components/ScreenWrapper';
import Colors from '../../config/colors';
import Fonts from '../../config/fonts';
import CustomButton from '../../components/CustomButton';

import {INTEREST_DATA} from '../../config/data';
const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginHorizontal: '5%',
  },
  contentContainer: {
    alignItems: 'center',
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '10%',
    marginVertical: 20,
  },
  title: {
    ...Fonts.N_700_16,
    color: Colors.lightBlack,
    textAlign: 'center',
  },
  msg: {
    ...Fonts.N_700_12,
    color: Colors.white,
    marginVertical: 5,
    textAlign: 'center',
  },
});

const AccountCreated = ({navigation}) => {
  const [interestData, setInterestData] = React.useState(INTEREST_DATA);
  const [selected, setSelected] = React.useState([]);
  let filterFill = [Colors.gradientFilterTop, Colors.gradientFilterBottom];

  const renderListItem = ({item, index}) => {
    console.log(selected);
    if (selected.includes(index))
      filterFill = [Colors.matFilter, Colors.matFilter];
    const {url} = item;

    const handleImageSelect = () => {
      if (selected.includes(index)) {
        const data = selected.filter(item => item !== index);
        setSelected(data);
        return;
      }
      setSelected([...selected, index]);
      console.log(index);
    };

    return (
      <TouchableOpacity onPress={handleImageSelect}>
        <ImageBackground
          source={item.url}
          style={{
            height: height / 5.5,
            width: width / 2.5,
            borderRadius: 20,
            marginLeft: 10,
            marginBottom: 10,
            resizeMode: 'cover',
            overflow: 'hidden',
          }}>
          <LinearGradient
            colors={filterFill}
            start={{x: 0.4, y: 0.4}}
            style={{flex: 1}}>
            <View
              style={{
                position: 'absolute',
                alignItems: 'center',
                justifyContent: 'center',
                width: width / 2 - 40,
                height: 200,
              }}>
              <Image
                source={{uri: item.profileImageUrl}}
                style={{height: 40, width: 40}}
              />
              <View>
                <Text style={styles.msg}>{item.interest}</Text>
              </View>
            </View>
          </LinearGradient>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <ScreenWrapper filter={Colors.white}>
      <View style={styles.wrapper}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>What are you interested in?</Text>
        </View>
        <FlatList
          data={interestData}
          renderItem={renderListItem}
          numColumns={2}
        />
        <View style={{alignItems: 'center', marginTop: -50}}>
          <CustomButton
            iconLeft="ArrowRight"
            iconWidth={24}
            iconHeight={24}
            iconFill={Colors.white}
            style={{paddingVertical: 10, paddingHorizontal: 24}}
            onPress={() =>
              navigation.navigate('AppStack', {screen: 'HomeStack'})
            }
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default AccountCreated;
