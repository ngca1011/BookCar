import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import { MapviewScreen } from './components/map-view';
import { Home } from './screens/home-screen';
import { GooglemapScreen } from './screens/map-api-screen';
import { LocationProvider } from './components/location-context';

export type RootStackParamList = {
  Home: undefined;
  Googlemap: undefined;
  Googlemap_view: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App = (): React.JSX.Element => {
  return (
    <LocationProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Googlemap" component={GooglemapScreen} />
          <Stack.Screen name="Googlemap_view" component={MapviewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </LocationProvider>
  );
};

export default App;
