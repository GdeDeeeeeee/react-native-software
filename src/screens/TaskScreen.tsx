import { useState } from "react"
import { Button, Text, TouchableOpacity, View,StyleSheet } from "react-native"

export const TaskScreen=()=>{
    return(
        <View style={styles.container}>
        <View style={styles.purpleBox}>

        </View>
        <View style={styles.orangeBox}></View>
        <View style={styles.blueBox}></View>

    </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#28425b',
        
    },
    //this is the task for the first image
    purpleBox:{
        width:100,
        height:100,
        backgroundColor:'#5856d6',
        borderWidth:10,
        borderColor:'white',
        // position:'absolute',
        // bottom:10
        // top:10,
        // right:10,
    },
    orangeBox:{
        width:100,
        height:100,
        backgroundColor:'#f0a23b',
        borderWidth:10,
        borderColor:'white',
        // position:'absolute',
        // bottom:10,
        // right:10
    },
    blueBox:{
        width:100,
        height:100,
        backgroundColor:'#28c4d9',
        borderWidth:10,
        borderColor:'white',
        // position:'absolute',
        // bottom:10,
        // left:10
    }
})