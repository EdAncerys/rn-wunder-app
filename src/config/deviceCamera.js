import * as React from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const handleResponse = (response, setImage) => {
  console.log(response);
  const responseObj = response.assets || null;
  if (!responseObj) return;
  const image = responseObj[0];
  setImage(image);
};

const IMG_HEIGHT = 926;
const IMG_WIDTH = IMG_HEIGHT / 2;
const IMAGE_SETTINGS = {
  saveToPhotos: true,
  mediaType: 'photo',
  maxWidth: IMG_WIDTH,
  maxHeight: IMG_HEIGHT,
  quality: 0.7,
  includeBase64: false,
};

export const openGallery = setImage => {
  launchImageLibrary(IMAGE_SETTINGS, response => {
    handleResponse(response, setImage);
  });
};

export const openCamera = setImage => {
  launchCamera(IMAGE_SETTINGS, response => {
    handleResponse(response, setImage);
  });
};
