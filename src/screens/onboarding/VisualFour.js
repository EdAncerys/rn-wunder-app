import * as React from 'react';

import VisualScreenComponent from '../../components/VisualScreenComponent';
import Background from '../../assets/images/onboardingOverSixteen/visual-four-background.png';

const VisualFour = ({navigation}) => {
  return (
    <VisualScreenComponent
      background={Background}
      title="Invite your friends to join the challenge"
      navigation={navigation}
    />
  );
};

export default VisualFour;
