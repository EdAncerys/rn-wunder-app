import * as React from 'react';
import {useContext, createContext, useReducer} from 'react';
import {initialState, ApiReducer} from './reducer';

const ApiStateContext = createContext();
const ApiDispatchContext = createContext();

export function useApiState() {
  const context = useContext(ApiStateContext);
  if (context === undefined) {
    throw new Error('useApiState must be used within a ApiProvider');
  }
  return context;
}

export function useApiDispatch() {
  const context = useContext(ApiDispatchContext);
  if (context === undefined) {
    throw new Error('useApiDispatch must be used within a ApiProvider');
  }
  return context;
}

export const ApiProvider = ({children}) => {
  const [user, dispatch] = useReducer(ApiReducer, initialState);

  return (
    <ApiStateContext.Provider value={user}>
      <ApiDispatchContext.Provider value={dispatch}>
        {children}
      </ApiDispatchContext.Provider>
    </ApiStateContext.Provider>
  );
};
