import * as React from 'react';

import UploadPictureOfYourself from './UploadPictureOfYourself';

const UploadPictureOfYourselfUP = ({navigation}) => {
  return (
    <UploadPictureOfYourself
      navigation={navigation}
      backPath="UploadPassport"
    />
  );
};

export default UploadPictureOfYourselfUP;
