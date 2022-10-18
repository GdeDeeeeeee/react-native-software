import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Saludo } from './src/components/Saludo';
import { ContadorScreen } from './src/screens/ContadorScreen';
import { HelloWorld } from './src/screens/HelloWorld';

export default function App() {
  return (
    <View style={styles.container}>
        {/* <ContadorScreen/> */}
        <Saludo/>

    </View>
    // <Saludo/>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
});

