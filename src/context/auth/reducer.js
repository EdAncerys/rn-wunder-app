export const emptyUser = {
  id: '',
  username: '',
  email: '',
  role: {
    type: 'public', // public || authenticated
  },
};

export const initialState = {
  jwt: null,
  user: emptyUser,
  tempData: null,
  addAction: null,
  posts: null,
  allUsers: null,
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return {...state, jwt: action.payload};
    case 'SET_ADD_ACTION':
      return {...state, addAction: {...action.payload}};
    case 'SET_USER':
      return {...state, user: {...action.payload}};
    case 'SET_ALL_USERS':
      return {...state, allUsers: {...action.payload}};
    case 'SET_TEMP_DATA':
      return {...state, tempData: {...action.payload}};
    case 'SET_POSTS':
      return {...state, posts: action.payload};
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
