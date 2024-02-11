import { GOOGLEMAP_API_KEY } from '@env';
import React, { ReactElement } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { useLocationContext } from './location-context';

const MapviewScreen = (): ReactElement => {
  const { origin, destination } = useLocationContext();
  const originLatitude = origin?.location?.lat ?? 0;
  const originLongitude = origin?.location?.lng ?? 0;
  const destinationLatitude = destination?.location?.lat ?? 0;
  const destinationLongitude = destination?.location?.lng ?? 0;

  console.log(origin, destination);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: destinationLatitude,
          longitude: destinationLongitude,
          latitudeDelta: 0.3,
          longitudeDelta: 0.3,
        }}
        provider={PROVIDER_GOOGLE}
      >
        <MapViewDirections
          origin={{latitude: originLatitude, longitude: originLongitude}}
          destination={{latitude: destinationLatitude, longitude: destinationLongitude}}
          apikey={GOOGLEMAP_API_KEY}
          strokeWidth={7}
          strokeColor="hotpink"
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

