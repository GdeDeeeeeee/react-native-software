import { useState } from "react"
import { Button, Text, TouchableOpacity, View,StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
// import { styles } from "../../App"

export const PositionScreen=()=>{

    return (
        <SafeAreaView style={{flex:1}} >

        <View style={styles.container}>
            <View style={styles.purpleBox}>

            </View>
            <View style={styles.orangeBox}></View>
            <View style={styles.greenBox}></View>

        </View>
        </SafeAreaView>

    )
}

const styles=StyleSheet.create({
    container:{
        // flex:1,
        backgroundColor: '#28c4d9',
        width:400,
        height:400,
    },
    //this is the task for the first image
    purpleBox:{
        width:100,
        height:100,
        backgroundColor:'#5b56d6',
        borderWidth:10,
        borderColor:'white',
        position:'absolute',
        // bottom:10
        top:10,
        right:10,
    },
    orangeBox:{
        width:100,
        height:100,
        backgroundColor:'#FFA500',
        borderWidth:10,
        borderColor:'white',
        position:'absolute',
        bottom:10,
        right:10
    },
    greenBox:{
        width:100,
        height:100,
        backgroundColor:'green',
        borderWidth:10,
        borderColor:'white',
        position:'absolute',
        bottom:10,
        left:10
    }
})