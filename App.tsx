import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ContadorScreen } from './src/screens/ContadorScreen';
import { HelloWorld } from './src/screens/HelloWorld';

export default function App() {
  return (
    <ContadorScreen/>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

