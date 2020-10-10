// import { StatusBar } from 'expo-status-bar';
import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import Appdrawer from './routes/drawer';
import { createStore } from "redux";
// import thunk from "redux-thunk";
import { Provider } from "react-redux";
import userstate from "./reducer/rootReducer";

const store = createStore(userstate);

export default function App() {
  return (
    <Provider store={store}>
      <Appdrawer/>
    </Provider>
  );
}
