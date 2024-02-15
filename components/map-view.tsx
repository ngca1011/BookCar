import { GOOGLEMAP_API_KEY } from '@env';
import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { Vehicle, vehicleListData } from '../utils/db';
import { useLocationContext } from './location-context';

const data = vehicleListData;

const MapviewScreen = (): ReactElement => {
  const { origin, destination } = useLocationContext();
  const mapRef = useRef<MapView>(null);
  const [mapReady, setMapReady] = useState(false);
  const [key, setKey] = useState(0);

  console.log(origin, destination);
  useEffect(() => {
    if (!origin || !destination) return;

    //zoom and fit to markers
    mapRef.current?.fitToSuppliedMarkers(['origin', 'destination'], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
    });
  }, [origin, destination, mapReady, key]);

  //force re-render
  useEffect(() => {
    setKey(prevKey => prevKey + 1);
  }, [mapReady]);

  const handleMapReady = () => {
    setMapReady(true);
  }

  const handleDirectionsError = (error: any) => {
    //TODO: handle error here
    console.log("No directions found")
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 0.6 }}>
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
          {origin && destination &&
            <MapViewDirections
              origin={{ latitude: origin?.location?.lat ?? 0, longitude: origin?.location?.lng ?? 0 }}
              destination={{
                latitude: destination?.location?.lat ?? 0,
                longitude: destination?.location?.lng ?? 0,
              }}
              apikey={GOOGLEMAP_API_KEY}
              strokeWidth={7}
              strokeColor="hotpink"
              onError={handleDirectionsError}
            />
          }
        </MapView>
      </View>
      <View style={{ flex: 0.4, backgroundColor: 'white' }}>
        <FlatList data={data}
          keyExtractor={(item: Vehicle) => item.id}
          renderItem={({ item: { id, title, preis, image_path }, item }) => (
            <TouchableOpacity>
              <Image
                style={{
                  width: 100,
                  height: 100,
                  resizeMode: "contain"
                }}
                source={image_path}
              />
            </TouchableOpacity>
          )}
        >
        </FlatList>
      </View>
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

