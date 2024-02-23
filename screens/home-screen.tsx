import { Image, Text, TouchableOpacity, View } from 'react-native';
import { NavigationBar } from '../components/home-screen/navigationbar';
import { HomeProps } from '../utils/consts';
import { newLocal } from '../components/styles/home-sreen-styles';

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
      <View style={{ flexDirection: 'column', alignContent: 'flex-start', paddingTop: 20 }}>
        <View style={styles.container}>
          <View style={styles.iconContainer}>
            <Image source={require('../images/home-screen/small-car.png')} style={styles.icon} />
            <Text style={styles.text}>Ô tô</Text>
          </View>
          <View style={styles.iconContainer}>
            <Image source={require('../images/home-screen/small-car.png')} style={styles.icon} />
            <Text style={styles.text}>Xe máy</Text>
          </View>
          <View style={styles.iconContainer}>
            <Image source={require('../images/home-screen/small-car.png')} style={styles.icon} />
            <Text style={styles.text}>Xe sân bay</Text>
          </View>
          <View style={styles.iconContainer}>
            <Image source={require('../images/home-screen/small-car.png')} style={styles.icon} />
            <Text style={styles.text}>Tiện chuyến</Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.iconContainer}>
            <Image source={require('../images/home-screen/small-car.png')} style={styles.icon} />
            <Text style={styles.text}>Xe tuyến</Text>
          </View>
          <View style={styles.iconContainer}>
            <Image source={require('../images/home-screen/small-car.png')} style={styles.icon} />
            <Text style={styles.text}>Xe tải</Text>
          </View>
          <View style={styles.iconContainer}>
            <Image source={require('../images/home-screen/small-car.png')} style={styles.icon} />
            <Text style={styles.text}>Xe ba gác</Text>
          </View>
          <View style={styles.iconContainer}>
            <Image source={require('../images/home-screen/small-car.png')} style={styles.icon} />
            <Text style={styles.text}>Giao hàng</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export { Home };
