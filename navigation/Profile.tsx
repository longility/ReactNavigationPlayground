import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import ProfileScreen from '../screens/ProfileScreen';
import OrderScreen from '../screens/order/OrderScreen';
import OrderHistoryScreen from '../screens/order/OrderHistoryScreen';
import ProductScreen from '../screens/product/ProductScreen';

const Stack = createNativeStackNavigator();

const Profile = () => {
  return (
    <Stack.Navigator initialRouteName="ProfileMain">
      <Stack.Screen name="ProfileMain" component={ProfileScreen} />
      <Stack.Screen name="OrderHistory" component={OrderHistoryScreen} />
      <Stack.Screen name="Order" component={OrderScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
    </Stack.Navigator>
  );
};

export default Profile;
