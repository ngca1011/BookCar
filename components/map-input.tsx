import { GOOGLEMAP_API_KEY } from '@env';
import React from 'react';
import { View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useLocation } from '../custom-hooks/set-location';
import { styles, fromInputBoxStyles, toInputBoxStyles } from './styles-map-input';

const GooglePlacesInput = () => {
  const { origin, destination, setOriginLocation, setDestinationLocation } = useLocation();

  return (
    <View style={styles.container}>
      <View>
        <GooglePlacesAutocomplete
          placeholder="Điểm đi?"
          styles={fromInputBoxStyles}
          fetchDetails={true}
          onPress={(data, details = null) => setOriginLocation(data, details)}
          enablePoweredByContainer={false}
          query={{
            key: GOOGLEMAP_API_KEY,
            language: 'en',
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
        />
      </View>
      <View>
        <GooglePlacesAutocomplete
          placeholder="Điểm đến?"
          styles={toInputBoxStyles}
          fetchDetails={true}
          onPress={(data, details = null) => setDestinationLocation(data, details)}
          query={{
            key: GOOGLEMAP_API_KEY,
            language: 'en',
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
        />
      </View> 
    </View>
  );
};

export { GooglePlacesInput };

