import * as React from 'react';

import Background from '../../assets/images/home/home-exp-one-background.png';
import ProfileIcon from '../../assets/icons/content/profile-wunder.png';
import HomeScreen from '../../components/HomeScreen';

const HomeExpOne = () => {
  return (
    <HomeScreen
      background={Background}
      profileIcon={ProfileIcon}
      profileName="@wunder"
      verified={true}
      title="Healthy Eating"
      post="It’s recommended that you eat at least 5 portions of a variety"
      postTag="planet"
      donateActions={true}
    />
  );
};

export default HomeExpOne;
