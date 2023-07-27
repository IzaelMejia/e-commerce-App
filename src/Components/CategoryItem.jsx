import { Pressable, StyleSheet, Text, View,useWindowDimensions } from 'react-native'
import React from 'react'
import Card from './Card'


////De home a ItemListCategory
const CategoryItem = ({
  item,
  navigation
}) => { 
  const {width} = useWindowDimensions()
  
  return (
    <View style = {{width: width, alignItems: 'center'}}> {/* poder deslizar la patalla */}
      <Pressable    
        //navegar a patalla correspondientes, agregamso el nombre que se definio en Navigator.jsx
        onPress={()=>navigation.navigate("ItemListCategory", {category: item})}   //aparte de que navege indicar a que categoria va a navegar
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