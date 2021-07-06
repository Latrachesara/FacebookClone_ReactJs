import React,{ createContext, userContext, userReducer } from "react";
export const StateContext = createContext();
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={userReducer(reducer, initialState )} >
{children}
    </StateContext.Provider>
);
export const useStateValue =() => useContext(StateContext);