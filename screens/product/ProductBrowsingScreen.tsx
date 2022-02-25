import React from 'react';
import {View, Button, FlatList, SafeAreaView} from 'react-native';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RouteParamList} from '../../navigation/route-param-list';
import {products} from '../../data/products';

type ProductBrowsingScreenProps = NativeStackScreenProps<RouteParamList>;

const ProductBrowsingScreen = ({navigation}: ProductBrowsingScreenProps) => {
  const handleOnProductPress = (id: string) => {
    navigation.navigate('Product', {id});
  };

  return (
    <SafeAreaView>
      <FlatList
        data={products}
        renderItem={({item}) => (
          <ProductView {...item} onPress={handleOnProductPress} />
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default ProductBrowsingScreen;

const ProductView = ({
  name,
  onPress,
  id,
}: {
  name: string;
  id: string;
  onPress: (id: string) => void;
}) => {
  const handlePress = () => onPress(id);
  return (
    <View>
      <Button title={name} onPress={handlePress} />
    </View>
  );
};
