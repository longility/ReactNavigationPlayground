import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import ProductBrowsingScreen from '../screens/product/ProductBrowsingScreen';
import ProductScreen from '../screens/product/ProductScreen';

const Stack = createNativeStackNavigator();

const Home = () => {
  return (
    <Stack.Navigator initialRouteName="HomeMain">
      <Stack.Screen name="HomeMain" component={HomeScreen} />
      <Stack.Screen name="ProductBrowsing" component={ProductBrowsingScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
    </Stack.Navigator>
  );
};

export default Home;
