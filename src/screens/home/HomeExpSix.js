import React from 'react';
import {Image} from 'react-native';

import Background from '../../assets/images/home/home-exp-six-background.png';
import ProfileIcon from '../../assets/icons/profile-sam.png';
import HomeScreen from '../../components/HomeScreen';

const HomeExpSix = ({navigation}) => {
  return (
    <HomeScreen
      background={Background}
      profileIcon={<Image source={ProfileIcon} />}
      profileName="@sam_williams"
      title="Morning Central Park Run"
      post="Every Wednesday me and the group go for a morning run through"
      postTag="planet"
    />
  );
};

export default HomeExpSix;
