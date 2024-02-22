import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../app";

export type Coordinates = {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
};

export type Vehicle = {
  id: string,
  title: string,
  price: number,
  image_path: any,
}
export interface VehiclesChoicesProps {
  darkenMap: boolean;
  setDarkenMap: React.Dispatch<React.SetStateAction<boolean>>;
}

export type GooglemapScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

export type HomeProps = {
  navigation: GooglemapScreenNavigationProp;
};
export interface GooglemapScreenProps {
  navigation: GooglemapScreenNavigationProp;
}

