import React, {useMemo} from 'react';
import {View, Text} from 'react-native';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RouteParamList} from '../../navigation/route-param-list';
import {products} from '../../data/products';

type ProductScreenProps = NativeStackScreenProps<RouteParamList, 'Product'>;

const ProductScreen = ({route}: ProductScreenProps) => {
  const product = useMemo(
    () => products.find(p => p.id === route.params.id),
    [route.params.id],
  );
  if (!product) {
    <View>
      <Text>Product not found.</Text>
    </View>;
  }

  return (
    <View>
      <Text>Id: {product?.id}</Text>
      <Text>SKU: {product?.sku}</Text>
      <Text>Name: {product?.name}</Text>
    </View>
  );
};

export default ProductScreen;
