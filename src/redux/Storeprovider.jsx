// StoreProvider.js
"use client"; 
import store from "./store";
import { Provider } from "react-redux";

const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};


console.log("Redux Store Initialized:", store.getState()); // Debugging step
export default StoreProvider;