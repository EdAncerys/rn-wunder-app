import client from '../../apollo/client';
import {QUERY_GET_POSTS} from '../../apollo/queries/posts';

import {errorHandler, setError} from '../api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getPosts = async ({dispatchAuth, dispatchApi, jwt}) => {
  try {
    console.log('getPosts triggered'); //debug
    //0. clear api errors
    setError({dispatchApi, errorMessage: null});

    //1. get all posts and add to context and async storage
    const posts = await getPostsAction({jwt});
    console.log(`posts data length `, posts.length); //debug
    setPostsAction({dispatchAuth, posts});
    await AsyncStorage.setItem('user', JSON.stringify(posts));
  } catch (err) {
    console.log('err', JSON.stringify(err)); //debug
    errorHandler({dispatchApi, errorObject: err});
  }
};

// FETCH DATA GRAPH QL QUERY ---------------------------------------------------------
export const getPostsAction = async ({jwt}) => {
  console.log('getPostsAction triggered'); //debug
  const getUserResponse = await client.query({
    query: QUERY_GET_POSTS,
    context: {
      headers: {
        authorization: 'Bearer ' + jwt,
      },
    },
  });
  return getUserResponse.data.posts;
};

// SET CONTEXT ---------------------------------------------------------
export const setPostsAction = async ({dispatchAuth, posts}) => {
  console.log('setPostsAction triggered'); //debug
  dispatchAuth({type: 'SET_POSTS', payload: posts});
};
