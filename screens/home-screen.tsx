import { StackNavigationProp } from '@react-navigation/stack';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RootStackParamList } from '../app.tsx';
import { NavigationBar } from '../components/navigationbar';

export type GooglemapScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type HomeProps = {
  navigation: GooglemapScreenNavigationProp;
};

const Home = ({ navigation }: HomeProps): React.JSX.Element => {
  const styles = newLocal;

  const handlePress = (): void => {
    navigation.navigate('Googlemap');
  };

  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
      }}
    >
      <NavigationBar />
      <View style={styles.navigationContainer}>
        <Text>Bạn muốn đi đâu?</Text>
        <TouchableOpacity onPress={handlePress} style={styles.buttonContainer}>
          <Text style={styles.textContainer}> Bản đồ </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Image source={require('../images/home-screen/small-car.png')} style={styles.icon} />
          <Text>Ô tô</Text>
        </View>
        <View style={styles.iconContainer}>
          <Image source={require('../images/home-screen/small-car.png')} style={styles.icon} />
          <Text>Ô tô</Text>
        </View>
        <View style={styles.iconContainer}>
          <Image source={require('../images/home-screen/small-car.png')} style={styles.icon} />
          <Text>Ô tô</Text>
        </View>
        <View style={styles.iconContainer}>
          <Image source={require('../images/home-screen/small-car.png')} style={styles.icon} />
          <Text>Ô tô</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Image source={require('../images/home-screen/small-car.png')} style={styles.icon} />
          <Text>Ô tô</Text>
        </View>
        <View style={styles.iconContainer}>
          <Image source={require('../images/home-screen/small-car.png')} style={styles.icon} />
          <Text>Ô tô</Text>
        </View>
        <View style={styles.iconContainer}>
          <Image source={require('../images/home-screen/small-car.png')} style={styles.icon} />
          <Text>Ô tô</Text>
        </View>
        <View style={styles.iconContainer}>
          <Image source={require('../images/home-screen/small-car.png')} style={styles.icon} />
          <Text>Ô tô</Text>
        </View>
      </View>
    </View>
  );
};

export { Home };

const newLocal = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    top: 20,
  },
  iconContainer: {
    marginRight: 20,
    alignItems: 'center',
    paddingLeft: 12,
  },
  icon: {
    width: 60,
    height: 60,
  },
  navigationContainer: {
    width: 350,
    height: 45,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 25,
    zIndex: 1,
    position: 'absolute',
    backgroundColor: 'white',
    top: 50,
  },
  buttonContainer: {
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: 'black',
    borderRadius: 6,
    left: 160,
    color: 'green',
  },
  textContainer: {
    fontWeight: 'bold',
  },
});
