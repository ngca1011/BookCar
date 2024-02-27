import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { useAuthContext } from '../authentication-context';

const NavigationBar = (): React.JSX.Element => {
  const {setIsLoggedIn} = useAuthContext()

  const handleLogout = () => {
    setIsLoggedIn(false);
  }

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
        source={require('../../images/home-screen/user-icon.png')}
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
      <Pressable onPress={handleLogout}>
        <Image
          source={require('../../images/home-screen/logout.png')}
          style={{
            marginLeft: 200,
            width: 35,
            height: 35,
          }}
        />
      </Pressable>
    </View>
  );
};

export { NavigationBar };
