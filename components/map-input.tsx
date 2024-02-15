import { GOOGLEMAP_API_KEY } from '@env';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GooglemapScreenNavigationProp } from '../screens/home-screen';
import { Coordinates } from '../utils/consts';
import { useLocationContext } from './location-context';
import { fromInputBoxStyles, styles, toInputBoxStyles } from './styles/styles-map-input';

export interface GooglePlacesInputProps {
  currentLocation: Coordinates;
  navigation: GooglemapScreenNavigationProp;
}

const GooglePlacesInput: React.FC<GooglePlacesInputProps> = ({ currentLocation, navigation }) => {
  const { origin, destination, setOriginLocation, setDestinationLocation } = useLocationContext();

  const currentPlace = {
    description: 'Vị trí hiện tại',
    geometry: { location: { lat: currentLocation.latitude, lng: currentLocation.longitude } },
  };

  const handleConfirm = (): void => {
    navigation.navigate('Googlemap_view');
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 0.7 }}>
        <GooglePlacesAutocomplete
          placeholder={'Điểm đi?'}
          styles={fromInputBoxStyles}
          fetchDetails={true}
          onPress={(data, details) => {
            setOriginLocation(data, details);
          }}
          enablePoweredByContainer={false}
          query={{
            key: GOOGLEMAP_API_KEY,
            language: 'en',
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          predefinedPlaces={[currentPlace]}
          debounce={400} />
      </View>
      <View>
        <GooglePlacesAutocomplete
          placeholder="Điểm đến?"
          styles={toInputBoxStyles}
          fetchDetails={true}
          onPress={(data, details) => setDestinationLocation(data, details)}
          query={{
            key: GOOGLEMAP_API_KEY,
            language: 'en',
          }}
          nearbyPlacesAPI="GooglePlacesSearch" />
      </View>
      <View style={{ paddingTop: 25 }}>
        {origin && destination &&
          <Pressable style={styles.button} onPress={handleConfirm}>
            <Text style={styles.text}>Confirm</Text>
          </Pressable>}
      </View>
    </View>
  );
};

export { GooglePlacesInput };

