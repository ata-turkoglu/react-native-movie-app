import React from 'react';
import {StatusBar, SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/store/index.js';
import Router from './src/Router';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
        <StatusBar barStyle={'light-content'} />
        <Router />
      </SafeAreaView>
    </Provider>
  );
}
