
import { useState } from "react"
import {  Text, TouchableOpacity, View,StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from "../theme/appTheme"
import { Button } from "../components/Button"
import { useCalculadora } from "../hooks/useCalculadora"
// import { styles } from "../../App"
export const CalculatorScreen=()=>{
    const {
        numeroAnterior,
        numero,
        limpiar,
        positioNegativo,
        btnDelete,
        btnDividir,
        armarNumero,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calcular,
        btnPotencia,
        btnFactorial,
        btnMod
    } = useCalculadora();

    return(
        // <SafeAreaView style={styles.fondo} >
        <View style={ styles.calculadoraContainer }>
        {
            ( numeroAnterior !== '0') && (
                <Text style={ styles.resultadoPequeno }>{ numeroAnterior }</Text>
            )
        }
        
        <Text 
            style={ styles.resultado }
            numberOfLines={ 1 }
            adjustsFontSizeToFit
        >
            { numero }
        </Text>

       
        {/* Fila de botones */}
        <View style={ styles.fila }>
            <Button text="C" color="#9B9B9B" action={ limpiar } />
            <Button text="+/-" color="#9B9B9B" action={ positioNegativo } />
            <Button text="del" color="#9B9B9B" action={ btnDelete } />
            <Button text="/" color="#FF9427" action={ btnDividir } />
        </View>
        {/*Fila de botones examen*/}
        <View style={ styles.fila }>
            <Button text="x^y" action={ btnPotencia } width />
            <Button text="n!" action={ btnFactorial } />
            <Button text="mod" color="#FF9427" action={ btnMod } />
        </View>
        {/* Fila de botones */}
        <View style={ styles.fila }>
            <Button text="7" action={ armarNumero } />
            <Button text="8" action={ armarNumero } />
            <Button text="9" action={ armarNumero } />
            <Button text="X" color="#FF9427" action={ btnMultiplicar } />
        </View>

        {/* Fila de botones */}
        <View style={ styles.fila }>
            <Button text="4" action={ armarNumero } />
            <Button text="5" action={ armarNumero } />
            <Button text="6" action={ armarNumero } />
            <Button text="-" color="#FF9427" action={ btnRestar } />
        </View>

        {/* Fila de botones */}
        <View style={ styles.fila }>
            <Button text="1" action={ armarNumero } />
            <Button text="2" action={ armarNumero } />
            <Button text="3" action={ armarNumero } />
            <Button text="+" color="#FF9427" action={ btnSumar } />
        </View>

        {/* Fila de botones */}
        <View style={ styles.fila }>
            <Button text="0" action={ armarNumero } width />
            <Button text="." action={ armarNumero } />
            <Button text="=" color="#FF9427" action={ calcular } />
        </View>
     

    </View>
    )
}