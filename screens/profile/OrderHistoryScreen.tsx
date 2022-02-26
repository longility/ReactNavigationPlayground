import React from 'react';
import {View, Button, FlatList, SafeAreaView} from 'react-native';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ProfileStackParamList} from '../../navigation/route-param-list';
import {orders} from '../../data/orders';

type OrderHistoryScreenProps = NativeStackScreenProps<ProfileStackParamList>;

const OrderHistoryScreen = ({navigation}: OrderHistoryScreenProps) => {
  const handleOnOrderPress = (id: string) => {
    navigation.navigate('Order', {id});
  };

  return (
    <SafeAreaView>
      <FlatList
        data={orders}
        renderItem={({item}) => (
          <OrderView {...item} onPress={handleOnOrderPress} />
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default OrderHistoryScreen;

const OrderView = ({
  onPress,
  id,
}: {
  id: string;
  onPress: (id: string) => void;
}) => {
  const handlePress = () => onPress(id);
  return (
    <View>
      <Button title={id} onPress={handlePress} />
    </View>
  );
};
