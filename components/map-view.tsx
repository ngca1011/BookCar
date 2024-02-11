import React, { ReactElement } from 'react';
import { StyleSheet, View } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import { useLocation } from '../custom-hooks/set-location';
import { GOOGLEMAP_API_KEY } from '@env';
import MapView, { Marker, Region } from 'react-native-maps';

const MapviewScreen = (): ReactElement => {
  const { origin, destination } = useLocation();

  const initialRegion = {
    latitude: 40.7128,
    longitude: -74.0060,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    <View style={styles.container}>
    <MapView style={styles.map} initialRegion={initialRegion}>
      {/* Example marker */}
      <Marker
        coordinate={{ latitude: 40.7128, longitude: -74.0060 }}
        title="New York City"
        description="The Big Apple"
      />
    </MapView>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
export { MapviewScreen };
