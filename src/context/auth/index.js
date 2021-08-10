import {AuthProvider, useAuthDispatch, useAuthState} from './context';
import {
  logIn,
  logOut,
  signUp,
  tempDataStorage,
  addPostAction,
  storageCheck,
  updateUser,
} from './actions';
import {getPostsAction} from './postActions';

export {
  AuthProvider,
  useAuthDispatch,
  useAuthState,
  logIn,
  logOut,
  signUp,
  tempDataStorage,
  addPostAction,
  storageCheck,
  updateUser,
  getPostsAction,
};
