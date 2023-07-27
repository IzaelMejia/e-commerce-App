import { Pressable, StyleSheet, Text, View,useWindowDimensions } from 'react-native'
import React from 'react'
import Card from './Card'
import { useDispatch } from 'react-redux'
import { setCategorySelected } from '../Features/Shop/shopSlice'

////De home a ItemListCategory
const CategoryItem = ({
  item,
  navigation
}) => { 
  const {width} = useWindowDimensions()

  const dispatch= useDispatch()

  //seleccioa la categoria y la manda con el dispatch 
  const onSelectCategory= ()=>{
    dispatch(setCategorySelected(item))
    navigation.navigate("ItemListCategory", {category: item})
  }
  
  return (
    <View style = {{width: width, alignItems: 'center'}}> {/* poder deslizar la patalla */}
      <Pressable    
        //navegar a patalla correspondientes, agregamso el nombre que se definio en Navigator.jsx
        onPress={onSelectCategory}   //aparte de que navege indicar a que categoria va a navegar
      >
        <Card>  {/*    //meter componente text dentro de la card que  se creo en Card.jsx*/}
          <Text style={styles.textCategory}>{item}</Text>
        </Card>
      </Pressable>
      </View>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
  textCategory:{
    fontSize:18,
    
  }
    
})