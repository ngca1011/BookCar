import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'skyblue',
  },
});
export const fromInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 10,
    flex: 0,
  },
  textInput: {
    backgroundColor: '#D3D3D3',
    borderRadius: 8,
    fontSize: 15,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  }
});
export const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: '#D3D3D3',
    borderRadius: 8,
    fontSize: 15,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  }
});
