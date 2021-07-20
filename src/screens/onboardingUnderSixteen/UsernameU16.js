import * as React from 'react';

import Username from '../onboardingOverSixteen/Username';

const UsernameU16 = ({navigation}) => {
  return (
    <Username
      navigation={navigation}
      backPath={'EmailU16'}
      continuePath={'LocationU16'}
    />
  );
};

export default UsernameU16;
