import React from 'react';

import Background from '../../assets/images/home/home-exp-two-background.png';
import ProfileIcon from '../../assets/icons/content/profile-ormand.png';
import HomeScreen from '../../components/HomeScreen';

const HomeExpThree = () => {
  return (
    <HomeScreen
      background={Background}
      profileIcon={ProfileIcon}
      profileName="@greatormondst"
      verified={true}
      title="The difference we make, together"
      post="Helps us to transform the lives of seriously ill children. Every d"
      navigateActions={true}
    />
  );
};

export default HomeExpThree;
