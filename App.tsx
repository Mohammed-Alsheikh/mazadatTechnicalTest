import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import Toast from 'react-native-toast-message';
import {MainScreen} from './src/screens';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {default as mapping} from './mapping.json';
// import {EvaIconsPack} from '@ui-kitten/eva-icons';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      {/* <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor="#0078B2"
      /> */}
      {/* <IconRegistry icons={EvaIconsPack} /> */}
      <ApplicationProvider
        {...eva}
        theme={eva.light}
        //@ts-ignore
        customMapping={mapping}>
        <MainScreen />
      </ApplicationProvider>

      <Toast ref={ref => Toast.setRef(ref)} />
    </>
  );
};

export default App;
