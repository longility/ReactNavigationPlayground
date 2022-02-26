import React, {useMemo} from 'react';
import {View, Text, FlatList, Button} from 'react-native';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ProfileStackParamList} from '../../navigation/route-param-list';
import {orders} from '../../data/orders';
import {products} from '../../data/products';

type OrderScreenProps = NativeStackScreenProps<ProfileStackParamList, 'Order'>;

const OrderScreen = ({navigation, route}: OrderScreenProps) => {
  const order = useMemo(
    () => orders.find(p => p.id === route.params.id),
    [route.params.id],
  );
  const orderedItems = useMemo(
    () =>
      order?.lineItems.map(({quantity, productId}) => ({
        quantity,
        productId,
        productName: products.find(p => p.id === productId)!.name,
      })) ?? [],
    [order?.lineItems],
  );
  const handleOnLineItemPress = (productId: string) => {
    navigation.navigate('Product', {id: productId});
  };

  if (!order) {
    <View>
      <Text>Order not found.</Text>
    </View>;
  }

  return (
    <View>
      <Text>Ordered on {order?.orderedOn.toLocaleString()}</Text>
      <FlatList
        data={orderedItems}
        renderItem={({item}) => (
          <LineItemView {...item} onPress={handleOnLineItemPress} />
        )}
        keyExtractor={item => item.quantity + item.productId}
      />
    </View>
  );
};

export default OrderScreen;

const LineItemView = ({
  onPress,
  quantity,
  productId,
  productName,
}: {
  quantity: number;
  productId: string;
  productName: string;
  onPress: (id: string) => void;
}) => {
  const handlePress = () => onPress(productId);
  return (
    <View>
      <Text>
        {quantity} - {productName}
      </Text>
      <Button title={productId} onPress={handlePress} />
    </View>
  );
};
