import { StyleSheet,  View,FlatList } from 'react-native'
import React from 'react'
import CategoryItem from '../Components/CategoryItem';
import Counter from '../Components/Counter';
import { useGetCategoriesQuery } from '../Services/shopServices';


// Aquí mostramos las categorias en un FlatLists
const Home = ({
    navigation //propiedad para navegar entra pantallas, es como un chilldren

}) => {
    // llamamos hook "useGetCategoriesQuery" y hacemos llamado a la url paraa mostrar los de category
    const {data:categories, isLoading, isError}= useGetCategoriesQuery() //isLoading: Indica si esta cargado el llamado 

    
    console.log(isLoading);
    console.log(isError);
    console.log(categories);
  return (
    <View style={styles.container}>
        <Counter/>
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