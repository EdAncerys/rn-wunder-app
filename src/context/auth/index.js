import {AuthProvider, useAuthDispatch, useAuthState} from './context';
import {
  logIn,
  logOut,
  signUp,
  storageCheck,
  updateUser,
  getAllUsers,
} from './actions';
import {getPosts, createNewPost} from './postActions';
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
  getPosts,
  createNewPost,
  getAllUsers,
};
