import client from '../../apollo/client';
import {QUERY_GET_POSTS} from '../../apollo/queries/auth';

import {errorHandler, setError} from '../api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getPostsAction = async ({dispatchAuth, dispatchApi}) => {
  try {
    console.log('posts triggered'); //debug
    //0. clear api errors
    setError({dispatchApi, errorMessage: null});

    //1. get all posts and add to context and async storage
    const posts = await getPosts({});
    console.log(`posts`, posts); //debug
    setPostsAction({dispatchAuth, posts});
    // await AsyncStorage.setItem('user', JSON.stringify(posts));
  } catch (err) {
    console.log('err', JSON.stringify(err)); //debug
    errorHandler({dispatchApi, errorObject: err});
  }
};

// FETCH DATA GRAPH QL QUERY ---------------------------------------------------------
export const getPosts = async ({jwt}) => {
  console.log('getPosts triggered'); //debug
  const getUserResponse = await client.query({
    query: QUERY_GET_POSTS,
    // context: {
    //   headers: {
    //     authorization: 'Bearer ' + jwt,
    //   },
    // },
  });
  return getUserResponse.data.user;
};

// SET CONTEXT ---------------------------------------------------------
export const setPostsAction = async ({dispatchAuth, posts}) => {
  console.log('setPostsAction triggered'); //debug
  dispatchAuth({type: 'SET_POSTS', payload: posts});
};
