import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './Tabs';
import OnBoarding from './OnBoarding';
import InGame from './InGame';

const Nav = createNativeStackNavigator();

const Root = () => {
  return (
    <Nav.Navigator screenOptions={{ headerShown: false }}>
      <Nav.Screen name="Tabs" component={Tabs} />
      <Nav.Screen name="OnBoarding" component={OnBoarding} />
      <Nav.Screen name="InGame" component={InGame} />
    </Nav.Navigator>
  );
};

export default Root;
