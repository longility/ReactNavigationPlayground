import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import ProfileScreen from '../screens/ProfileScreen';
import Home from './Home';

const BottomTab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator initialRouteName="Home">
        <BottomTab.Screen name="Home" component={Home} />
        <BottomTab.Screen name="Profile" component={ProfileScreen} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
