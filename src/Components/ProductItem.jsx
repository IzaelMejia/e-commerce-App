import { StyleSheet, Text, Image } from 'react-native'
import React from 'react'
import Card from './Card'

const ProductItem = ({item}) => {

  

  return (
    <Card
      //estilos definidos abajo , se los pasamos 
      additionalStyle={styles.additionalStyleCard}

    >
        <Text style={styles.textCategory}>{item.title}</Text> {/* Titulo del producto*/}
        <Image
            resizeMode="cover"   /* Propiedades de la img*/
            style={styles.image} 
            source={{uri: item.images[0]}}
        />
    </Card>
  )
}

export default ProductItem

const styles = StyleSheet.create({

// Tmaño de la imagenes
  image:{
    height:100,
    width: 100,
    borderRadius: 8 ,
    marginRight:5
  },
  additionalStyleCard:{
    flexDirection:"row",
    height:150,
    justifyContent:"space-between",
    
  },
  textCategory:{
    fontSize:18,
    fontFamily:"Fira"
  }


})