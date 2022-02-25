import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import MainScreen from '../screens/MainScreen';
import ProductBrowsingScreen from '../screens/product/ProductBrowsingScreen';
import ProductScreen from '../screens/product/ProductScreen';

const Stack = createNativeStackNavigator();

const Home = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="ProductBrowsing" component={ProductBrowsingScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
    </Stack.Navigator>
  );
};

export default Home;
