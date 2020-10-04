import React, { createContext, useContext, useReducer } from "react";

//prepares the data layer
export const DataLayerContext = createContext();

//creating a data layer
export const DataLayer = ({ intialState, reducer, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, intialState)}>
    {children}
  </DataLayerContext.Provider>
);

//pull the information
export const useDataLayerValue = () => useContext(DataLayerContext);
