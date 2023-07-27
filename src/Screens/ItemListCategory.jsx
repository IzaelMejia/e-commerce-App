import { FlatList, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import productsRaw from '../Data/products.json'
import ProductItem from '../Components/ProductItem'
import Search from '../Components/Search'


//Aquí se muestran los productos de la categorya que se selecciono anterior mente 

//renderiza productos por categoria 
const ItemListCategory = ({
  navigation,
  route  //atraves de este route vamos a recibir la categoria  que se selecciona
}) => {
                      //parametros
  const {category} = route.params

  const [products, setProducts] = useState([])
  const [keyword, setKeyword] = useState("")
  const [keywordError, setKeywordError] = useState("")

  useEffect(()=> {
    //Lógica de manejo de category
    const productsFiltered = productsRaw.filter(product => product.category === category && product.title.toLocaleLowerCase().includes(keyword.toLowerCase()))
    setProducts(productsFiltered)

  }, [category, keyword])

  const onSearch = (input) => {
    const expression = /^[a-zA-Z0-9\ ]*$/
    const evaluation = expression.test(input)

    if (evaluation) {
      setKeyword(input)
      setKeywordError("")
    } else {
      console.log("Solo letras y números");
      setKeywordError("Solo letras y números")
    }

  }  

  return (
    <View style={styles.container}>
        <Search
          onSearch={onSearch}
          error={keywordError}
          goBack={()=> navigation.goBack()}
        />
        <FlatList
            data = {products}
            keyExtractor={product => product.id}
            //no se puede ejecutar hook en  una funcion tiene por eso se paso en forma de componente
            renderItem={({item}) => 
                <ProductItem 
                  item={item}   //se envia el item(producto)
                  navigation={navigation}
                  />}
                  showsVerticalScrollIndicator={false}
        />
    </View>
  )
}

export default ItemListCategory

const styles = StyleSheet.create({
    container: {
      height: '100%',
        backgroundColor: "#fff",
        alignItems: 'center'
    }
})