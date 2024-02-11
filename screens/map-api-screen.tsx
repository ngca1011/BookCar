import Geolocation from '@react-native-community/geolocation';
import React, { useEffect, useState } from 'react';
import { Alert, Platform, StyleSheet, View } from 'react-native';
import { PERMISSIONS, RESULTS, request } from 'react-native-permissions';
import { GooglePlacesInput } from '../components/map-input';
import { Coordinates } from '../utils/consts';
import { GooglemapScreenNavigationProp } from './home-screen';

interface GooglemapScreenProps {
  navigation: GooglemapScreenNavigationProp;
}

const GooglemapScreen: React.FC<GooglemapScreenProps> = ({ navigation }) => {
  const [initialPosition, setInitialPosition] = useState<Coordinates | null>(null);

  const locateCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const newInitialPosition = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        };

        setInitialPosition(newInitialPosition);
        console.log(newInitialPosition);
      },
      (error) => {
        console.error('Error getting location:', error);
        Alert.alert(`Error getting location: ${error.message}`);
      },
      { enableHighAccuracy: true }
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
        {initialPosition && (
          <GooglePlacesInput currentLocation={initialPosition} navigation={navigation} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapContainer: {},
  inputContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  mapStyle: {},
});

export { GooglemapScreen };
