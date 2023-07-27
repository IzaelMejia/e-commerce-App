import { StyleSheet, View, Image, Text, Pressable } from 'react-native';
import React from 'react';
import { colors } from '../Global/Colors';
import { AntDesign } from '@expo/vector-icons';

const Header = (
  // Recibimos propiedades
  {route,
  navigation}
) => {

  let title 
    if(route.name === "Home") title = "Home"
      if(route.name === "ItemListCategory") title = route.params.category
       if(route.name === "Detail") title = route.params.title
        else title= route.name

  return (

    <View style={styles.containerHeader}>

      <View style={styles.logoContainer}>
        <Image
          source={require('./logoVeterinaria.png')}
          style={styles.logo}
          resizeMode="contain" // Ajusta el logo al tamaño del contenedor manteniendo su relación de aspecto
        />
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.texto}>{title}</Text>
      </View>

      <View style={styles.backContainer}>
        {
          route.name !== "Home" ?  //Ternario para que no muestre el back cando estamos en home
            <Pressable
            style={styles.pressable}
            onPress={() => navigation.goBack()}
            >
            <AntDesign name="back" size={26} color="black" />
            </Pressable>
        
          : null
        }
      </View>

    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  containerHeader: {
    backgroundColor: colors.rojo,
    flexDirection: 'row', // Alinea los elementos en fila
    alignItems: 'center', // Centra los elementos verticalmente
    justifyContent: 'space-between', // Espacio entre los elementos
    padding:15
  },
  logoContainer: {
    flex: 1, // Ocupa el espacio disponible y centra horizontalmente
    alignItems: 'center', // Centra el contenido del contenedor
  },
  titleContainer: {
    flex: 1, // Ocupa el espacio disponible y centra horizontalmente
    alignItems: 'center', // Centra el contenido del contenedor
  },
  backContainer: {
    flex: 1, // Ocupa el espacio disponible y centra horizontalmente
    alignItems: 'center', // Centra el contenido del contenedor
  },
  texto:{
    fontSize:18,
    fontFamily: 'Fira',
    textAlign:"center"
  },
  pressable: {
    left: 10,
  },
  logo: {
    width: 100, // Ajusta el ancho deseado del logo
    height: 40, // Ajusta el alto deseado del logo
  },
});
