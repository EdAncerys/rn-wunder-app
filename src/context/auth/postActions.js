import {client, uploadClient} from '../../apollo/client';

import {ReactNativeFile} from 'apollo-upload-client';
import * as mime from 'react-native-mime-types';

import {QUERY_GET_POSTS} from '../../apollo/queries/posts';
import {MUTATION_CREATE_NEW_POST, ADD_FILE} from '../../apollo/mutations/posts';

import {errorHandler, setError, setLoading} from '../api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getPosts = async ({dispatchAuth, dispatchApi, jwt}) => {
  try {
    console.log('getPosts triggered'); //debug
    //0. set loading
    setLoading(dispatchApi, true);

    //1. clear api errors
    setError({dispatchApi, errorMessage: null});

    //2. get all posts and add to context and async storage
    const posts = await getPostsAction({jwt});
    console.log(`posts data length `, posts.length); //debug
    setPostsAction({dispatchAuth, posts});
    await AsyncStorage.setItem('user', JSON.stringify(posts));

    //3. set loading
    setLoading(dispatchApi, false);
  } catch (err) {
    console.log('err', JSON.stringify(err)); //debug
    errorHandler({dispatchApi, errorObject: err});
  }
};

export const createNewPost = async ({dispatchApi, createNewPostData, jwt}) => {
  try {
    console.log('createNewPost triggered'); //debug
    //0. clear api errors
    setError({dispatchApi, errorMessage: null});
    //1. add file
    const {uri} = createNewPostData;
    const newFile = await addFile({uri, jwt});
    const {id} = newFile;
    console.log(`id `, id); //debug

    //2. create new post
    createNewPostData.picture = id;
    console.log(createNewPostData);
    const newPost = await createNewPostAction({createNewPostData, jwt});
    console.log(`newPost`, newPost); //debug
  } catch (err) {
    console.log('err', JSON.stringify(err)); //debug
    errorHandler({dispatchApi, errorObject: err});
  }
};

// GRAPH QL QUERY ---------------------------------------------------------
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

export const createNewPostAction = async ({createNewPostData, jwt}) => {
  console.log('createNewPostAction triggered'); //debug
  const createNewPostResponse = await client.mutate({
    mutation: MUTATION_CREATE_NEW_POST,
    variables: createNewPostData,
    context: {
      headers: {
        authorization: 'Bearer ' + jwt,
      },
    },
  });
  return createNewPostResponse.data.createPost.post;
};

const generateRNFile = (uri, name) => {
  return uri
    ? new ReactNativeFile({
        uri,
        type: mime.lookup(uri) || 'image',
        name,
      })
    : null;
};

export const addFile = async ({uri, jwt}) => {
  try {
    console.log('addFile triggered'); //debug
    const picture = generateRNFile(uri, `picture-${Date.now()}`);
    const file = {file: picture};

    const addFileResponse = await uploadClient.mutate({
      mutation: ADD_FILE,
      variables: file,
      context: {
        headers: {
          authorization: 'Bearer ' + jwt,
        },
      },
    });
    return addFileResponse.data.upload;
  } catch (err) {
    console.log('err', JSON.stringify(err)); //debug
  }
};

// SET CONTEXT ---------------------------------------------------------
export const setPostsAction = async ({dispatchAuth, posts}) => {
  console.log('setPostsAction triggered'); //debug
  dispatchAuth({type: 'SET_POSTS', payload: posts});
};
