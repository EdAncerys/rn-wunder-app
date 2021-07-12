import React from 'react';

import Background from '../../assets/images/home/home-exp-eight-background.png';
import ProfileIcon from '../../assets/icons/content/profile-nora.png';
import HomeScreen from '../../components/HomeScreen';

const HomeExpEight = () => {
  return (
    <HomeScreen
      background={Background}
      profileIcon={ProfileIcon}
      profileName="@nora_osborn"
      title="Self care day"
      post="Self care day with this new charcoal mask I received this morning"
    />
  );
};

export default HomeExpEight;
