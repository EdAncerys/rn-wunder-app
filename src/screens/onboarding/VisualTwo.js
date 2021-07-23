import * as React from 'react';

import VisualScreenComponent from '../../components/VisualScreenComponent';
import Background from '../../assets/images/onboardingOverSixteen/visual-two-background.png';

const VisualTwo = ({navigation}) => {
  return (
    <VisualScreenComponent
      background={Background}
      title="Challenge yourself to do more for society"
      navigation={navigation}
    />
  );
};

export default VisualTwo;
