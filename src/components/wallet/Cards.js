import * as React from 'react';
import {
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import Colors from '../../config/colors';
import Fonts from '../../config/fonts';
import CustomButton from '../CustomButton';
import {VIRTUAL_CARDS, PHYSICAL_CARDS} from '../../config/data';

const Cards = ({}) => {
  const [virtualCards, setVirtualCards] = React.useState(VIRTUAL_CARDS);
  const [physicalCards, setPhysicalCards] = React.useState(PHYSICAL_CARDS);

  // SERVERS ---------------------------------------------------------
  const ServeVirtualCards = ({}) => (
    <View style={{alignItems: 'flex-start'}}>
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: Colors.lightSilver,
          }}>
          <Text
            style={{
              ...Fonts.N_400_10,
              color: Colors.lightBlack,
            }}>
            Virtual Cards
          </Text>
        </View>
      </View>
      <FlatList
        keyExtractor={(_, index) => String(index)}
        showsVerticalScrollIndicator={false}
        data={virtualCards}
        renderItem={renderFlatList}
        nestedScrollEnabled={true}
      />
    </View>
  );

  const ServePhysicalCards = ({}) => (
    <View style={{alignItems: 'flex-start'}}>
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: Colors.lightSilver,
          }}>
          <Text
            style={{
              ...Fonts.N_400_10,
              color: Colors.lightBlack,
            }}>
            Virtual Cards
          </Text>
        </View>
      </View>
      <FlatList
        keyExtractor={(_, index) => String(index)}
        showsVerticalScrollIndicator={false}
        data={physicalCards}
        renderItem={renderFlatList}
        nestedScrollEnabled={true}
      />
    </View>
  );

  const renderFlatList = ({dataProfile, index}) => {
    const {url, title} = dataProfile;
    return (
      <TouchableOpacity
        style={{flexDirection: 'row'}}
        onPress={() => alert('card')}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            marginVertical: 5,
          }}>
          <ImageBackground
            source={url}
            style={{
              resizeMode: 'cover',
              width: 64,
              height: 40,
              borderRadius: 5,
              marginVertical: 5,
              overflow: 'hidden',
            }}
          />
          <View
            style={{
              marginHorizontal: 5,
            }}>
            <Text
              style={{
                ...Fonts.N_400_14,
                textAlign: 'center',
                color: Colors.lightBlack,
              }}>
              {title}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  // RETURN ---------------------------------------------------------
  return (
    <View style={{height: '100%'}}>
      <View style={{alignItems: 'center'}}>
        <View style={{marginTop: 30}}>
          <CustomButton
            title="Add Money"
            style={{paddingHorizontal: 30}}
            onPress={() => alert('Add Money')}
          />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} horizontal={false}>
        <View style={{marginHorizontal: '10%', marginVertical: '5%'}}>
          <View style={{marginVertical: '5%'}}>
            <ServeVirtualCards />
          </View>
          <View style={{marginVertical: '5%'}}>
            <ServePhysicalCards />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Cards;
