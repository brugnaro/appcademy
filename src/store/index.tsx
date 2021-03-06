import React, {createContext, useContext, useReducer} from 'react';

export const Context = createContext();

export const Store = ({reducer, initialState, children}) => (
  <Context.Provider value={useReducer(reducer, initialState)}>
    {children}
  </Context.Provider>
);

export const useStateValue = () => useContext(Context);
