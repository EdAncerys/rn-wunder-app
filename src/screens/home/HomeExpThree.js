import React from 'react';
import {Image} from 'react-native';

import Background from '../../assets/images/home/home-exp-three-background.png';
import ProfileIcon from '../../assets/icons/profile-friends.png';
import HomeScreen from '../../components/HomeScreen';

const HomeExpThree = () => {
  return (
    <HomeScreen
      background={Background}
      profileIcon={<Image source={ProfileIcon} />}
      profileName="@friendsoftheearth"
      verified={true}
      title="Pembury Children’s Community"
      post="The Pembury Children’s Community is a partnership led by the Co"
      postTag="planet"
      getInvolved={true}
    />
  );
};

export default HomeExpThree;
