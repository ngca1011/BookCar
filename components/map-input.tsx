import { GOOGLEMAP_API_KEY } from '@env';
import React from 'react';
import { Button, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useLocation } from '../custom-hooks/set-location';
import { GooglemapScreenNavigationProp } from '../screens/home-screen';
import { Coordinates } from '../utils/consts';
import { fromInputBoxStyles, styles, toInputBoxStyles } from './styles/styles-map-input';

export interface GooglePlacesInputProps {
  currentLocation: Coordinates;
  navigation: GooglemapScreenNavigationProp;
}

const GooglePlacesInput:React.FC<GooglePlacesInputProps> = ({currentLocation, navigation}) => {
  const { origin, destination, setOriginLocation, setDestinationLocation } = useLocation();

  const currentPlace = {
    description: 'Vị trí hiện tại',
    geometry: { location: { lat: currentLocation.latitude, lng: currentLocation.longitude } },
  };

  const handleConfirm = ():void => {
    navigation.navigate('Googlemap_view');
  };

  return (
    <View style={styles.container}>
      <View>
        <GooglePlacesAutocomplete
          placeholder={"Điểm đi?"}
          styles={fromInputBoxStyles}
          fetchDetails={true}
          onPress={(data, details = null) => {setOriginLocation(data, details)
            console.log(origin?.description)}
          }
          enablePoweredByContainer={false}
          query={{
            key: GOOGLEMAP_API_KEY,
            language: 'en',
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          predefinedPlaces={[currentPlace]}
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
      {origin && destination && (
        <Button title="Confirm" onPress={handleConfirm} />
      )}
    </View>
  );
};

export { GooglePlacesInput };

