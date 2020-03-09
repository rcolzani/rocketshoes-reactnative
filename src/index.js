import React from 'react';

import { StatusBar } from 'react-native';
import './config/ReactotronConfig';
import { Provider } from 'react-redux';

import Routes from './routes';
import NavigationService from './services/navigations';

import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <Routes
        ref={navigatorRef => NavigationService.setNavigator(navigatorRef)}
      />
    </Provider>
  );
}

// https://github.com/Rocketseat/bootcamp-gostack-desafio-07#desafio-07-redux
