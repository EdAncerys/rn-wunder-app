import * as React from 'react';

import VisualScreenComponent from '../../components/VisualScreenComponent';
import Background from '../../assets/images/onboardingOverSixteen/visual-three-background.png';

const VisualThree = ({navigation}) => {
  return (
    <VisualScreenComponent
      background={Background}
      rowOneText="Join events promoting"
      rowTwoText="good initiatives"
      navigation={navigation}
    />
  );
};

export default VisualThree;
