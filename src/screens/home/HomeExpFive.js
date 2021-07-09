import React from 'react';
import {Image} from 'react-native';

import Background from '../../assets/images/home/home-exp-five-background.png';
import ProfileIcon from '../../assets/icons/profile-tesco.png';
import HomeScreen from '../../components/HomeScreen';

const HomeExpFive = ({navigation}) => {
  return (
    <HomeScreen
      background={Background}
      profileIcon={<Image source={ProfileIcon} />}
      profileName="@friendsoftheearth"
      verified={true}
      title="Community Food Connection Scheme"
      post="We’re working with FareShare, a leading food redistribution c"
      postTag="planet"
      getInvolved={true}
    />
  );
};

export default HomeExpFive;
