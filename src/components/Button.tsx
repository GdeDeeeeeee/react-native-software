
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';
interface Props{
    text:string;
    // color?:string;
    width?:boolean;
    // action:(textNumber:string)=>void;
}
// export const Button=({text,color='#2d2d2d',width=false,action}:Props)=>{

export const Button=({text,width=false}:Props)=>{
    return(
    <TouchableOpacity
        
        // onPress={()=>action(text)}
    >
        <View 
            style={{
                ...styles.boton,
                width:(width?180:80)
            }}
            
            >
            <Text style={styles.botonTexto}>
                {text}

            </Text>
        </View>

    </TouchableOpacity>        
    )
}