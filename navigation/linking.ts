import {LinkingOptions} from '@react-navigation/native';
import {RootBottomTabParamList} from './route-param-list';

export const linking: LinkingOptions<RootBottomTabParamList> = {
  prefixes: ['longility://'],
  config: {
    screens: {
      Home: {
        screens: {
          Product: 'products/:id',
        },
      },
    },
  },
};
