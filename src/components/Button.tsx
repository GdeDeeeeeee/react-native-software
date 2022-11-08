
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';
interface Props{
    text:string;
    color?:string;
    width?:boolean;
    action:(textNumber:string)=>void;
}
// export const Button=({text,color='#2d2d2d',width=false,action}:Props)=>{

export const Button=({text,width=false,color='#2D2D2D',action}:Props)=>{
    return(
    <TouchableOpacity
        
        // onPress={()=>action(text)}
        onPress={()=>action(text)}
    >
        <View 
            style={{
                ...styles.boton,
                width:(width?180:80),
                backgroundColor: color
            }}
            
            >
            <Text style={{...styles.botonTexto,color:(color==='#9A9A94'?'black':'white')}}>
                {text}

            </Text>
        </View>

    </TouchableOpacity>        
    )
}