import React from 'react';
import {StatusBar, SafeAreaView} from 'react-native';

import Router from './src/Router';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <StatusBar barStyle={'light-content'} />
      <Router />
    </SafeAreaView>
  );
}
