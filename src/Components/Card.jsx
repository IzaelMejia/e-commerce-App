import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {colors} from "../Global/Colors"

// Envolver las categorias que estan en Home.jsx  

//pasamos por props la vista de las categorias
//prop adicional , parametro por defecto si no vine nada pone array vacio
const Card = ({children, additionalStyle =[]}) => {
  return (
                  //mediante prop enviamos el estilo adicional
    <View style={[styles.contendedorCards, additionalStyle]}> 
      {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    
    contendedorCards:{
      width:250,
      height:50,
      marginVertical:10,
      backgroundColor:colors.salom,
      justifyContent:"center",
      alignItems:"center",

      borderRadius:4,
      shadowColor: "#000",
      shadowOffset:{
      width: 0,
      height: 4,
      },
      shadowOpacity: 0.30,
      shadowRadius: 4.65,
      elevation: 8, 
    },

})