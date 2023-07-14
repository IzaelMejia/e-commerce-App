import { Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'
import Card from './Card'

const CategoryItem = ({
  item,
  setCategorySelected
}) => { 
 
  
  return (
    //Agarramos items y mostramos o retnoranos el nombre de la categoria
                    //meter componente text dentro de la card que  se creo en Card.jsx
    <Pressable
      onPress={()=>setCategorySelected(item)}  
    >
      
      <Card>
        <Text style={styles.textCategory}>{item}</Text>
      </Card>
    </Pressable>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
  textCategory:{
    fontSize:18,
    
  }
    
})