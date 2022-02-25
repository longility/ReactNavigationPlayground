import React from 'react';
import {View, Text, Button} from 'react-native';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RouteParamList} from '../navigation/route-param-list';

type ProfileScreenProps = NativeStackScreenProps<RouteParamList>;

const ProfileScreen = ({navigation}: ProfileScreenProps) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Profile Screen</Text>
      <Button
        title="Order History"
        onPress={() => navigation.navigate('OrderHistory')}
      />
    </View>
  );
};

export default ProfileScreen;
