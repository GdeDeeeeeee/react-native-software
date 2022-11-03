
import { useState } from "react"
import {  Text, TouchableOpacity, View,StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from "../theme/appTheme"
import { Button } from "../components/Button"
// import { styles } from "../../App"
export const CalculatorScreen=()=>{
    return(
        // <SafeAreaView style={styles.fondo} >
            <View style={styles.calculadoraContainer}>
               

                 <Text style={styles.resultadoPequeno} >
                    15000
                </Text>
                <Text style={styles.resultado} >
                    155550
                </Text>
                <View style={styles.fila}>
                    <Button text="1" />
                    <Button text="2"/>
                    <Button text="3"/>
                    <Button text="%"/>
                   
                </View>
                <View style={styles.fila}>
                    <Button text="4" />
                    <Button text="5"/>
                    <Button text="6"/>
                    <Button text="-"/>
                   
                </View>
                <View style={styles.fila}>
                    <Button text="7" />
                    <Button text="8"/>
                    <Button text="9"/>
                    <Button text="x"/>
                   
                </View>
                <View style={styles.fila}>
                    <Button text="C" />
                    <Button text="+/-"/>
                    <Button text="%"/>
                    <Button text="/"/>
                   
                </View>
                <View style={styles.fila}>
                    <Button text="0" width />
                    <Button text="-"/>
                    <Button text="."/>
                    {/* <Button text="4"/> */}
                    {/* <Button text="2"/> */}
                </View>
               
            </View>
            
        // </SafeAreaView>
    )
}