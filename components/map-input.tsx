import { GOOGLEMAP_API_KEY } from '@env';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Coordinates, GooglemapScreenNavigationProp } from '../utils/consts';
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

  const paris = {
    type: 'favorite',
    description: 'Paris, France',
    geometry: { location: { lat: 48.864716, lng: 2.349014 } },
  };

  const handleConfirm = (): void => {
    navigation.navigate('Googlemap_view');
  };

  return (
    <View style={styles.container}>
      <View>
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
          debounce={400}
        />

        <GooglePlacesAutocomplete
          placeholder="Điểm đến?"
          styles={toInputBoxStyles}
          fetchDetails={true}
          onPress={(data, details) => setDestinationLocation(data, details)}
          query={{
            key: GOOGLEMAP_API_KEY,
            language: 'en',
          }}
          predefinedPlaces={[paris]}
          nearbyPlacesAPI="GooglePlacesSearch"
        />
      </View>

      <View style={{ paddingBottom: 50, alignItems: 'center' }}>
        {origin && destination && (
          <Pressable style={styles.button} onPress={handleConfirm}>
            <Text style={styles.text}>Xác nhận</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
};

export { GooglePlacesInput };
