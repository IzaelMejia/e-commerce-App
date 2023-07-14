import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import Colors, { colors } from "../Global/Colors"

const Header = () => {
  return (
    <View style={styles.containerHeader}>  
        <Image 
            source={require('./logoVeterinaria.png')} 
            style={styles.logo}
        /> 
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    containerHeader:{
        height: '10%',
        backgroundColor:colors.rojo,
        justifyContent:"center",
        alignItems:"center"
    },
    logo:{
        width:190,
        height:60
    }
    
})