import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Platform, Alert } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import { GooglePlacesInput } from '../components/map-input';
import {MapviewScreen} from '../components/map-view';

const GooglemapScreen = () => {
  const [initialPosition, setInitialPosition] = useState({
    latitude: 28.5995001,
    longitude: 77.3315623,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const locateCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        console.log(JSON.stringify(position));
        let initialPosition = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        };

        setInitialPosition(initialPosition);
      },
      (error) => {
        console.error('Error getting location:', error);
        Alert.alert(`Error getting location: ${error.message}`);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 1000 }
    );
  };

  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      const response = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
      if (response === RESULTS.GRANTED) {
        locateCurrentLocation();
      } else {
        Alert.alert('Location permission denied');
      }
    }
  };

  useEffect(() => {
    requestLocationPermission();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <GooglePlacesInput/>
      </View>
      <View style={styles.mapContainer}>
        <MapviewScreen initialRegion = {initialPosition}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

  },
  mapContainer: {

  },
  inputContainer: {

  },
  mapStyle: {
    
  },
});

export { GooglemapScreen };
