import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategorySelectionScreen from './screens/CategorySelectionScreen';
import Navigation from './nav/Navigation';
import store from './store';
import { Provider } from 'react-redux';

export default function App() {
  return (
   <Provider store = {store}>
   <Navigation/>      
   </Provider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
