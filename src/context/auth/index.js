import {AuthProvider, useAuthDispatch, useAuthState} from './context';
import {logIn, logOut, signUp, storageCheck, updateUser} from './actions';
import {getPostsAction} from './postActions';
import {tempDataStorage, addPostAction} from './appActions';

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
