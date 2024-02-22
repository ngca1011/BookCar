import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import { LocationProvider } from './components/location-context';
import { Home } from './screens/home-screen';
import { GooglemapScreen } from './screens/map-input-screen';
import { MapviewScreen } from './screens/map-view-screen';


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
          <Stack.Screen name="Googlemap"
            component={GooglemapScreen}
            options={{
              title: 'Chọn điểm đến',
              headerStyle: {
                backgroundColor: 'blue',
              },
              headerTintColor: 'white',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="Googlemap_view" component={MapviewScreen}
            options={{
              title: '',
              headerTransparent: true,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </LocationProvider>
  );
};

export default App;
