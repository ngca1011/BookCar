import React from 'react';
import { Home } from './screens/home-screen';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { GooglemapScreen } from './screens/map-api-screen';
import { createStackNavigator } from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined; // undefined because you aren't passing any params to the home screen
  Googlemap: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Googlemap" component={GooglemapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
