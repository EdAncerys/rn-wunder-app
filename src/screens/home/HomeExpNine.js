import React from 'react';
import {Image} from 'react-native';

import Background from '../../assets/images/home/home-exp-nine-background.png';
import ProfileIcon from '../../assets/icons/profile-nora.png';
import HomeScreen from '../../components/HomeScreen';

const HomeExpNine = () => {
  return (
    <HomeScreen
      background={Background}
      profileIcon={<Image source={ProfileIcon} />}
      profileName="@nora_osborn"
      title="Working On Body Positivity"
      post="Working on myself and helping others with body positivity"
    />
  );
};

export default HomeExpNine;