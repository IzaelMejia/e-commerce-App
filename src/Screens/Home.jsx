import { StyleSheet,  View,FlatList } from 'react-native'
import React from 'react'
import categories from "../Data/categories.json"
import CategoryItem from '../Components/CategoryItem';


// Aquí mostramos las categorias en un FlatLists
const Home = ({
    navigation //propiedad para navegar entra pantallas, es como un chilldren

}) => {
  return (
    <View style={styles.container}>
        <FlatList
            data={categories}
            keyExtractor={category => category} 
                                   //esta es la calse CategoryItem y aquí llega lo que se le paso de CategoryItem.jsx
            renderItem={({item}) =><CategoryItem item={item} navigation={navigation}/>} //ademas de item , selecciona el chilldren
            showsVerticalScrollIndicator={false}       //quitar el scroll
            
        >  
       </FlatList>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{ 
        alignItems:"center",
        backgroundColor:"#fff",
    },
     
})