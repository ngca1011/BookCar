import { GOOGLEMAP_API_KEY } from '@env';
import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Image, Text, TouchableOpacity, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { Vehicle } from '../utils/consts';
import { useLocationContext } from './location-context';

const MapviewScreen = (): ReactElement => {
  const { origin, destination } = useLocationContext();
  const mapRef = useRef<MapView>(null);
  const [mapReady, setMapReady] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Vehicle[]>([]);

  //Fetching data
  const getVehicles = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/vehicles/')
      const json = await response.json();
      console.log(json);
      setData(json.vehicles);
      console.log(json.vehicles);
    } catch (error: any) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getVehicles();
  }, []);

  //console.log(origin, destination);
  useEffect(() => {
    if (!origin || !destination) return;

    mapRef.current?.fitToSuppliedMarkers(['origin', 'destination'], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
    });
  }, [origin, destination, mapReady,]);

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
      </View>
      <View style={{ flex: 0.4, backgroundColor: 'white' }}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <><Text style={{
            fontSize: 14,
            fontWeight: 'bold',
            color: 'black',
          }}>
            Tiêu chuẩn
          </Text>
            <FlatList
              data={data}
              keyExtractor={({ id }) => id}
              renderItem={({ item }) => (
                <TouchableOpacity>
                  <Image
                    style={{
                      width: 100,
                      height: 100,
                      resizeMode: "contain"
                    }}
                    source={item.image_path} />
                </TouchableOpacity>
              )}
            >
            </FlatList></>
        )}
      </View>
    </View>
  );
};

export { MapviewScreen };

