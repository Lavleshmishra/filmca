import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/Store'
import RootNavigation from './src/route/RootNavigation';
import axios from 'axios';
import api from './src/common/Api';

const App = () => {
  axios.defaults.baseURL = api.baseUri; // BASE URL
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
};

export default App;
