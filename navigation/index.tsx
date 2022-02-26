import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from './Home';
import Profile from './Profile';
import {linking} from './linking';

const BottomTab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer linking={linking}>
      <BottomTab.Navigator initialRouteName="Home">
        <BottomTab.Screen name="Home" component={Home} />
        <BottomTab.Screen name="Profile" component={Profile} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
