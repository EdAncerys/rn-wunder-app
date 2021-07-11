import React from 'react';

import Background from '../../assets/images/home/home-exp-seven-background.png';
import ProfileIcon from '../../assets/icons/profile-milli.png';
import HomeScreen from '../../components/HomeScreen';

const HomeExpSeven = () => {
  return (
    <HomeScreen
      background={Background}
      profileIcon={ProfileIcon}
      profileName="@millissaharris10"
      title="Cooking for the homeless in my n..."
      post="Today I will be cooking the homeless people in my area in an att"
    />
  );
};

export default HomeExpSeven;
