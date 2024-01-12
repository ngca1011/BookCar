import { StyleSheet, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

const MapviewScreen = (props: {
  initialRegion: {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  };
}): React.JSX.Element => {
  const initialPosition = props.initialRegion;

  return (
    <MapView
      style={styles.mapStyle}
      showsUserLocation={true}
      zoomEnabled={true}
      zoomControlEnabled={true}
      provider={PROVIDER_GOOGLE}
      initialRegion={initialPosition}
    >
      <Marker
        coordinate={{
          latitude: initialPosition.latitude,
          longitude: initialPosition.longitude,
        }}
        title="Current Location"
      />
    </MapView>
  );
};

const styles = StyleSheet.create({
  container: {},
  mapContainer: {},
  inputContainer: {},
  mapStyle: {},
});

export { MapviewScreen };
