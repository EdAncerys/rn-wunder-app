import React from 'react';

import Background from '../../assets/images/home/home-exp-six-background.png';
import ProfileIcon from '../../assets/icons/content/profile-sam.png';
import HomeScreen from '../../components/HomeScreen';

const HomeExpSix = () => {
  return (
    <HomeScreen
      background={Background}
      profileIcon={ProfileIcon}
      profileName="@sam_williams"
      title="Morning Central Park Run"
      post="Every Wednesday me and the group go for a morning run through"
      postTag="planet"
    />
  );
};

export default HomeExpSix;
