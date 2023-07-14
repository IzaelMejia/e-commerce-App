import { StyleSheet, Text, View } from 'react-native';
import Header from './src/Components/Header';
import ItemListCategory from './src/Screens/ItemListCategory';
import { useFonts } from 'expo-font';


export default function App() {
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
      <Header></Header>
      <ItemListCategory/> 

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
