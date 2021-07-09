import React from 'react';
import {Image} from 'react-native';

import Background from '../../assets/images/home/home-exp-four-background.png';
import ProfileIcon from '../../assets/icons/profile-vic.png';
import HomeScreen from '../../components/HomeScreen';

const HomeExpFour = () => {
  return (
    <HomeScreen
      background={Background}
      profileIcon={<Image source={ProfileIcon} />}
      profileName="@vic_azerrenca"
      title="Peaceful Walk this Morning"
      post="The Pembury Children’s Community is a partnership led by the Co"
      postTag="planet"
    />
  );
};

export default HomeExpFour;
