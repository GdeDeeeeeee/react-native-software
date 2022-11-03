import { useState } from "react"
import { Button, Text, TouchableOpacity, View,StyleSheet } from "react-native"
import babelConfig from "../../babel.config"

export const ContadorScreen=()=>{
    const [count,setCount]=useState(10)
    const handleButton=()=>{
        setCount(count+1)
    }
    const handleButton2=()=>{
        setCount(count-1)
    }
    return(

                <View style={styles.container}>
                    <Text style={styles.title}>
                        Contador: {count}

                    </Text>
                    <TouchableOpacity onPress={handleButton} style={styles.fabLocationBR}>
                            <View style={styles.fab}>
                                <Text style={styles.fabText}>+1</Text>
                            </View>
                           
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleButton2} style={styles.fabLocationBL}>
                            <View style={styles.fab}>
                                <Text style={styles.fabText}>-1</Text>
                            </View>
                           
                    </TouchableOpacity>
                    {/* <TouchableOpacity onPress={handleButton}  style={styles.floatingButton2}>
                            <Text style={{
                                color:'white',
                                textAlign:'center'
                            }}>-11</Text>
                    </TouchableOpacity> */}
                </View>
    )
}

const styles = StyleSheet.create({
    container: {
         flex:1,

        justifyContent: 'center',
     

    },
    title:{
        textAlign:'center',
        fontSize:40,
        top:-15
    },
    fab:{
        backgroundColor:'blue',
        width:60,
        height:60,
        borderRadius:100,
        justifyContent:'center'
    },
    fabText:{
        color:"white",
        fontSize:25,
        fontWeight:'bold',
        alignSelf:'center'
    },
    fabLocationBR:{
        position:'absolute',
        // bottom:25,
        right:25,
        top:20
    },
    fabLocationBL:{
        position:'absolute',
        // bottom:25,
        left:25,
        top:20
    }
    
  });
  