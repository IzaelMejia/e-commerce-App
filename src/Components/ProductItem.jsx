import { StyleSheet, Text, Image, useWindowDimensions, Pressable } from 'react-native';
import React from 'react';
import Card from './Card';
import { View } from 'react-native-web';

//Productos de la categoria seleccionada
const ProductItem = ({ 
  item,
  setProductSelected,
  setCategorySelected

}) => {
  const { height, width } = useWindowDimensions();
  console.log(height, width);

  const onSelect= (id)=>{  //producto seleccionado 
    setProductSelected(id)
    setCategorySelected("")
  }

  return (                                
                                //seteamos el id del producto "item.id"
    <Pressable onPress={()=> setProductSelected(item.id)}>
      <View style={styles.container}>
        <Card additionalStyle={width > 350 ? styles.additionalStyleCard:styles.additionalStyleCardSm}>
          <Text style={width > 350 ? styles.textCategory : styles.textCategorySm}>
            {item.title}
          </Text>
          {/* Titulo del producto */}
          <Image
            resizeMode="cover"
            style={styles.image}
            source={{ uri: item.images[0] }}
          />
        </Card>
      </View>
    </Pressable>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  // Tamaño de las imágenes
  image: {
    height: 100,
    minWidth: 100,
    width: '40%',
    maxWidth: 250,
    borderRadius: 8,
    marginRight: 5,
  },
  container: {
    flex: 1, // Ocupar todo el espacio disponible
    justifyContent: 'center', // Centrar verticalmente
    alignItems: 'center', // Centrar horizontalmente
  },
  additionalStyleCard: {
    width: '90%',
    flexDirection: 'row',
    height: 150,
    alignItems: 'center',
  },
  additionalStyleCardSm: {
    width: '80%',
    flexDirection: 'row',
    height: 150,
    alignItems: 'center',
  },
  textCategory: {
    width: '50%',
    fontSize: 20,
    fontFamily: 'Fira',
  },
  textCategorySm: {
    width: '50%',
    fontSize: 16,
    fontFamily: 'Fira',
  },
});
