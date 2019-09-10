import React, {Fragment} from 'react';
import {StatusBar, SafeAreaView} from 'react-native';
import Icon from 'react-native-dynamic-vector-icons';

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Icon name="applemusic" type="Fontisto" />
      </SafeAreaView>
    </Fragment>
  );
};

export default App;
