import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLEMAP_API_KEY } from '@env';
import { View, StyleSheet } from 'react-native';

const GooglePlacesInput = () => {
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="From where?"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        query={{
          key: GOOGLEMAP_API_KEY,
          language: 'en',
        }}
        styles={styles.inputStyles}
      />
      <GooglePlacesAutocomplete
        placeholder="To"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        query={{
          key: GOOGLEMAP_API_KEY,
          language: 'en',
        }}
        styles={styles.inputStyles}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  inputStyles: {
    
  },
});

export { GooglePlacesInput };
