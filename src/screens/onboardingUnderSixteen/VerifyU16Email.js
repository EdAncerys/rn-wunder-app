import * as React from 'react';

import VerifyEmail from '../onboardingOverSixteen/VerifyEmail';

const VerifyU16Email = ({navigation}) => {
  return (
    <VerifyEmail
      navigation={navigation}
      backPath={'EmailU16'}
      continuePath={'UsernameU16'}
    />
  );
};

export default VerifyU16Email;
