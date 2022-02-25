import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const BottomTab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator initialRouteName="Home">
        <BottomTab.Screen name="Home" component={HomeScreen} />
        <BottomTab.Screen name="Profile" component={ProfileScreen} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
