import * as React from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useAuthState, useAuthDispatch, logIn} from '../context/auth';
import {useApiDispatch} from '../context/api';

const handleResponse = (response, setImage) => {
  console.log(response);
  const responseObj = response.assets || null;
  if (!responseObj) return;
  const image = responseObj[0];
  setImage(image);
};

export const openGallery = setImage => {
  launchImageLibrary(
    {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 300,
      quality: 0.7,
      includeBase64: false,
    },
    response => {
      handleResponse(response, setImage);
    },
  );
};

export const openCamera = setImage => {
  launchCamera(
    {saveToPhotos: true, mediaType: 'photo', includeBase64: false},
    response => {
      handleResponse(response, setImage);
    },
  );
};

export const openCameraPopUp = setImage => {
  launchCamera(
    {saveToPhotos: true, mediaType: 'photo', includeBase64: false},
    response => {
      handleResponse(response, setImage);
    },
  );
};
