import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import Colors, { colors } from '../Global/Colors';

const Header = () => {
  return (
    <View style={styles.containerHeader}>
      <Image
        source={require('./logoVeterinaria.png')}
        style={styles.logo}
        resizeMode="contain" // Ajusta el logo al tamaño del contenedor manteniendo su relación de aspecto
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  containerHeader: {
     // Establece una altura adecuada para el contenedor del logo
    backgroundColor: colors.rojo,
    alignItems: 'start',
  },
  logo: {
    width: 100, // Ajusta el ancho deseado del logo
    height: 50, // Ajusta el alto deseado del logo
  },
});
