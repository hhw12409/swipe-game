import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Home from '../screens/Home/Home';
import Setting from '../screens/Setting/Setting';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return <Ionicons name="game-controller" size={size} color={color} />;
          },
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return <Ionicons name="settings" size={size} color={color} />;
          },
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

export default Tabs;
