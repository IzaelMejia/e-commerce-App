import { StyleSheet, FlatList, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import productsRaw from '../Data/products.json'
import ProductItem from '../Components/ProductItem'

import Search from '../Components/Search'

const ItemListCategory = () => {

  // Variables de estado
  const [categorySelected, setCategorySelected] = useState("smartphones")
  const [products, setProducts] = useState([])
  const [keyword, setKeyword] = useState("")
  const [keywordError, setKeywordError] = useState("")

  // hook useEffect  -  se ejecutará cada vez que haya un cambio en las dependencias keyword
  useEffect(()=> {
       // Obtener array productsFiltered. 
       // ProductsRaw es un arreglo de productos sin filtrar y despues funcion flecha que
       // Filtra los productos por categoria cuando sea seleccionada la cagoria 
       // Verifica si el título del producto incluye el texto de búsqueda.   
    const productsFiltered = productsRaw.filter(product => product.category === categorySelected && product.title.toLocaleLowerCase().includes(keyword.toLowerCase()))
    setProducts(productsFiltered) //actualizar el estado de la variable products en el componente y volverá a renderizarse con la nueva lista de productos filtrados

    //lo anterior esta de useEffect
  }, [categorySelected, keyword]) //se ejecutará nuevamente cuando haya cambios en las variables categorySelected o keyword

    // Función para la búsqueda de productos
  const onSearch = (input) => {
    setKeyword(input)
    const expression = /^[a-zA-Z0-9\ ]*$/    //hacer Validacion
    const evaluation = expression.test(input)
    
    //cuando solamente le ponga letras o numeros 
    if (evaluation) {
      setKeyword(input)
      setKeywordError("")
    } else {
      console.log("Solo letras y números");
      setKeywordError("Solo letras y números")
    }

  }  

  // Renderizado del componente
  return (
    <View style={styles.container}>
      <Search
        onSearch={onSearch}
        error={keywordError}
      />
    <FlatList
            data = {products}
            keyExtractor={product => product.id}
            renderItem={({item}) => ProductItem({item})}
            showsVerticalScrollIndicator={false}
        />
    </View>
  )
}

export default ItemListCategory

const styles = StyleSheet.create({
  container:{
    height:"90%",
    alignItems: 'center',
  }
})