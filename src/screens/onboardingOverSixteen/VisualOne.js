import React from 'react';

import Background from '../../assets/images/onboardingOverSixteen/visual-one-background.png';
import VisualScreenComponent from '../../components/VisualScreenComponent';

const VisualOne = ({ navigation }) => {
  return (
    <VisualScreenComponent
      background={Background}
      rowOneText="Discover exiting news"
      rowTwoText="positive content"
      navigation={navigation}
    />
  );
};

export default VisualOne;
