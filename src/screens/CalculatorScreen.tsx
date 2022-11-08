
import { useState } from "react"
import {  Text, TouchableOpacity, View,StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from "../theme/appTheme"
import { Button } from "../components/Button"
// import { styles } from "../../App"
export const CalculatorScreen=()=>{
    const [prevNumber,setPrevNumber]=useState('0')

    const [number,setNumber]=useState('0')
    const newNumber=(text:string)=>{
        // setPrevNumber('fdsfsd')
        // setNumber(number+text)
        if( number.includes('.') && text === '.' ) return;
        if(number.startsWith('0')||number.startsWith('-0')){
            if ( text === '.' ) {
                setNumber( number + text );

                // Evaluar si es otro cero, y hay un punto
            } else if( number === '0' && number.includes('.')  ) {
                setNumber( number + text );

                // Evaluar si es diferente de cero y no tiene un punto
            } else if( text !== '0' && !number.includes('.') ) {
                setNumber( text );

                // Evitar 0000.0
            } else if( text === '0' && !number.includes('.') ) {
                setNumber( number );
            } else {
                setNumber( number + text ); 
            }
        }
        else{
            setNumber(number+text)
        }
        // setNumber(number+text)
    }
    const positiveNegative = () => {
        if ( number.includes('-') ) {
            setNumber( number.replace('-', '') );
        } else {
            setNumber( '-' + number );
        }
    }
    const btnDelete = () => {
        
        let negativo = '';
        let numeroTemp = number;
        if ( number.includes('-') ) {
            negativo = '-';
            numeroTemp = number.substr(1);
        }

        if ( numeroTemp.length > 1 ) {
            setNumber( negativo + numeroTemp.slice(0,-1) );
        } else {
            setNumber('0');
        }
    }
    const clean=()=>{
        setNumber('0')
        setPrevNumber('0')
    }
    return(
        // <SafeAreaView style={styles.fondo} >
            <View style={styles.calculadoraContainer}>
               

                 <Text style={styles.resultadoPequeno} >
                    {prevNumber}
                </Text>
                <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit >
                    {number}
                </Text>
               
                
           
                <View style={styles.fila}>
                    <Button text="C" color="#9A9A94" action={clean}/>
                    <Button text="+/-"  color="#9A9A94" action={positiveNegative}/>
                    <Button text="%"  color="#9A9A94" action={newNumber}/>
                    <Button text="/" color="#E0970D" action={newNumber} />
                   
                </View>
                <View style={styles.fila}>
                    <Button text="7" action={newNumber}/>
                    <Button text="8" action={newNumber}/>
                    <Button text="9" action={newNumber}/>
                    <Button text="x" color="#E0970D" action={newNumber}/>
                   
                </View>
                <View style={styles.fila}>
                    <Button text="4" action={newNumber} />
                    <Button text="5" action={newNumber}/>
                    <Button text="6" action={newNumber}/>
                    <Button text="-" color="#E0970D" action={newNumber}/>
                   
                </View>
                
                <View style={styles.fila}>
                    <Button text="1" action={newNumber} />
                    <Button text="2" action={newNumber}/>
                    <Button text="3" action={newNumber}/>
                    <Button text="+" color="#E0970D" action={newNumber}/>
                   
                </View>
                <View style={styles.fila}>
                    <Button text="0" width action={newNumber}/>
                    <Button text="." action={newNumber}/>
                    <Button text="=" color="#E0970D" action={newNumber}/>
                    {/* <Button text="4"/> */}
                    {/* <Button text="2"/> */}
                </View>
               
            </View>
            
        // </SafeAreaView>
    )
}