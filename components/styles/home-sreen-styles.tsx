import { StyleSheet } from 'react-native';

export const newLocal = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 15,
    flexWrap: 'wrap',
  },
  iconContainer: {
    alignItems: 'center',
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
  text: {
    fontWeight: 'bold',
  },
});
