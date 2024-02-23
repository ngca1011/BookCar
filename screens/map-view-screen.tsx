import { GOOGLEMAP_API_KEY } from '@env';
import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { useLocationContext } from '../components/location-context';
import { VehiclesChoices } from '../components/vehicles-choices';
import { VehicleRequestContextProvider } from '../components/vehicles-request-data';

const MapviewScreen = (): ReactElement => {
  const { origin, destination } = useLocationContext();
  const mapRef = useRef<MapView>(null);
  const [mapReady, setMapReady] = useState(false);

  //Zooming directions
  useEffect(() => {
    if (!origin || !destination) return;

    mapRef.current?.fitToSuppliedMarkers(['origin', 'destination'], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
    });
  }, [origin, destination, mapReady,]);

  const handleMapReady = () => {
    setMapReady(true);
  }

  //Handle Directionserror
  const handleDirectionsError = (error: any) => {
    //TODO: handle error here
    console.log("No directions found")
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <MapView
          ref={mapRef}
          style={{ flex: 1 }}
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
        <VehicleRequestContextProvider>
          <VehiclesChoices />
        </VehicleRequestContextProvider>
      </View>
    </View>
  );
};

export { MapviewScreen };

