import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import Card from '../Components/Card';
import categories from "../Data/categories.json"
import { colors } from '../Global/Colors'; 
import CategoryItem from '../Components/CategoryItem';


// Aquí mostramos las categorias 

const Home = () => {
  return (
    <View style={styles.container}>
        <FlatList
            data={categories}
            keyExtractor={category => category} 
                                   //esta es la calse CategoryItem y aquí llega lo que se le paso de CategoryItem.jsx
            renderItem={({item}) =>CategoryItem({item})}
            showsVerticalScrollIndicator={false}       //quitar el scroll
        >  
       </FlatList>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        height:"90%",
        alignItems:"center",
        marginTop:8


    },
    contenedorLista:{
        marginTop:10,
        width:100,
        height:40,

    }

})