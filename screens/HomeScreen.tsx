import React from 'react';
import {View, Text, Button} from 'react-native';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RouteParamList} from '../navigation/route-param-list';

type HomeScreenProps = NativeStackScreenProps<RouteParamList, 'Home'>;

const HomeScreen = ({navigation}: HomeScreenProps) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
};

export default HomeScreen;
