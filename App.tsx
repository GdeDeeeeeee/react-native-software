import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { Saludo } from './src/components/Saludo';
import { ContadorScreen } from './src/screens/ContadorScreen';
import { FlexScreen } from './src/screens/FlexScreen';
import { HelloWorld } from './src/screens/HelloWorld';
import { PositionScreen } from './src/screens/PositionScreen';
import { TaskScreen } from './src/screens/TaskScreen';
import { SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { CalculatorScreen } from './src/screens/CalculatorScreen';
import { styles } from './src/theme/appTheme';

export default function App() {
  return (
    // <View style={styles.container}>
    // <View >
    // <ContadorScreen/>
    // <View style={styles.container}>
        // {/* // <Saludo/> */}
      //  <PositionScreen/> 
      //  <FlexScreen/> 
        <SafeAreaView style={styles.fondo}>
                <StatusBar 
                    backgroundColor="black"
                    barStyle='light-content'
                  />
                  <CalculatorScreen/>
        </SafeAreaView> 
                  // {/* <SafeAreaView style={{flex:1}} > */}
  
                //  {/* </SafeAreaView> */}


        //  </SafeAreaProvider>
      //  </View>
        // </View>
    // <Saludo/>
  );
}

// export const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // backgroundColor: 'blue',
//     // alignItems: 'center',
//     // justifyContent: 'center',
//   },
// });

