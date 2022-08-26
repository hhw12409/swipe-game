import React from 'react';
import Root from './src/navigation/Root';
import { NavigationContainer } from '@react-navigation/native';
import { RecoilRoot } from 'recoil';

const App = () => {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    </RecoilRoot>
  );
};

export default App;
