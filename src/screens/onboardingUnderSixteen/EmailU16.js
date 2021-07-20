import * as React from 'react';

import Email from '../onboardingOverSixteen/Email';

const EmailU16 = ({navigation}) => {
  return (
    <Email
      navigation={navigation}
      backPath={'Yay'}
      continuePath={'VerifyU16Email'}
    />
  );
};

export default EmailU16;
