import React from 'react';
import {View, Text} from 'react-native';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RouteParamList} from '../navigation/route-param-list';

type ProfileScreenProps = NativeStackScreenProps<RouteParamList>;

const ProfileScreen = ({}: ProfileScreenProps) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Profile Screen</Text>
    </View>
  );
};

export default ProfileScreen;
