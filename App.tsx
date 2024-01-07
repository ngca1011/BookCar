import React from 'react'
import { NavigationBar } from './components/navigationbar'
import { Home } from './screens/home-screen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import 'react-native-gesture-handler'

const Stack = createNativeStackNavigator()

const App = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={Home}
          options={{ headerShown:false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
