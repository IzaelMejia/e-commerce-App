import { StyleSheet, Text, View } from 'react-native';
import Header from './src/Components/Header';
import ItemListCategory from './src/Screens/ItemListCategory';
import { useFonts } from 'expo-font';
import Home from "./src/Screens/Home"
import { useState } from 'react';

import ItemDetail from './src/Screens/ItemDetail';


export default function App() {

  const [categorySelected, setCategorySelected] = useState("")
  const [productSelected,setProductSelected] = useState("")

  // Hook de fuente de letra
  const [fontsLoaded] = useFonts({
    'Fira': require('./src/assets/fonts/FiraSansCondensed-Medium.ttf'),
  });

  // Si no hay fuentes cargadas no muestres nada
  if (!fontsLoaded) {
    return null;
  }
  

  return (
    <View style={styles.container}>
      
      <Header/>

      {     //si se selecciona una categoria que nos mande a los productos de esa categoria 
        categorySelected ? 
        <ItemListCategory
          category={categorySelected}  //enviamos categoria que etsa seleccionada
          setCategory={setCategorySelected}
          setProductSelected={setProductSelected}
        />:                       
        productSelected ?   //si hay producto seleccionado manda a ItemDetail
        <ItemDetail/> :
        <Home
          setCategorySelected={setCategorySelected} //pasar funcion para que pase la categoria
        />
      }
      {/* <ItemListCategory/>  */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
