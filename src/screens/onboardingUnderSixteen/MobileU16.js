import * as React from 'react';

import Mobile from '../onboardingOverSixteen/Mobile';

const MobileU16 = ({navigation}) => {
  return (
    <Mobile
      navigation={navigation}
      backPath={'Yay'}
      continuePath={'VerifyU16Mobile'}
    />
  );
};

export default MobileU16;
