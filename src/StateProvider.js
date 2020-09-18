// setup data layer
// Needed to track the cart

import React, { createContext, useContext, useReducer } from "react";

// This is the data layer
export const StateConext = createContext();

// Build a provider
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateConext.Provider value={useReducer(reducer, initialState )}>
        {children}
    </StateConext.Provider>
);

// This is how we use it inside of a component
export const useStateValue = () => useContext(StateConext);