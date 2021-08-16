export const initialState = {
  error: null,
  loading: false,
};

export const ApiReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ERROR':
      return {...state, error: action.payload};
    case 'SET_LOADING':
      return {...state, loading: action.payload};
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
