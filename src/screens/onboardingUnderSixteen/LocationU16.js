import * as React from 'react';

import Location from '../onboardingOverSixteen/Location';

const LocationU16 = ({navigation}) => {
  return (
    <Location
      navigation={navigation}
      backPath={'UsernameU16'}
      continuePath={'AccountCreated'}
    />
  );
};

export default LocationU16;
