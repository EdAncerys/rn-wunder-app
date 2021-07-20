import * as React from 'react';

import VerifyMobile from '../onboardingOverSixteen/VerifyMobile';

const VerifyOTPMobile = ({navigation}) => {
  return (
    <VerifyMobile
      navigation={navigation}
      backPath={'MobileU16'}
      continuePath={'UsernameU16'}
    />
  );
};

export default VerifyOTPMobile;
