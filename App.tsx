/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {FC} from 'react';
import {Provider} from 'react-redux';
import AppNavigation from './src/navigation';
import {store} from './src/redux';
import {LogBox} from 'react-native';
import {NotifierWrapper} from 'react-native-notifier';
import Wrapper from './src/components/common/Wrapper';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

const App: FC = () => {
  return (
    <>
      <NotifierWrapper>
        <Provider store={store}>
          <Wrapper>
            <AppNavigation />
          </Wrapper>
        </Provider>
      </NotifierWrapper>
    </>
  );
};

export default App;
