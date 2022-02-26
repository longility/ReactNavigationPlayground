import {NavigatorScreenParams} from '@react-navigation/native';

export type ProductParamList = {
  Product: {
    id: string;
  };
};

export type HomeStackParamList = {
  ProductBrowsing: undefined;
} & ProductParamList;

export type ProfileStackParamList = {
  OrderHistory: undefined;
  Order: {
    id: string;
  };
} & ProductParamList;

export type RootBottomTabParamList = {
  Home: NavigatorScreenParams<HomeStackParamList>;
  Profile: NavigatorScreenParams<ProfileStackParamList>;
};
