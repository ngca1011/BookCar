import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { RootStackParamList } from "../app";
import { GooglemapScreenNavigationProp } from "./consts";

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
  showDateTimePicker: boolean;
  setShowDateTimePicker: React.Dispatch<React.SetStateAction<boolean>>;
}

export type GooglemapScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

export type HomeProps = {
  navigation: GooglemapScreenNavigationProp;
};
export interface GooglemapScreenProps {
  navigation: GooglemapScreenNavigationProp;
}

