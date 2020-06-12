import React from 'react';
import useGlobal from './useGlobal';

const initialState = {
  counter: 0,
  isLogged: false,
};

const actions = {
  addToCounter: (store, amount) => {
    const newCounterValue = store.state.counter + amount;
    store.setState({ counter: newCounterValue });
  },
  // ...onAuthStateChanged,
};

const useGlobalState = useGlobal(React, initialState, actions);

export default useGlobalState;
