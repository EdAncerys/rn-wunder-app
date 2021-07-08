import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const styles = StyleSheet.create({
  container: {},
});

const Home = ({props}) => {
  // CAROUSEL SCREENS --------------------------------------------------
  const screens = () => {
    carouselItems: [
      {
        title: 'Item 1',
        text: 'Text 1',
      },
      {
        title: 'Item 2',
        text: 'Text 2',
      },
      {
        title: 'Item 3',
        text: 'Text 3',
      },
      {
        title: 'Item 4',
        text: 'Text 4',
      },
      {
        title: 'Item 5',
        text: 'Text 5',
      },
    ];
  };

  // SERVERS ---------------------------------------------------------
  const serveScreen = (screens, index) => {
    return (
      <View
        style={{
          backgroundColor: 'floralwhite',
          borderRadius: 5,
          height: 650,
          padding: 50,
          marginLeft: 25,
          marginRight: 25,
        }}>
        {/* <Text style={{fontSize: 30}}>{item.title}</Text> */}
      </View>
    );
  };

  // RETURN ---------------------------------------------------------
  return (
    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
      {/* <Carousel
        layout={'default'}
        ref={ref => (this.carousel = ref)}
        data={serveScreen}
        sliderWidth={300}
        itemWidth={300}
        renderItem={this._renderItem}
        onSnapToItem={index => this.setState({activeIndex: index})}
      /> */}
    </View>
  );
};

export default Home;
