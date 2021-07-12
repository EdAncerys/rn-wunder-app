import * as React from 'react';

import Background from '../../assets/images/home/home-exp-five-background.png';
import ProfileIcon from '../../assets/icons/content/profile-tesco.png';
import HomeScreen from '../../components/HomeScreen';

const HomeExpFive = () => {
  return (
    <HomeScreen
      background={Background}
      profileIcon={ProfileIcon}
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
