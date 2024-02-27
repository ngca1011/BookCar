import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../app';

export type Coordinates = {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
};

export type Vehicle = {
  id: string;
  title: string;
  price_ratio: number;
  type: string;
};

export type ScreenProps = {
  navigation: any;
};
