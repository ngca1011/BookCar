import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLEMAP_API_KEY } from '@env';
import { View, StyleSheet } from 'react-native';

const GooglePlacesInput = () => {
  return (
    <View style={styles.container}>
      <View style={styles.fromBarContainer}>
        <GooglePlacesAutocomplete
          placeholder="Điểm đi?"
          onPress={(data, details = null) => {
            console.log(data, details);
          }}
          query={{
            key: GOOGLEMAP_API_KEY,
            language: 'en',
          }}
          styles={styles.inputStyles}
        />
      </View>
      <View style={styles.toBarContainer}>
        <GooglePlacesAutocomplete
          placeholder="Điểm đến?"
          onPress={(data, details = null) => {
            console.log(data, details);
          }}
          query={{
            key: GOOGLEMAP_API_KEY,
            language: 'en',
          }}
          styles={styles.inputStyles}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  fromBarContainer: {
  },
  toBarContainer: {
    top: 50,
  },
  inputStyles: {

  }
});

export { GooglePlacesInput };
