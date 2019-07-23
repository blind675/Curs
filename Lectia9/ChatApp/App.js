import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { useScreens } from 'react-native-screens';
import firebase from 'firebase';


import store from './src/Store';
import { Router } from './src/Router';

useScreens();

class App extends Component {
  componentDidMount() {
    // Initialize Firebase
    firebase.initializeApp({
      apiKey: 'AIzaSyAeL0z3neE4q7J__Niq8vEqa56VZlZCirY',
      authDomain: 'chatapp-ad7a9.firebaseapp.com',
      databaseURL: 'https://chatapp-ad7a9.firebaseio.com',
      projectId: 'chatapp-ad7a9',
      storageBucket: '',
      messagingSenderId: '439106254143',
      appId: '1:439106254143:web:7095c34ce95eb392'
    });
  }

  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
