import { GOOGLEMAP_API_KEY } from '@env';
import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { useLocationContext } from './location-context';

const MapviewScreen = (): ReactElement => {
  const { origin, destination } = useLocationContext();
  const mapRef = useRef<MapView>(null);
  const [mapReady, setMapReady] = useState(false);

  console.log(origin, destination);
  useEffect(() => {
    if (!origin || !destination) return;

    //zoom and fit to markers
    mapRef?.current?.fitToSuppliedMarkers(['origin', 'destination'], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
    });
  }, [origin, destination, mapReady]);

  const handleMapReady = () => {
    setMapReady(true);
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={{
          latitude: origin?.location?.lat ?? 0,
          longitude: origin?.location?.lng ?? 0,
          latitudeDelta: 0.3,
          longitudeDelta: 0.3,
        }}
        provider={PROVIDER_GOOGLE}
        onLayout={handleMapReady}
      >
        {destination && (
          <Marker
            coordinate={{
              latitude: destination?.location?.lat ?? 0,
              longitude: destination?.location?.lng ?? 0,
            }}
            title={destination.description}
            identifier="destination"
          />
        )}

        {origin && (
          <Marker
            coordinate={{
              latitude: origin?.location?.lat ?? 0,
              longitude: origin?.location?.lng ?? 0,
            }}
            title={origin.description}
            identifier="origin"
          />
        )}
        <MapViewDirections
          origin={{ latitude: origin?.location?.lat ?? 0, longitude: origin?.location?.lng ?? 0 }}
          destination={{
            latitude: destination?.location?.lat ?? 0,
            longitude: destination?.location?.lng ?? 0,
          }}
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

