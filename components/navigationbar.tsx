import React from 'react';
import { Image, Text, View } from 'react-native';

const NavigationBar = (): React.JSX.Element => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: 'blue',
        alignItems: 'center',
        paddingBottom: 40,
      }}
    >
      <Image
        source={require('../images/home-screen/user-icon.png')}
        style={{
          width: 40,
          height: 40,
        }}
      />
      <Text
        style={{
          color: 'white',
        }}
      >
        Good morning, John!
      </Text>
    </View>
  );
};

export { NavigationBar };
