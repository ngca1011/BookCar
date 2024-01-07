import { Image, Text, View, StyleSheet } from 'react-native';
import { NavigationBar } from '../components/navigationbar';

const Home = (): React.JSX.Element => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      padding: 20,
    },
    iconContainer: {
      marginRight: 20,
      alignItems: 'center',
    },
    icon: {
      width: 60,
      height: 60,
    },
  });

  return (
    <>
      <NavigationBar />
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Image
            source={require('../images/home-screen/small-car.png')}
            style={styles.icon}
          />
          <Text>Ô tô</Text>
        </View>
        <View style={styles.iconContainer}>
          <Image
            source={require('../images/home-screen/small-car.png')}
            style={styles.icon}
          />
          <Text>Ô tô</Text>
        </View>
        <View style={styles.iconContainer}>
          <Image
            source={require('../images/home-screen/small-car.png')}
            style={styles.icon}
          />
          <Text>Ô tô</Text>
        </View>
        <View style={styles.iconContainer}>
          <Image
            source={require('../images/home-screen/small-car.png')}
            style={styles.icon}
          />
          <Text>Ô tô</Text>
        </View>
      </View>
    </>
  );
};

export { Home };
