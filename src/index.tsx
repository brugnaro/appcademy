import React from 'react';

import {Store} from './store';

import {MAIN_INITIAL_STATE} from './store/main/reducers';

import reducers from './store/reducers';

import Routes from './routes';

const App = () => {
  const initialState = {
    main: MAIN_INITIAL_STATE,
  };
  return (
    <Store initialState={initialState} reducer={reducers}>
      <Routes />
    </Store>
  );
};
export default App;
