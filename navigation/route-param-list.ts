import {ParamListBase} from '@react-navigation/native';

export interface RouteParamList extends ParamListBase {
  Product: {
    id: string;
  };
  Order: {
    id: string;
  };
}
