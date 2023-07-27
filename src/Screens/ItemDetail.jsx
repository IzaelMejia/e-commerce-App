import { Button, Image,  StyleSheet, Text, View, useWindowDimensions } from "react-native";
import React, { useEffect, useState } from 'react'
import allProducts from "../Data/products.json"
  
// Mostrar solo el detalle del producto seleccionado 
const ItemDetail = ( {
  navigation,
  route //recibe el producto de la vist anterior
}) => {
        //productId es el que viene de ProductItem.jsx
        //renombramos con idSelected
  const {productId: idSelected} = route.params

  console.log(idSelected);  //comprobar que nos tira cuando seleccionamos un producto
  const [product, setProduct] = useState(null); //el producto al inicio es null

  //Poner Orientacion 
  const [orientation, setOrientation] = useState("portrait")
  const {width, height} = useWindowDimensions()

  useEffect(()=> {
    if (width > height) setOrientation("landscape") //definimos orientacion cuando ancho sea mayor que el alto 
    else setOrientation("portrait")    //miestras es vertical
  }, [width, height]) //aqui pasamos las dimenciones de la patalla

  console.log(orientation);

  // Effect que responde a idSelected y cuando cambia idSelected ,se cambia la funcion callBack
  useEffect(() => {
    //Encontrar el producto por su id
    const productSelected = allProducts.find((product) => product.id === idSelected);
    setProduct(productSelected);
}, [idSelected]);  //aquí seteamos el producto antes del renderizado

  //comprobar que llega el producto
  console.log(product);

  return (
    <View>
    
      {product ? (
      <View style={orientation === "portrait" ? styles.mainContenedor : styles.mainContainerLandscape} >
        
      <Image
        source={{ uri: product.images && product.images[0] }} //si product.images contiene una img entonces asignará la URL  
        style={styles.imagen}
        resizeMode="cover"
      />
      
        <View style={orientation === "portrait" ? styles.contenedorCaracteristicas : styles.contenedorCaracteristicasLandscape}>
          <Text style={styles.textCaracteristicas}>{product.title}</Text>
          <Text style={styles.textCaracteristicas}>{product.description}</Text>
          <Text style={styles.textPrecio}>${product.price}</Text>
          <Button style={styles.boton} title="Agregar"></Button>
        </View>
      </View>
      ) : null}

    </View>
  )
}

export default ItemDetail

const styles = StyleSheet.create({
    mainContenedor:{
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      padding: 10,
    } ,
    mainContainerLandscape: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-start",
      padding: 10, 
  },
    imagen:{
      width:350,
      height:250,
    },
    imagenLandscape:{
      width:350,
      height:250,
    },
    contenedorCaracteristicas:{
      margin:10,
      width:" 90%"
    },
    contenedorCaracteristicasLandscape:{
      margin:10,
      width:" 40%"
    },

    textPrecio:{
      fontSize:20,
      fontWeight:600,

    },

    textCaracteristicas:{
      flexDirection: 'column',
      fontSize:18

    }


})