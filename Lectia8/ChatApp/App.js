import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './src/Store';
import { Router } from './src/Router';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
