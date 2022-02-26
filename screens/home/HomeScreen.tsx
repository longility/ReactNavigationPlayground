import React from 'react';
import {View, Text, Button} from 'react-native';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../../navigation/route-param-list';

type MainScreenProps = NativeStackScreenProps<HomeStackParamList>;

const MainScreen = ({navigation}: MainScreenProps) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Products"
        onPress={() => navigation.navigate('ProductBrowsing')}
      />
    </View>
  );
};

export default MainScreen;
