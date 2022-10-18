import { useState } from "react"
import { Button, Text, View } from "react-native"

export const ContadorScreen=()=>{
    const [count,setCount]=useState(10)
    const handleButton=()=>{
        setCount(count+1)
    }
    return(
        <View style={{
            flex:1,
            justifyContent:'center'
        }}>
            <Text style={{
                fontSize:50,
                textAlign:'center',
                top:-15
            }}>
                Contador: {count}

            </Text>
            <Button onPress={handleButton}
                    title="MAS"
                    color="#841584"
            />
        </View>

    )
}