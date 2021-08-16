import {errorHandler, setError} from '../api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const tempDataStorage = async ({
  dispatchAuth,
  dispatchApi,
  tempData,
}) => {
  try {
    console.log('tempData triggered'); //debug
    console.log('tempData: ', tempData);
    //0. clear api errors
    setError({dispatchApi, errorMessage: null});
    //1. clear tempData
    setTempData({dispatchAuth, tempData: null});
    AsyncStorage.removeItem('tempData');

    //2. add tempData to context and async storage
    console.log(`tempData: `, tempData); //debug
    setTempData({dispatchAuth, tempData});
    await AsyncStorage.setItem('tempData', JSON.stringify(tempData));
  } catch (err) {
    console.log('err: ', JSON.stringify(err)); //debug
    errorHandler({dispatchApi, errorObject: err});
  }
};

export const addPostAction = async ({dispatchAuth, dispatchApi, addAction}) => {
  try {
    console.log('addPostAction triggered'); //debug
    console.log('addAction: ', addAction);
    //0. clear api errors
    setError({dispatchApi, errorMessage: null});
    //1. clear tempData
    setAddPostAction({dispatchAuth, addAction: null});
    AsyncStorage.removeItem('addAction');

    //2. add addAction to context and async storage
    console.log(`addAction: `, addAction); //debug
    setAddPostAction({dispatchAuth, addAction});
    await AsyncStorage.setItem('addAction: ', JSON.stringify(addAction));
  } catch (err) {
    console.log('err: ', JSON.stringify(err)); //debug
    errorHandler({dispatchApi, errorObject: err});
  }
};

// SET CONTEXT ---------------------------------------------------------
export const setTempData = async ({dispatchAuth, tempData}) => {
  console.log('setTempData triggered'); //debug
  dispatchAuth({type: 'SET_TEMP_DATA', payload: tempData});
};

export const setAddPostAction = async ({dispatchAuth, addAction}) => {
  console.log('setAddPostAction triggered'); //debug
  dispatchAuth({type: 'SET_ADD_ACTION', payload: addAction});
};

export const setLoading = ({dispatchAuth, loadingBoolean}) => {
  dispatchAuth({type: 'SET_LOADING', payload: loadingBoolean});
};
