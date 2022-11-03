import { useState } from "react"
import { Button, Text, TouchableOpacity, View,StyleSheet } from "react-native"


export const FlexScreen=()=>{
    return(
        <View style={styles.container}>
            <Text style={styles.box1}>
                box 1
            </Text>
            <Text  style={styles.box2}>
                box 2
            </Text>
            <Text style={styles.box3}>
                box 3
            </Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'green',
        // justifyContent:'flex-end'
        //task_2_image1
        flexDirection:'row',
        alignItems:'flex-end',
        justifyContent:'flex-end'
        //task_2_image2
        // flexDirection:'column',
        // alignItems:'flex-end',
    },
    box1:{
        borderWidth:2,
        borderColor:'white',
        fontSize:30
    },
    box2:{
        borderWidth:2,
        borderColor:'white',
        fontSize:30
    },
    box3:{
        borderWidth:2,
        borderColor:'white',
        fontSize:30
    }
})

