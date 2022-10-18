import { Text, View } from "react-native"
import { StatusBar } from 'expo-status-bar';
import { styles } from "../../App";


export const HelloWorld=()=>{
    
    return (
        <View style={styles.container}>
        <Text>this is a new app</Text>
        <StatusBar style="auto" />
      </View>
    )
}


  