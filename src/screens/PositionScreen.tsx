import { useState } from "react"
import { Button, Text, TouchableOpacity, View,StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
// import { styles } from "../../App"

export const PositionScreen=()=>{

    return (
        // <SafeAreaView style={{flex:1}} >

            <View style={styles.container}>
                <View style={styles.purpleBox}>

                </View>
                <View style={styles.orangeBox}></View>
                <View style={styles.heavenBox}></View>

            </View>
        // </SafeAreaView>

    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#28425B',
        flexDirection:'row',
        justifyContent:'space-between',
  
    },
    purpleBox:{
        width:100,
        height:'100%',
        backgroundColor:'#5b56d6',
        borderWidth:10,
        borderColor:'white',
      
    },
    orangeBox:{
        width:100,
        height:'100%',
        backgroundColor:'#FFA500',
        borderWidth:10,
        borderColor:'white',
        
    },
    heavenBox:{
        width:100,
        height:'100%',
        backgroundColor:'#00aae4',
        borderWidth:10,
        borderColor:'white',
    
    }

})

        // position:'absolute',
        // top:0,
        // right:0,
        //2
                // position:'absolute',
        // alignSelf: 'center',
        //3
         // position:'absolute',
        // bottom:0,
        // left:0