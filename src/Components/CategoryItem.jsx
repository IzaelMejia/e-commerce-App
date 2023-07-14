import { StyleSheet, Text } from 'react-native'
import React from 'react'
import Card from './Card'

const CategoryItem = ({item}) => {
  return (
    //Agarramos items y mostramos o retnoranos el nombre de la categoria
                    //meter componente text dentro de la card que  se creo en Card.jsx
      <Card>
        <Text style={styles.textCategory}>{item}</Text>
      </Card>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
  textCategory:{
    fontSize:18,
    
  }
    
})