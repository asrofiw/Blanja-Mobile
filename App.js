import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import Main from './src/Stacks/Main';

import store from './src/redux/store';

export default function App() {
  return (
    <Provider store={store().store}>
      <PersistGate loading={null} persistor={store().persistor}>
        <Main />
      </PersistGate>
    </Provider>
  );
}
